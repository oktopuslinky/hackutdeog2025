import pandas as pd
import requests
import numpy as np

DATA_URL = "https://hackutd2025.eog.systems/api/Data"
INFO_URL = "https://hackutd2025.eog.systems/api/Information/cauldrons"

# Streamlit UI removed from CLI path; this file can also be run as a script

def fetch_api_data():
    try:
        data_json = requests.get(DATA_URL, timeout=5).json()
    except Exception as e:
        print(f"API fetch failed: {e}")
        return pd.DataFrame()

    records = []
    for entry in data_json:
        ts = pd.to_datetime(entry.get("timestamp"))
        for cid, level in entry.get("cauldron_levels", {}).items():
            records.append({"Time": ts, "Cauldron_ID": cid, "Potion_Level": level})
    return pd.DataFrame(records)

def fetch_cauldron_info():
    """Return a mapping {Cauldron_ID -> Max_Capacity} from the info API.
    Tries multiple common field names for ID and capacity to be robust.
    """
    try:
        info = requests.get(INFO_URL, timeout=5).json()
    except Exception:
        return {}
    cap_map = {}
    if isinstance(info, list):
        for item in info:
            if not isinstance(item, dict):
                continue
            id_key = next((k for k in ["id", "Id", "cauldron_id", "CauldronId", "Cauldron_ID", "name"] if k in item), None)
            cap_key = next((k for k in ["max_capacity", "MaxCapacity", "capacity", "Capacity", "maxCapacity"] if k in item), None)
            if id_key and cap_key:
                cid = str(item[id_key])
                try:
                    cap = float(item[cap_key])
                except Exception:
                    continue
                cap_map[cid] = cap
    elif isinstance(info, dict):
        for k, v in info.items():
            try:
                cap = None
                if isinstance(v, dict):
                    cap = v.get("max_capacity") or v.get("MaxCapacity") or v.get("capacity") or v.get("Capacity")
                if cap is None:
                    cap = v
                cap_map[str(k)] = float(cap)
            except Exception:
                continue
    return cap_map

def compute_features(df, window=10):
    df = df.sort_values(["Cauldron_ID", "Time"]).copy()
    df["Diff"] = df.groupby("Cauldron_ID")["Potion_Level"].diff()
    df["Rolling_Mean"] = df.groupby("Cauldron_ID")["Potion_Level"].rolling(window).mean().reset_index(level=0, drop=True)
    df["Rolling_Std"] = df.groupby("Cauldron_ID")["Potion_Level"].rolling(window).std().reset_index(level=0, drop=True)
    df["Slope"] = df.groupby("Cauldron_ID")["Potion_Level"].diff(window) / window
    df["Momentum"] = df["Potion_Level"] - df["Rolling_Mean"]
    df["Next_Level"] = df.groupby("Cauldron_ID")["Potion_Level"].shift(-1)
    df["Target"] = (df["Next_Level"] < df["Potion_Level"]).astype(int)
    return df.dropna()

def compute_overflow_probability(df: pd.DataFrame) -> pd.DataFrame:
    """Estimate probability that a point is in an overflow (flat) regime.
    Heuristic: high when both |Slope| and Rolling_Std are small.
    """
    out = df.copy()
    abs_slope = out["Slope"].abs().fillna(0)
    roll_std = out["Rolling_Std"].fillna(out["Rolling_Std"].median())
    slope_scale = max(abs_slope.quantile(0.9), 1e-6)
    std_scale = max(roll_std.quantile(0.9), 1e-6)
    p_slope = np.exp(-abs_slope / slope_scale)
    p_std = np.exp(-roll_std / std_scale)
    flat_prob = (p_slope * p_std).clip(0, 1)

    cap_col = "Max_Capacity_Est"
    if cap_col in out.columns:
        with np.errstate(divide='ignore', invalid='ignore'):
            fullness = out["Potion_Level"] / out[cap_col]
        cap_factor = ((fullness - 0.96) / 0.04).clip(lower=0, upper=1)
        out["Prob_Overflow"] = (flat_prob * cap_factor).fillna(0)
    else:
        out["Prob_Overflow"] = flat_prob
    return out

