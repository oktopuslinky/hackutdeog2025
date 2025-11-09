import pandas as pd
import requests
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
import datetime as dt
import sys

DATA_URL = "https://hackutd2025.eog.systems/api/Data"
TICKETS_URL = "https://hackutd2025.eog.systems/api/Tickets"

def normalize_cauldron_id(cauldron_number) -> str:
    try:
        n = int(cauldron_number)
    except Exception:
        raise ValueError("cauldron_number must be an integer-like value")
    return f"cauldron_{n:03d}"

def fetch_api_data():
    try:
        data_json = requests.get(DATA_URL, timeout=5).json()
    except Exception:
        return pd.DataFrame()
    records = []
    for entry in data_json:
        ts = pd.to_datetime(entry.get("timestamp"))
        for cid, level in entry.get("cauldron_levels", {}).items():
            records.append({"Time": ts, "Cauldron_ID": str(cid), "Oil_Level": float(level)})
    return pd.DataFrame(records)

def fetch_tickets():
    try:
        raw = requests.get(TICKETS_URL, timeout=5).json()
    except Exception:
        return []
    items = []
    if isinstance(raw, dict):
        for k in ["transport_tickets", "tickets", "data", "results"]:
            if k in raw and isinstance(raw[k], list):
                items = raw[k]
                break
        if not items:
            for v in raw.values():
                if isinstance(v, list):
                    items = v
                    break
    elif isinstance(raw, list):
        items = raw
    tickets = []
    for item in items:
        if not isinstance(item, dict):
            continue
        tid = (
            item.get("ticket_id") or item.get("TicketId") or item.get("ticketId") or
            item.get("id") or item.get("Id")
        )
        cid = (
            item.get("cauldron_id") or item.get("Cauldron_ID") or item.get("CauldronId") or
            item.get("cauldronId") or item.get("cauldron") or item.get("name")
        )
        amt = (
            item.get("amount_drained") or item.get("AmountDrained") or item.get("amountDrained") or
            item.get("amount_collected") or item.get("AmountCollected") or item.get("amountCollected") or
            item.get("amount") or item.get("quantity") or item.get("drained") or item.get("volume")
        )
        if tid is None or cid is None:
            continue
        amt_val = None
        if amt is not None:
            try:
                if isinstance(amt, str):
                    s = amt.strip().replace(",", "")
                    filtered = "".join(ch for ch in s if ch in "0123456789.-")
                    amt_val = float(filtered) if filtered not in ("", ".", "-", "-.", ".-") else None
                else:
                    amt_val = float(amt)
            except Exception:
                amt_val = None
        tickets.append({
            "ticket_id": str(tid),
            "cauldron_id": str(cid),
            "amount_drained": amt_val
        })
    return tickets

def compute_features(df, window=10):
    df = df.sort_values(["Cauldron_ID", "Time"]).copy()
    df["Diff"] = df.groupby("Cauldron_ID")["Oil_Level"].diff()
    df["Rolling_Mean"] = (
        df.groupby("Cauldron_ID")["Oil_Level"].rolling(window).mean().reset_index(level=0, drop=True)
    )
    df["Rolling_Std"] = (
        df.groupby("Cauldron_ID")["Oil_Level"].rolling(window).std().reset_index(level=0, drop=True)
    )
    df["Slope"] = df.groupby("Cauldron_ID")["Oil_Level"].diff(window) / window
    df["Momentum"] = df["Oil_Level"] - df["Rolling_Mean"]
    df["Next_Level"] = df.groupby("Cauldron_ID")["Oil_Level"].shift(-1)
    df["Target"] = (df["Next_Level"] < df["Oil_Level"]).astype(int)
    return df.dropna()

def detect_high_prob_intervals(df, prob_threshold=0.9):
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
                duration = (row['Time'] - start_row['Time']).total_seconds() / 60
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

def main():
    if len(sys.argv) < 2:
        print("Usage: python ticket_drain_matching.py <cauldron_number>")
        return
    cauldron_number = sys.argv[1]
    df_out = get_ticket_drain_matches(cauldron_number)
    if df_out is None or df_out.empty:
        print("No matches to display for the requested cauldron.")
    else:
        print(df_out.to_string(index=False))

