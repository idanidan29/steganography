from flask import Blueprint, request, send_file, jsonify
from stego_service import encode_password, decode_password
from io import BytesIO

stego_bp = Blueprint("stego", __name__)

# Encode password into image
@stego_bp.route("/encode", methods=["POST"])
def encode():
    if "image" not in request.files or "password" not in request.form:
        return jsonify({"error": "Image and password are required"}), 400

    image_file = request.files["image"]
    password = request.form["password"]

    encoded_image = encode_password(image_file, password)

    return send_file(encoded_image, mimetype="image/png", as_attachment=True, download_name="encoded.png")

# Decode password from image
@stego_bp.route("/decode", methods=["POST"])
def decode():
    if "image" not in request.files:
        return jsonify({"error": "Image is required"}), 400

    image_file = request.files["image"]
    password = decode_password(image_file)

    return jsonify({"decoded_password": password})
