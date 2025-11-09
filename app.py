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

# ============================================================
# CONFIGURATION
# ============================================================
DATA_URL = "https://hackutd2025.eog.systems/api/Data"
INFO_URL = "https://hackutd2025.eog.systems/api/Information/cauldrons"

st.set_page_config(page_title="🧪 Real-Time Cauldron Drain Dashboard", layout="wide")
st.title("🧪 Cauldron Drain Dashboard")
st.caption("Click 'Refresh Data' to fetch live API readings and update predictions.")

# ============================================================
# UTILITY FUNCTIONS
# ============================================================
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

# ============================================================
# SESSION STATE
# ============================================================
if "last_update" not in st.session_state:
    st.session_state.last_update = None
if "data" not in st.session_state:
    st.session_state.data = None

# ============================================================
# REFRESH BUTTON
# ============================================================
if st.button("🔄 Refresh Data"):
    with st.spinner("Fetching latest data..."):
        raw_df = fetch_api_data()
        if raw_df.empty or raw_df["Time"].nunique() < 15 or raw_df["Oil_Level"].nunique() <= 1:
            st.warning("⚠️ API not returning enough data, switching to simulated mode.")
            raw_df = simulate_data()
        st.session_state.data = raw_df
        st.session_state.last_update = dt.datetime.now()

# ============================================================
# USE SAVED DATA
# ============================================================
if st.session_state.data is None:
    st.info("Click 'Refresh Data' to load live readings.")
    st.stop()

raw_df = st.session_state.data

# ============================================================
# FEATURE ENGINEERING + MODEL
# ============================================================
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

# ============================================================
# PREDICT
# ============================================================
combined = compute_features(raw_df)
X_live = combined[numeric_features + categorical_features]
combined["Prob_Down"] = model.predict_proba(X_live)[:, 1]

# ============================================================
# VISUALIZATION
# ============================================================
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

# ============================================================
# ALERTS + SUMMARY
# ============================================================
st.subheader("⚠️ High-Risk Cauldrons")
latest_probs = combined.groupby("Cauldron_ID")["Prob_Down"].last().reset_index()
high_risk = latest_probs[latest_probs["Prob_Down"] > 0.8]

if not high_risk.empty:
    for _, row in high_risk.iterrows():
        st.error(f"⚠️ {row['Cauldron_ID']} has {row['Prob_Down']*100:.1f}% drain probability!")
else:
    st.success("✅ No high drain risk detected.")

st.subheader("📊 Average Drain Probability by Cauldron")
summary = (
    combined.groupby("Cauldron_ID")["Prob_Down"]
    .mean()
    .reset_index()
    .sort_values("Prob_Down", ascending=False)
)
fig_bar = px.bar(summary, x="Cauldron_ID", y="Prob_Down", title="Average Drain Probability")
st.plotly_chart(fig_bar, use_container_width=True)
# ============================================================
# 🧠 DETECT DRAIN EVENTS FROM EXISTING DF (export_df)
# ============================================================

# ============================================================
# FOOTER
# ============================================================
if st.session_state.last_update:
    st.caption(f"🕒 Last Updated: {st.session_state.last_update.strftime('%Y-%m-%d %H:%M:%S')}")
else:
    st.caption("No data loaded yet.")
