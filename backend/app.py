from flask import Flask, jsonify
import overflow
import ticket_drain_matching

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

@app.get("/api/ticket-matches/<int:cauldron_number>")
def ticket_matches(cauldron_number: int):
    try:
        data = ticket_drain_matching.get_ticket_drain_matches_json(cauldron_number)
        return jsonify({"cauldron": f"cauldron_{cauldron_number:03d}", "matches": data}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500