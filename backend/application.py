from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allows your Vercel frontend to call this API


@app.route("/")
def index():
    # This is what you currently see on Render root URL
    return "Flask is running ✅"


@app.route("/api/hello")
def hello():
    # This is what your React frontend expects
    return jsonify({"message": "Hello from Flask backend ❤️"})


if __name__ == "__main__":
    app.run(debug=True)
