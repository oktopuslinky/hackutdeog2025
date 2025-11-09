import pandas as pd
import numpy as np
import requests
import streamlit as st
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
import plotly.express as px
import datetime as dt
import time

DATA_URL = "https://hackutd2025.eog.systems/api/Data"
INFO_URL = "https://hackutd2025.eog.systems/api/Information/cauldrons"

st.set_page_config(page_title="Real-Time Cauldron Drain Dashboard", layout="wide")
st.title("Cauldron Drain Dashboard")
st.caption("Click 'Refresh Data' to fetch live API readings and update predictions.")

def fetch_api_data():
    """Fetch live API data, return as flattened DataFrame"""
    try:
        data_json = requests.get(DATA_URL, timeout=5).json()
    except Exception as e:
        st.warning(f"⚠️ API fetch failed: {e}")
        return pd.DataFrame()

    records = []
    for entry in data_json:
        ts = pd.to_datetime(entry.get("timestamp"))
        for cid, level in entry.get("cauldron_levels", {}).items():
            records.append({"Time": ts, "Cauldron_ID": cid, "Oil_Level": level})
    return pd.DataFrame(records)

def simulate_data():
    """Generate realistic simulated cauldron data for testing."""
    times = pd.date_range(dt.datetime.now(), periods=300, freq="min")
    cauldrons = [f"cauldron_{i:03d}" for i in range(1, 13)]
    dfs = []
    for cid in cauldrons:
        base = 1000 + np.sin(np.linspace(0, 20, 300)) * 30 + np.random.randn(300) * 2
        drains = np.where(np.random.rand(300) < 0.05, -np.random.rand(300) * 50, 0)
        levels = base + np.cumsum(drains)
        dfs.append(pd.DataFrame({"Time": times, "Cauldron_ID": cid, "Oil_Level": levels}))
    return pd.concat(dfs)


def compute_features(df, window=10):
    """Compute rolling stats and derived features for each cauldron."""
    df = df.sort_values(["Cauldron_ID", "Time"]).copy()
    df["Diff"] = df.groupby("Cauldron_ID")["Oil_Level"].diff()
    df["Rolling_Mean"] = df.groupby("Cauldron_ID")["Oil_Level"].rolling(window).mean().reset_index(level=0, drop=True)
    df["Rolling_Std"] = df.groupby("Cauldron_ID")["Oil_Level"].rolling(window).std().reset_index(level=0, drop=True)
    df["Slope"] = df.groupby("Cauldron_ID")["Oil_Level"].diff(window) / window
    df["Momentum"] = df["Oil_Level"] - df["Rolling_Mean"]
    df["Next_Level"] = df.groupby("Cauldron_ID")["Oil_Level"].shift(-1)
    df["Target"] = (df["Next_Level"] < df["Oil_Level"]).astype(int)
    return df.dropna()

if "last_update" not in st.session_state:
    st.session_state.last_update = None
if "data" not in st.session_state:
    st.session_state.data = None

if st.button("Refresh Data"):
    with st.spinner("Fetching latest data..."):
        raw_df = fetch_api_data()
        if raw_df.empty or raw_df["Time"].nunique() < 15 or raw_df["Oil_Level"].nunique() <= 1:
            st.warning("API not returning enough data, switching to simulated mode.")
            raw_df = simulate_data()
        st.session_state.data = raw_df
        st.session_state.last_update = dt.datetime.now()

if st.session_state.data is None:
    st.info("Click 'Refresh Data' to load live readings.")
    st.stop()

raw_df = st.session_state.data

df = compute_features(raw_df)

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

combined = compute_features(raw_df)
X_live = combined[numeric_features + categorical_features]
combined["Prob_Down"] = model.predict_proba(X_live)[:, 1]

selected = st.selectbox("Select a Cauldron", sorted(combined["Cauldron_ID"].unique()))
cdf = combined[combined["Cauldron_ID"] == selected]

