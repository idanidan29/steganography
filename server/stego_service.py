from PIL import Image
from io import BytesIO

# Encode password into an image with a 16-bit header for password length
def encode_password(image_file, password):
    image = Image.open(image_file)
    pixels = image.load()

    # Convert the password to binary
    binary_password = ''.join(format(ord(c), '08b') for c in password)
    
    # Encode password length in 16 bits (allows for passwords up to 65,535 characters)
    binary_length = format(len(password), '016b')
    
    # Combine the length header and the password bits
    data = binary_length + binary_password

    # Check if the image can hold the data
    if len(data) > image.width * image.height:
        raise ValueError("Password too long for this image")

    index = 0
    for y in range(image.height):
        for x in range(image.width):
            if index < len(data):
                r, g, b = pixels[x, y]
                # Replace the LSB of the red channel with the corresponding bit
                new_r = (r & ~1) | int(data[index])
                pixels[x, y] = (new_r, g, b)
                index += 1

    output = BytesIO()
    image.save(output, format="PNG")
    output.seek(0)
    return output

# Decode password from an image using the embedded length header
def decode_password(image_file):
    image = Image.open(image_file)
    pixels = image.load()

    # Read the LSB from each pixel to reconstruct the binary string
    binary_data = ""
    for y in range(image.height):
        for x in range(image.width):
            r, _, _ = pixels[x, y]
            binary_data += str(r & 1)

    # The first 16 bits represent the length of the password (in characters)
    length_bits = binary_data[:16]
    password_length = int(length_bits, 2)
    
    # Next, extract exactly (password_length * 8) bits for the password
    password_bits = binary_data[16:16 + (password_length * 8)]
    
    # Convert binary chunks (8 bits each) back into characters
    chars = [chr(int(password_bits[i:i+8], 2)) for i in range(0, len(password_bits), 8)]
    return ''.join(chars)
