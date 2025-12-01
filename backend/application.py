from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow React/frontend to call this API


@app.route("/")
def index():
    # Quick check route
    return "Flask is running ✅"


@app.route("/api/hello")
def hello():
    return jsonify({"message": "Hello from Flask backend ❤️"})


if __name__ == "__main__":
    # debug=True restarts automatically on code change
    app.run(debug=True)

