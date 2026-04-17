from flask import Flask, request, jsonify
import json
import os

app = Flask(__name__)

FILE = "feedback.json"

# Create file if not exists
if not os.path.exists(FILE):
    with open(FILE, "w") as f:
        json.dump([], f)

@app.route("/submit", methods=["POST"])
def submit_feedback():
    data = request.json

    with open(FILE, "r") as f:
        feedbacks = json.load(f)

    feedbacks.append(data)

    with open(FILE, "w") as f:
        json.dump(feedbacks, f, indent=2)

    return jsonify({"message": "Saved successfully"})

if __name__ == "__main__":
    app.run(debug=True)