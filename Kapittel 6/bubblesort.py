import random

a: list[float] = [random.randint(0, 100) for _ in range(100)]

has_swapped = True

while has_swapped:
    has_swapped = False
    for i in range(0, len(a) - 1):
        if a[i] > a[i + 1]:
            a[i], a[i + 1] = a[i + 1], a[i]
            has_swapped = True

print(a)
