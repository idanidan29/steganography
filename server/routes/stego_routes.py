from flask import Blueprint, logging, request, send_file, jsonify
from stego_service import encode_password, decode_password
from io import BytesIO

stego_bp = Blueprint("stego", __name__)

# Encode password into image
@stego_bp.route("/encode", methods=["POST"])
def encode():
    # Log incoming request details
    logging.debug("Received request to encode password into image.")
    
    if "image" not in request.files:
        logging.error("Image file is missing.")
        return jsonify({"error": "Image is required"}), 400
    if "password" not in request.form:
        logging.error("Password is missing.")
        return jsonify({"error": "Password is required"}), 400

    # Log the presence of image and password
    logging.debug("Image file and password received.")
    image_file = request.files["image"]
    password = request.form["password"]

    # Log the size of the image and the password length (for debugging purposes)
    logging.debug(f"Received image with size: {len(image_file.read())} bytes.")
    logging.debug(f"Received password with length: {len(password)} characters.")

    try:
        # Attempt encoding the password into the image
        logging.debug("Attempting to encode password into the image.")
        encoded_image = encode_password(image_file, password)
        logging.debug("Encoding successful.")
    except Exception as e:
        logging.error(f"Error during encoding: {str(e)}")
        return jsonify({"error": f"Failed to encode: {str(e)}"}), 500

    # Log successful encoding and sending the file
    logging.debug("Sending encoded image back to client.")
    return send_file(encoded_image, mimetype="image/png", as_attachment=True, download_name="encoded.png")

# Decode password from image
@stego_bp.route("/decode", methods=["POST"])
def decode():
    if "image" not in request.files:
        return jsonify({"error": "Image is required"}), 400

    image_file = request.files["image"]
    password = decode_password(image_file)

    return jsonify({"decoded_password": password})
