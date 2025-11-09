from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
import requests
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
import datetime as dt
import os

app = Flask(__name__)
CORS(app)

DATA_URL = "https://hackutd2025.eog.systems/api/Data"
INFO_URL = "https://hackutd2025.eog.systems/api/Information/cauldrons"

# Cache for model and data (in production, use Redis or similar)
_model_cache = {}
_data_cache = {}
_cache_timestamp = None
CACHE_DURATION = 300  # 5 minutes


def fetch_api_data():
    """Fetch raw data from the API"""
    try:
        data_json = requests.get(DATA_URL, timeout=5).json()
    except Exception as e:
        print(f"API fetch failed: {e}")
        return pd.DataFrame()

    records = []
    for entry in data_json:
        ts = pd.to_datetime(entry.get("timestamp"))
        for cid, level in entry.get("cauldron_levels", {}).items():
            records.append({"Time": ts, "Cauldron_ID": cid, "Oil_Level": level})
    return pd.DataFrame(records)


def compute_features(df, window=10):
    """Compute rolling statistics and features"""
    df = df.sort_values(["Cauldron_ID", "Time"]).copy()
    df["Diff"] = df.groupby("Cauldron_ID")["Oil_Level"].diff()
    df["Rolling_Mean"] = df.groupby("Cauldron_ID")["Oil_Level"].rolling(window).mean().reset_index(level=0, drop=True)
    df["Rolling_Std"] = df.groupby("Cauldron_ID")["Oil_Level"].rolling(window).std().reset_index(level=0, drop=True)
    df["Slope"] = df.groupby("Cauldron_ID")["Oil_Level"].diff(window) / window
    df["Momentum"] = df["Oil_Level"] - df["Rolling_Mean"]
    df["Next_Level"] = df.groupby("Cauldron_ID")["Oil_Level"].shift(-1)
    df["Target"] = (df["Next_Level"] < df["Oil_Level"]).astype(int)
    return df.dropna()


def detect_high_prob_intervals(df, prob_threshold=0.9):
    """Detect intervals with high drain probability"""
    intervals = []
    in_interval = False
    start_idx = None
    
    for idx, row in df.iterrows():
        if not in_interval and row['Prob_Down'] >= prob_threshold:
            in_interval = True
            start_idx = idx
        elif in_interval and row['Prob_Down'] < prob_threshold:
            if start_idx is not None:
                start_row = df.loc[start_idx]
                duration = (row['Time'] - start_row['Time']).total_seconds() / 60  # minutes
                oil_change = row['Oil_Level'] - start_row['Oil_Level']
                rate = oil_change / duration if duration > 0 else 0
                avg_prob = df.loc[start_idx:idx]['Prob_Down'].mean()
                
                intervals.append({
                    'cauldron_id': start_row['Cauldron_ID'],
                    'start_time': start_row['Time'].isoformat(),
                    'end_time': row['Time'].isoformat(),
                    'duration_mins': duration,
                    'oil_change': float(oil_change),
                    'rate_of_change': float(rate),
                    'start_level': float(start_row['Oil_Level']),
                    'end_level': float(row['Oil_Level']),
                    'avg_probability': float(avg_prob),
                    'max_probability': float(df.loc[start_idx:idx]['Prob_Down'].max())
                })
            in_interval = False
            start_idx = None
    
    if in_interval and start_idx is not None:
        last_row = df.iloc[-1]
        duration = (last_row['Time'] - df.loc[start_idx, 'Time']).total_seconds() / 60
        oil_change = last_row['Oil_Level'] - df.loc[start_idx, 'Oil_Level']
        rate = oil_change / duration if duration > 0 else 0
        avg_prob = df.loc[start_idx:]['Prob_Down'].mean()
        
        intervals.append({
            'cauldron_id': df.loc[start_idx, 'Cauldron_ID'],
            'start_time': df.loc[start_idx, 'Time'].isoformat(),
            'end_time': last_row['Time'].isoformat(),
            'duration_mins': duration,
            'oil_change': float(oil_change),
            'rate_of_change': float(rate),
            'start_level': float(df.loc[start_idx, 'Oil_Level']),
            'end_level': float(last_row['Oil_Level']),
            'avg_probability': float(avg_prob),
            'max_probability': float(df.loc[start_idx:]['Prob_Down'].max())
        })
            
    return intervals


def compute_fill_rate_from_non_drain(df, prob_threshold=0.9):
    """Compute baseline fill rate from non-drain periods"""
    if df.empty:
        return None

    df = df.sort_values('Time').reset_index(drop=True)
    df['dt_min'] = df['Time'].diff().dt.total_seconds() / 60.0
    df['dOil'] = df['Oil_Level'].diff()
    df['step_rate'] = df['dOil'] / df['dt_min']

    non_drain_mask = (df['Prob_Down'] < prob_threshold)
    valid_steps = non_drain_mask & non_drain_mask.shift(1).fillna(False)

    if valid_steps.any():
        return float(df.loc[valid_steps, 'step_rate'].mean())
    else:
        return None


