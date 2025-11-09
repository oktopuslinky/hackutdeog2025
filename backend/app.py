from flask import Flask, jsonify
from flask_cors import CORS
import overflow
import ticket_drain_matching

app = Flask(__name__)
CORS(app)

@app.get("/api/overflow-intervals")
def overflow_intervals():
    df = overflow.fetch_and_build_overflow_intervals(
        prob_threshold=0.5, # probability threshold for overflow
        at_capacity_only=True # only intervals whose flat_value ≈ capacity
    )

    if df.empty:
        # Provide more context so callers know why the list is empty
        return jsonify({
            "status": "no_overflow_detected",
            "message": (
                "No overflow intervals detected with the current settings. "
                "Try lowering prob_threshold or disabling at_capacity_only."
            ),
            "intervals": []
        })

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