fig = px.line(
    cdf,
    x="Time",
    y="Oil_Level",
    title=f"{selected} — Oil Level & Drain Probability",
    labels={"Oil_Level": "Oil Level"}
)
fig.add_scatter(
    x=cdf["Time"],
    y=cdf["Prob_Down"],
    mode="lines",
    name="Drain Probability",
    line=dict(color="red", dash="dot"),
    yaxis="y2"
)
fig.update_layout(
    yaxis2=dict(title="Drain Probability", overlaying="y", side="right", range=[0, 1]),
    legend=dict(x=0.02, y=0.98),
    template="plotly_white"
)
st.plotly_chart(fig, use_container_width=True)

st.subheader("High-Risk Cauldrons")
latest_probs = combined.groupby("Cauldron_ID")["Prob_Down"].last().reset_index()
high_risk = latest_probs[latest_probs["Prob_Down"] > 0.8]

if not high_risk.empty:
    for _, row in high_risk.iterrows():
        st.error(f"⚠️ {row['Cauldron_ID']} has {row['Prob_Down']*100:.1f}% drain probability!")
else:
    st.success("No high drain risk detected.")

st.subheader("Average Drain Probability by Cauldron")
summary = (
    combined.groupby("Cauldron_ID")["Prob_Down"]
    .mean()
    .reset_index()
    .sort_values("Prob_Down", ascending=False)
)
fig_bar = px.bar(summary, x="Cauldron_ID", y="Prob_Down", title="Average Drain Probability")
st.plotly_chart(fig_bar, use_container_width=True)

st.subheader("High Probability Drain Intervals Analysis")

def detect_high_prob_intervals(df, prob_threshold=0.9):
    """Detect all intervals where drain probability exceeds threshold."""
    intervals = []
    in_interval = False
    start_idx = None
    
    for idx, row in df.iterrows():
        if not in_interval and row['Prob_Down'] >= prob_threshold:
            # Start of high probability interval
            in_interval = True
            start_idx = idx
        elif in_interval and row['Prob_Down'] < prob_threshold:
            # End of high probability interval
            if start_idx is not None:
                start_row = df.loc[start_idx]
                duration = (row['Time'] - start_row['Time']).total_seconds() / 60  # minutes
                oil_change = row['Oil_Level'] - start_row['Oil_Level']
                rate = oil_change / duration if duration > 0 else 0
                avg_prob = df.loc[start_idx:idx]['Prob_Down'].mean()
                
                intervals.append({
                    'start_time': start_row['Time'],
                    'end_time': row['Time'],
                    'duration_mins': duration,
                    'oil_change': oil_change,
                    'rate_of_change': rate,
                    'start_level': start_row['Oil_Level'],
                    'end_level': row['Oil_Level'],
                    'avg_probability': avg_prob,
                    'max_probability': df.loc[start_idx:idx]['Prob_Down'].max()
                })
            in_interval = False
            start_idx = None
    
    # Handle case where interval extends to the end of the data
    if in_interval and start_idx is not None:
        last_row = df.iloc[-1]
        duration = (last_row['Time'] - df.loc[start_idx, 'Time']).total_seconds() / 60
        oil_change = last_row['Oil_Level'] - df.loc[start_idx, 'Oil_Level']
        rate = oil_change / duration if duration > 0 else 0
        avg_prob = df.loc[start_idx:]['Prob_Down'].mean()
        
        intervals.append({
            'start_time': df.loc[start_idx, 'Time'],
            'end_time': last_row['Time'],
            'duration_mins': duration,
            'oil_change': oil_change,
            'rate_of_change': rate,
            'start_level': df.loc[start_idx, 'Oil_Level'],
            'end_level': last_row['Oil_Level'],
            'avg_probability': avg_prob,
            'max_probability': df.loc[start_idx:]['Prob_Down'].max()
        })
            
    return pd.DataFrame(intervals) if intervals else pd.DataFrame()

# Analyze high probability intervals for selected cauldron
intervals = detect_high_prob_intervals(cdf)