def get_or_train_model():
    """Get cached model or train a new one"""
    global _model_cache, _data_cache, _cache_timestamp
    
    # Check if cache is valid
    if _cache_timestamp and (dt.datetime.now() - _cache_timestamp).total_seconds() < CACHE_DURATION:
        return _model_cache.get('model'), _data_cache.get('combined')
    
    # Fetch and process data
    raw_df = fetch_api_data()
    if raw_df.empty or raw_df["Time"].nunique() < 15 or raw_df["Oil_Level"].nunique() <= 1:
        return None, None
    
    # Compute features
    df = compute_features(raw_df)
    
    # Train model
    numeric_features = ["Diff", "Rolling_Mean", "Rolling_Std", "Slope", "Momentum"]
    categorical_features = ["Cauldron_ID"]
    
    preprocess = ColumnTransformer(
        transformers=[
            ("num", StandardScaler(), numeric_features),
            ("cat", OneHotEncoder(handle_unknown="ignore"), categorical_features),
        ]
    )
    
    model = Pipeline([
        ("preprocess", preprocess),
        ("clf", LogisticRegression(max_iter=200))
    ])
    
    X = df[numeric_features + categorical_features]
    y = df["Target"]
    model.fit(X, y)
    
    # Predict on all data
    combined = compute_features(raw_df)
    X_live = combined[numeric_features + categorical_features]
    combined["Prob_Down"] = model.predict_proba(X_live)[:, 1]
    
    # Cache results
    _model_cache['model'] = model
    _data_cache['combined'] = combined
    _cache_timestamp = dt.datetime.now()
    
    return model, combined


@app.route("/api/health", methods=["GET"])
def health():
    """Health check endpoint"""
    return jsonify({"status": "ok", "message": "Server is running"})


@app.route("/api/cauldrons", methods=["GET"])
def get_cauldrons():
    """Get list of available cauldrons"""
    model, combined = get_or_train_model()
    if combined is None:
        return jsonify({"error": "Unable to fetch data"}), 500
    
    cauldrons = sorted(combined["Cauldron_ID"].unique().tolist())
    return jsonify({"cauldrons": cauldrons})


@app.route("/api/cauldron/<cauldron_id>/graph", methods=["GET"])
def get_cauldron_graph(cauldron_id):
    """Get graph data for a specific cauldron - time on x-axis, potion level on y-axis"""
    model, combined = get_or_train_model()
    if combined is None:
        return jsonify({"error": "Unable to fetch data"}), 500
    
    # Normalize cauldron_id format
    if cauldron_id.isdigit():
        cauldron_id = f"cauldron_{int(cauldron_id):03d}"
    
    cdf = combined[combined["Cauldron_ID"] == cauldron_id]
    if cdf.empty:
        return jsonify({"error": f"Cauldron {cauldron_id} not found"}), 404
    
    # Sort by time to ensure proper ordering
    cdf = cdf.sort_values("Time")
    
    # Format graph data: time on x-axis, potion level (Oil_Level) on y-axis
    graph_data = []
    for _, row in cdf.iterrows():
        graph_data.append({
            "time": row["Time"].isoformat(),
            "timeFormatted": row["Time"].strftime("%Y-%m-%d %H:%M:%S"),
            "potionLevel": float(row["Oil_Level"]),
            "oilLevel": float(row["Oil_Level"]),  # Keep for backward compatibility
            "probDown": float(row["Prob_Down"]),
            "probDownPercent": float(row["Prob_Down"] * 100)  # As percentage for display
        })
    
    return jsonify({
        "cauldron_id": cauldron_id,
        "data": graph_data,
        "count": len(graph_data),
        "xAxis": "time",
        "yAxis": "potionLevel",
        "description": f"Time series graph for {cauldron_id} - Time (x-axis) vs Potion Level (y-axis)"
    })


@app.route("/api/cauldron/<cauldron_id>/timeseries", methods=["GET"])
def get_cauldron_timeseries(cauldron_id):
    """Get time series data for a specific cauldron"""
    model, combined = get_or_train_model()
    if combined is None:
        return jsonify({"error": "Unable to fetch data"}), 500
    
    cdf = combined[combined["Cauldron_ID"] == cauldron_id]
    if cdf.empty:
        return jsonify({"error": f"Cauldron {cauldron_id} not found"}), 404
    
    # Format time series data
    timeseries = []
    for _, row in cdf.iterrows():
        timeseries.append({
            "time": row["Time"].isoformat(),
            "oilLevel": float(row["Oil_Level"]),
            "probDown": float(row["Prob_Down"])
        })
    
    return jsonify({
        "cauldron_id": cauldron_id,
        "data": timeseries,
        "count": len(timeseries)
    })


