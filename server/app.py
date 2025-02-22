from flask import Flask
from routes.stego_routes import stego_bp

app = Flask(__name__)

# Register Blueprint (Routes)
app.register_blueprint(stego_bp, url_prefix="/stego")

@app.route("/")
def home():
    return "Hello, Flask API is running!"


if __name__ == "__main__":
    app.run(debug=True)
