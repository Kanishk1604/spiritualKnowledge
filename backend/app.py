from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/knowledge")
def get_knowledge():
    return jsonify({
        "title": "Spiritual Knowledge",
        "entries": [
            {"id": 1, "topic": "Mindfulness", "content": "Be present..."},
            {"id": 2, "topic": "Compassion", "content": "Empathy practice..."}
        ]
    })

if __name__ == "__main__":
    app.run(debug=True)
