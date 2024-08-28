import numpy as np
from PIL import Image


def collage(input_path: str, output_path: str) -> None:
    image = np.array(Image.open(input_path))

    red = image.copy()
    red[:, :, (1, 2)] = 0

    green = image.copy()
    green[:, :, (0, 2)] = 0

    blue = image.copy()
    blue[:, :, (0, 1)] = 0
    print(image.shape)

    rgb = np.concatenate((red, green, blue), axis=1)
    output = Image.fromarray(rgb)
    output.save(output_path)


def main() -> None:
    collage("trolleando.png", "b.png")


if __name__ == "__main__":
    main()