if not intervals.empty:
    st.write(f"Found {len(intervals)} high probability intervals for {selected}")
    
    # Calculate and display statistics
    avg_rate = intervals['rate_of_change'].mean()
    total_oil_change = intervals['oil_change'].sum()
    avg_duration = intervals['duration_mins'].mean()
    
    col1, col2, col3 = st.columns(3)
    with col1:
        st.metric("Average Rate of Change", f"{abs(avg_rate):.2f} units/min")
    with col2:
        st.metric("Total Oil Change", f"{abs(total_oil_change):.2f} units")
    with col3:
        st.metric("Avg Interval Duration", f"{avg_duration:.1f} mins")
    
    # Display intervals table with color coding
    st.write("High Probability Intervals:")
    formatted_intervals = intervals.assign(
        start_time=intervals['start_time'].dt.strftime('%Y-%m-%d %H:%M:%S'),
        end_time=intervals['end_time'].dt.strftime('%Y-%m-%d %H:%M:%S')
    ).round(2)
    
    # Add probability color highlighting
    st.dataframe(formatted_intervals.style.background_gradient(
        subset=['avg_probability', 'max_probability'],
        cmap='Reds'
    ))
    
    # Visualize intervals on timeline
    fig_intervals = px.scatter(
        intervals,
        x='start_time',
        y='rate_of_change',
        size='avg_probability',
        color='max_probability',
        hover_data=['duration_mins', 'oil_change'],
        title=f'High Probability Intervals Timeline - {selected}',
        labels={
            'start_time': 'Interval Start Time',
            'rate_of_change': 'Rate of Change (units/min)',
            'avg_probability': 'Avg Probability',
            'max_probability': 'Max Probability'
        }
    )
    st.plotly_chart(fig_intervals, use_container_width=True)
    
    # Show probability distribution during intervals
    fig_prob_dist = px.box(
        intervals,
        y=['avg_probability', 'max_probability'],
        title='Probability Distribution in High Probability Intervals',
        labels={
            'value': 'Probability',
            'variable': 'Metric'
        }
    )
    st.plotly_chart(fig_prob_dist, use_container_width=True)
else:
    st.info("No high probability intervals detected for the selected time period.")

# Calculate statistics for all cauldrons
st.subheader("📊 Cauldron Interval Analysis")
all_cauldron_stats = []

for cauldron in combined['Cauldron_ID'].unique():
    cauldron_data = combined[combined['Cauldron_ID'] == cauldron]
    cauldron_intervals = detect_high_prob_intervals(cauldron_data)
    if not cauldron_intervals.empty:
        all_cauldron_stats.append({
            'Cauldron_ID': cauldron,
            'Avg_Rate_Change': abs(cauldron_intervals['rate_of_change'].mean()),
            'Total_Intervals': len(cauldron_intervals),
            'Total_Duration': cauldron_intervals['duration_mins'].sum(),
            'Avg_Probability': cauldron_intervals['avg_probability'].mean(),
            'Max_Probability': cauldron_intervals['max_probability'].max()
        })

if all_cauldron_stats:
    stats_df = pd.DataFrame(all_cauldron_stats)
    
    # Visualize cauldron statistics
    fig_stats = px.bar(
        stats_df,
        x='Cauldron_ID',
        y='Avg_Rate_Change',
        color='Avg_Probability',
        text='Total_Intervals',
        title='Cauldron Interval Statistics',
        labels={
            'Avg_Rate_Change': 'Average Rate of Change (units/min)',
            'Avg_Probability': 'Average Probability'
        }
    )
    st.plotly_chart(fig_stats, use_container_width=True)
    
    # Display detailed statistics table
    st.write("Detailed Cauldron Statistics:")
    st.dataframe(stats_df.round(3).style.background_gradient(
        subset=['Avg_Probability', 'Max_Probability'],
        cmap='Reds'
    ))

if st.session_state.last_update:
    st.caption(f"🕒 Last Updated: {st.session_state.last_update.strftime('%Y-%m-%d %H:%M:%S')}")
else:
    st.caption("No data loaded yet.")