@app.route("/api/cauldron/<cauldron_id>/intervals", methods=["GET"])
def get_cauldron_intervals(cauldron_id):
    """Get high probability drain intervals for a specific cauldron"""
    prob_threshold = float(request.args.get("threshold", 0.9))
    
    model, combined = get_or_train_model()
    if combined is None:
        return jsonify({"error": "Unable to fetch data"}), 500
    
    cdf = combined[combined["Cauldron_ID"] == cauldron_id]
    if cdf.empty:
        return jsonify({"error": f"Cauldron {cauldron_id} not found"}), 404
    
    intervals = detect_high_prob_intervals(cdf, prob_threshold)
    
    # Compute fill rate baseline
    fill_rate_baseline = compute_fill_rate_from_non_drain(cdf, prob_threshold)
    
    # Add potion removed estimates
    for interval in intervals:
        duration = interval['duration_mins']
        net_rate = interval['rate_of_change']
        if fill_rate_baseline is None or pd.isna(fill_rate_baseline):
            interval['potion_removed'] = abs(interval['oil_change'])
            interval['est_drain_rate'] = None
        else:
            est_drain_rate = fill_rate_baseline - net_rate
            if est_drain_rate < 0:
                est_drain_rate = 0
            interval['potion_removed'] = float(est_drain_rate * duration)
            interval['est_drain_rate'] = float(est_drain_rate)
    
    return jsonify({
        "cauldron_id": cauldron_id,
        "threshold": prob_threshold,
        "fill_rate_baseline": fill_rate_baseline,
        "intervals": intervals,
        "count": len(intervals)
    })


@app.route("/api/cauldron/<cauldron_id>/stats", methods=["GET"])
def get_cauldron_stats(cauldron_id):
    """Get statistics for a specific cauldron"""
    model, combined = get_or_train_model()
    if combined is None:
        return jsonify({"error": "Unable to fetch data"}), 500
    
    cdf = combined[combined["Cauldron_ID"] == cauldron_id]
    if cdf.empty:
        return jsonify({"error": f"Cauldron {cauldron_id} not found"}), 404
    
    intervals = detect_high_prob_intervals(cdf)
    
    stats = {
        "cauldron_id": cauldron_id,
        "total_records": len(cdf),
        "avg_oil_level": float(cdf["Oil_Level"].mean()),
        "min_oil_level": float(cdf["Oil_Level"].min()),
        "max_oil_level": float(cdf["Oil_Level"].max()),
        "avg_prob_down": float(cdf["Prob_Down"].mean()),
        "max_prob_down": float(cdf["Prob_Down"].max()),
        "high_prob_intervals": len(intervals)
    }
    
    if intervals:
        stats["median_rate_change"] = float(pd.Series([i['rate_of_change'] for i in intervals]).median())
        stats["total_oil_change"] = float(sum([i['oil_change'] for i in intervals]))
        stats["avg_interval_duration"] = float(pd.Series([i['duration_mins'] for i in intervals]).mean())
    
    fill_rate_baseline = compute_fill_rate_from_non_drain(cdf)
    if fill_rate_baseline:
        stats["fill_rate_baseline"] = fill_rate_baseline
    
    return jsonify(stats)


@app.route("/api/all-cauldrons/stats", methods=["GET"])
def get_all_cauldrons_stats():
    """Get statistics for all cauldrons"""
    model, combined = get_or_train_model()
    if combined is None:
        return jsonify({"error": "Unable to fetch data"}), 500
    
    all_stats = []
    for cauldron in combined['Cauldron_ID'].unique():
        cauldron_data = combined[combined['Cauldron_ID'] == cauldron]
        cauldron_intervals = detect_high_prob_intervals(cauldron_data)
        
        stats = {
            'cauldron_id': cauldron,
            'total_intervals': len(cauldron_intervals),
            'avg_probability': float(cauldron_data['Prob_Down'].mean()),
            'max_probability': float(cauldron_data['Prob_Down'].max())
        }
        
        if cauldron_intervals:
            median_rate = pd.Series([i['rate_of_change'] for i in cauldron_intervals]).median()
            stats['median_rate_change'] = float(abs(median_rate)) if pd.notna(median_rate) else None
            stats['total_duration'] = float(sum([i['duration_mins'] for i in cauldron_intervals]))
        
        all_stats.append(stats)
    
    return jsonify({"cauldrons": all_stats})


@app.route("/api/refresh", methods=["POST"])
def refresh_cache():
    """Manually refresh the data cache"""
    global _cache_timestamp
    _cache_timestamp = None
    model, combined = get_or_train_model()
    
    if combined is None:
        return jsonify({"error": "Unable to refresh data"}), 500
    
    return jsonify({
        "status": "success",
        "message": "Cache refreshed",
        "timestamp": dt.datetime.now().isoformat(),
        "records": len(combined)
    })


if __name__ == "__main__":
    port = int(os.getenv("PORT", "5002"))  # Different port from overflow server
    app.run(host="0.0.0.0", port=port, debug=True)

