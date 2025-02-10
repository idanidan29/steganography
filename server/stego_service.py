from PIL import Image
from io import BytesIO

# Encode password into an image
def encode_password(image_file, password):
    image = Image.open(image_file)
    pixels = image.load()

    # Convert password to binary
    binary_password = ''.join(format(ord(c), '08b') for c in password)

    if len(binary_password) > image.width * image.height:
        raise ValueError("Password too long for this image")

    index = 0
    for y in range(image.height):
        for x in range(image.width):
            if index < len(binary_password):
                r, g, b = pixels[x, y]
                new_r = (r & ~1) | int(binary_password[index])  # Modify LSB of red channel
                pixels[x, y] = (new_r, g, b)
                index += 1

    output = BytesIO()
    image.save(output, format="PNG")
    output.seek(0)
    return output

# Decode password from an image
def decode_password(image_file):
    image = Image.open(image_file)
    pixels = image.load()

    binary_password = ""
    for y in range(image.height):
        for x in range(image.width):
            r, _, _ = pixels[x, y]
            binary_password += str(r & 1)

    chars = [chr(int(binary_password[i:i+8], 2)) for i in range(0, len(binary_password), 8)]
    return ''.join(chars).strip("\x00")
