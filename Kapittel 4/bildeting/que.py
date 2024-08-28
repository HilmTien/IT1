from PIL import Image

# open image
image = Image.open("trolleando.png")

# convert image to grayscale
image = image.convert("L")

# save image as a new file
image.save("grayscale_image.jpg")
