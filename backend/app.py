from flask import Flask, jsonify
from flask_cors import CORS
import overflow

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
    return jsonify({
        "status": "ok",
        "intervals": out.to_dict(orient="records")
    })


if __name__ == "__main__":
    import os

    port = int(os.getenv("PORT", "5001"))
    # Enable debug so Flask prints startup info and auto-reloads during development
    app.run(host="0.0.0.0", port=port, debug=True)