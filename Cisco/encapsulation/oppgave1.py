class Person:
    def __init__(
        self, fornavn: str, etternavn: str, alder: int, jobb: str | None
    ) -> None:
        self.fornavn = fornavn
        self.etternavn = etternavn
        self.alder = alder
        self.jobb = jobb

    def hils(self, mottaker: str) -> None:
        print(f"Hei, {mottaker}!")

    def __str__(self) -> str:
        return f"{self.fornavn} {self.etternavn} ({self.alder})"


a = Person("Tien", "Tran", 17, None)

print(a.fornavn)
print(a.etternavn)
print(a.alder)
print(a.jobb)

a.hils("Verden")

print(a)