if __name__ == "__main__":
    main()

def get_ticket_drain_matches(cauldron_number) -> pd.DataFrame:
    selected = normalize_cauldron_id(cauldron_number)
    raw_df = fetch_api_data()
    if raw_df.empty:
        return pd.DataFrame()
    raw_df = raw_df[raw_df['Cauldron_ID'] == selected]
    if raw_df.empty or raw_df["Time"].nunique() < 15 or raw_df["Oil_Level"].nunique() <= 1:
        return pd.DataFrame()
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
    cdf = combined
    intervals = detect_high_prob_intervals(cdf)
    tickets = fetch_tickets()
    tickets = [t for t in tickets if str(t.get('cauldron_id')) == selected]
    rows = []
    available = intervals.copy() if intervals is not None and not intervals.empty else pd.DataFrame()
    for t in tickets:
        t_amt = float(t["amount_drained"]) if t.get("amount_drained") is not None else None
        matched = None
        if t_amt is not None and not available.empty:
            diffs = (available['oil_change'].abs() - abs(t_amt)).abs()
            best_idx = diffs.idxmin()
            matched_row = available.loc[best_idx]
            matched = matched_row
            available = available.drop(index=best_idx)
        if matched is not None:
            rows.append({
                'ticket_id': t['ticket_id'],
                'cauldron_id': selected,
                'ticket_amount_drained': t_amt,
                'interval_start_time': matched['start_time'],
                'interval_end_time': matched['end_time'],
                'interval_duration_mins': matched['duration_mins'],
                'interval_oil_change': matched['oil_change'],
                'abs_diff': abs(abs(matched['oil_change']) - abs(t_amt))
            })
        else:
            rows.append({
                'ticket_id': t.get('ticket_id'),
                'cauldron_id': selected,
                'ticket_amount_drained': t_amt,
                'interval_start_time': None,
                'interval_end_time': None,
                'interval_duration_mins': None,
                'interval_oil_change': None,
                'abs_diff': None
            })
    match_df = pd.DataFrame(rows)
    if match_df.empty:
        return match_df
    if 'interval_start_time' in match_df.columns and match_df['interval_start_time'].notna().any():
        match_df['interval_start_time'] = pd.to_datetime(match_df['interval_start_time']).dt.strftime('%Y-%m-%d %H:%M:%S')
    if 'interval_end_time' in match_df.columns and match_df['interval_end_time'].notna().any():
        match_df['interval_end_time'] = pd.to_datetime(match_df['interval_end_time']).dt.strftime('%Y-%m-%d %H:%M:%S')
    num_cols = ['ticket_amount_drained', 'interval_duration_mins', 'interval_oil_change', 'abs_diff']
    for c in num_cols:
        if c in match_df.columns:
            match_df[c] = match_df[c].astype(float).round(3)
    actual_drained = match_df['interval_oil_change'].abs() if 'interval_oil_change' in match_df.columns else pd.Series(pd.NA, index=match_df.index)
    type_col = pd.Series(pd.NA, index=match_df.index, dtype='object')
    yellow_mask = actual_drained.notna() & match_df['ticket_amount_drained'].notna() & (actual_drained > match_df['ticket_amount_drained'])
    type_col.loc[yellow_mask] = 'error'
    if 'abs_diff' in match_df.columns:
        green_mask = match_df['abs_diff'].notna() & (match_df['abs_diff'] == 0) & type_col.isna()
        type_col.loc[green_mask] = 'none'
        orange_mask = match_df['abs_diff'].notna() & (match_df['abs_diff'] > 0) & (match_df['abs_diff'] < 15) & type_col.isna()
        type_col.loc[orange_mask] = 'minor'
        red_mask = match_df['abs_diff'].notna() & (match_df['abs_diff'] >= 15) & type_col.isna()
        type_col.loc[red_mask] = 'severe'
    match_df['type'] = type_col
    return match_df

def get_ticket_drain_matches_json(cauldron_number):
    df = get_ticket_drain_matches(cauldron_number)
    if df is None or df.empty:
        return []
    return df.to_dict(orient='records')
