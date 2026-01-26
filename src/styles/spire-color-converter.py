import os
from PIL import Image

def convert_yellow_to_blue_preserve_lightness(input_folder, output_folder):
    # Create output folder if it doesn't exist
    os.makedirs(output_folder, exist_ok=True)

    # Loop through all PNG files in the input folder
    for filename in os.listdir(input_folder):
        if filename.endswith(".png"):
            filepath = os.path.join(input_folder, filename)
            with Image.open(filepath) as img:
                img = img.convert("RGBA")  # Ensure image is in RGBA mode
                pixels = img.load()  # Load pixel data
                
                # Iterate through all pixels
                for y in range(img.height):
                    for x in range(img.width):
                        r, g, b, a = pixels[x, y]
                        # Identify yellowish hues (e.g., red and green are strong, blue is weak)
                        if r > 200 and g > 200 and b < 100:
                            # Preserve lightness by using the average of R and G as the new blue value
                            lightness = (r + g) // 2
                            pixels[x, y] = (0, 0, lightness, a)

                # Save the modified image
                output_path = os.path.join(output_folder, filename)
                img.save(output_path)
                print(f"Processed {filename}")

# Specify input and output folders
input_folder = "Resources"
output_folder = "Converted"

convert_yellow_to_blue_preserve_lightness(input_folder, output_folder)