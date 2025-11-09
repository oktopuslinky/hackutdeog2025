from flask import Flask, jsonify
import overflow

app = Flask(__name__)

@app.get("/api/overflow-intervals")
def overflow_intervals():
    df = overflow.fetch_and_build_overflow_intervals(
        prob_threshold=0.5, # probability threshold for overflow
        at_capacity_only=True # only intervals whose flat_value ≈ capacity
    )
    # convert to JSON (ISO timestamps)
    out = df.assign(
        start_time=df["start_time"].dt.strftime("%Y-%m-%d %H:%M:%S"),
        end_time=df["end_time"].dt.strftime("%Y-%m-%d %H:%M:%S")
    )
    return jsonify(out.to_dict(orient="records"))