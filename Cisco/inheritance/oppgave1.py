# Her har vi en Person-klasse. Fyll ut Elev- og Ansatt-klassene så de
# har de samme medlemmene som Person, og med sin skole/jobb i tillegg.
#
# Husk trikset med super() som vi så på i fellesskap!
class Person:
    def __init__(self, fornavn: str, etternavn: str, alder: int):
        self.fornavn = fornavn
        self.etternavn = etternavn
        self.alder = alder


class Elev(Person):
    def __init__(self, fornavn: str, etternavn: str, alder: int, skole: str):
        super().__init__(fornavn, etternavn, alder)
        self.skole = skole


class Ansatt(Person):
    def __init__(self, fornavn: str, etternavn: str, alder: int, jobb: str):
        super().__init__(fornavn, etternavn, alder)
        self.jobb = jobb


# Kommer du på noen flere type personer som du vil modellere?
# Kanskje finnes det en type ansatt som er enda mer spesifikk, så
# den kan arve fra Ansatt-klassen?
# Her er det frie tøyler for å øve litt ekstra på arv!

if __name__ == "__main__":
    person = Person("A", "B", 23)
    elev = Elev("A", "B", 17, "Akademiet")
    ansatt = Ansatt("A", "B", 39, "Cisco")
