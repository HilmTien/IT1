import numpy as np
from PIL import Image


def main() -> None:
    img = Image.new("RGB", (256, 20))
    a = np.array(img)
    for i, row in enumerate(a):
        for j, pixel in enumerate(row):
            a[i][j] = [j, j, j]

    print(a)

    img = Image.fromarray(a, "RGB")
    img.save("c.png")


if __name__ == "__main__":
    main()