def detect_high_prob_intervals(df, prob_threshold=0.9):
    intervals = []
    in_interval = False
    start_idx = None
    
    for idx, row in df.iterrows():
        if not in_interval and row['Prob_Overflow'] >= prob_threshold:
            in_interval = True
            start_idx = idx
        elif in_interval and row['Prob_Overflow'] < prob_threshold:
            if start_idx is not None:
                start_row = df.loc[start_idx]
                duration = (row['Time'] - start_row['Time']).total_seconds() / 60  # minutes
                potion_change = row['Potion_Level'] - start_row['Potion_Level']
                rate = potion_change / duration if duration > 0 else 0
                avg_prob = df.loc[start_idx:idx]['Prob_Overflow'].mean()
                
                intervals.append({
                    'start_time': start_row['Time'],
                    'end_time': row['Time'],
                    'duration_mins': duration,
                    'potion_change': potion_change,
                    'rate_of_change': rate,
                    'start_level': start_row['Potion_Level'],
                    'end_level': row['Potion_Level'],
                    'avg_probability': avg_prob,
                    'max_probability': df.loc[start_idx:idx]['Prob_Overflow'].max(),
                    'flat_value': df.loc[start_idx:idx]['Potion_Level'].median()
                })
            in_interval = False
            start_idx = None
    
    if in_interval and start_idx is not None:
        last_row = df.iloc[-1]
        duration = (last_row['Time'] - df.loc[start_idx, 'Time']).total_seconds() / 60
        potion_change = last_row['Potion_Level'] - df.loc[start_idx, 'Potion_Level']
        rate = potion_change / duration if duration > 0 else 0
        avg_prob = df.loc[start_idx:]['Prob_Overflow'].mean()
        
        intervals.append({
            'start_time': df.loc[start_idx, 'Time'],
            'end_time': last_row['Time'],
            'duration_mins': duration,
            'potion_change': potion_change,
            'rate_of_change': rate,
            'start_level': df.loc[start_idx, 'Potion_Level'],
            'end_level': last_row['Potion_Level'],
            'avg_probability': avg_prob,
            'max_probability': df.loc[start_idx:]['Prob_Overflow'].max(),
            'flat_value': df.loc[start_idx:]['Potion_Level'].median()
        })
            
    return pd.DataFrame(intervals) if intervals else pd.DataFrame()

def build_overflow_intervals(df: pd.DataFrame, prob_threshold: float = 0.5, at_capacity_only: bool = True) -> pd.DataFrame:
    """Build a dataframe of overflow intervals for all cauldrons from precomputed features.
    Returns columns: Cauldron_ID, start_time, end_time, flat_value, avg_probability, max_probability
    """
    rows = []
    for cauldron in sorted(df["Cauldron_ID"].unique()):
        cdf = df[df["Cauldron_ID"] == cauldron]
        intervals = detect_high_prob_intervals(cdf, prob_threshold=prob_threshold)
        if intervals.empty:
            continue
        if at_capacity_only:
            cap_est = cdf["Max_Capacity_Est"].dropna().max() if "Max_Capacity_Est" in cdf.columns else np.nan
            if not np.isnan(cap_est):
                mask = np.isclose(intervals["flat_value"], cap_est, rtol=1e-3, atol=0)
                intervals = intervals[mask]
        if intervals.empty:
            continue
        tmp = intervals.copy()
        tmp["Cauldron_ID"] = cauldron
        rows.append(tmp)
    if not rows:
        return pd.DataFrame(columns=[
            "Cauldron_ID","start_time","end_time","flat_value","avg_probability","max_probability"
        ])
    out = pd.concat(rows, ignore_index=True)
    return out[["Cauldron_ID","start_time","end_time","flat_value","avg_probability","max_probability"]]

def fetch_and_build_overflow_intervals(prob_threshold: float = 0.5, at_capacity_only: bool = True) -> pd.DataFrame:
    """Convenience function to fetch data, compute features and probabilities, and return intervals DF.
    """
    raw_df = fetch_api_data()
    if raw_df.empty:
        return pd.DataFrame(columns=[
            "Cauldron_ID","start_time","end_time","flat_value","avg_probability","max_probability"
        ])
    df = compute_features(raw_df)
    api_caps = fetch_cauldron_info()
    emp_caps = df.groupby("Cauldron_ID")["Potion_Level"].quantile(0.995).rename("Empirical_Cap")
    df = df.merge(emp_caps, on="Cauldron_ID", how="left")
    df["Api_Cap"] = df["Cauldron_ID"].map(api_caps) if api_caps else np.nan
    df["Max_Capacity_Est"] = np.where(
        df["Api_Cap"].notna() & (df["Api_Cap"] > 0), df["Api_Cap"], df["Empirical_Cap"]
    )
    df = compute_overflow_probability(df)
    build_overflow_intervals(df, prob_threshold=prob_threshold, at_capacity_only=at_capacity_only)

    print("Overflow intervals computed successfully.")  
    return df
