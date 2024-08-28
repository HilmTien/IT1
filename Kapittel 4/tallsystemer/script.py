def division(divisor: int, dividend: int) -> tuple[int, int]:
    """Returns a tuple containing the floored quotient and the rest."""
    return divisor // dividend, divisor % dividend


def parse_digit(number: int) -> str:
    """Parses a number to a digit, letterified if necessary"""
    return str(number) if number < 10 else chr(65 + (number - 10))


def base10_to_base_x(num: int | str, base: int = 2) -> str:
    """Defaults to base 2"""
    if isinstance(num, str):
        num = int(num, base=10)
    if num < 0:
        raise ValueError("negative numbers cannot be converted")
    if num == 0:
        return "0"

    res = ""
    while num:
        quotient, rest = division(num, base)
        res = parse_digit(rest) + res
        num = quotient

    return res


def base2_to_base10(num: str | int) -> int:
    if isinstance(num, int):
        num = str(num)

    res = 0
    for i, bit in enumerate(reversed(num)):
        if bit == "1":
            res += 2**i

    return res


def main() -> None:
    number = input("Skriv et tall i 10-tallsystemet: ")
    print(base10_to_base_x(number, base=16))
    # print(base2_to_base10("100100"))


if __name__ == "__main__":
    main()
