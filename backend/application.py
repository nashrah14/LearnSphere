from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
<<<<<<< HEAD
CORS(app)
=======
CORS(app)  # allows your Vercel frontend to call this API
>>>>>>> 79a8d433c05c30a945e2476b37dc0519885b1b24


@app.route("/")
def index():
<<<<<<< HEAD
=======
    # This is what you currently see on Render root URL
>>>>>>> 79a8d433c05c30a945e2476b37dc0519885b1b24
    return "Flask is running ✅"


@app.route("/api/hello")
def hello():
    # This is what your React frontend expects
    return jsonify({"message": "Hello from Flask backend ❤️"})


if __name__ == "__main__":
    app.run(debug=True)
