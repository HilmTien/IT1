# oppgave 3.1 - en klasse for ord.
# Lag en klasse som heter "Ord". Denne skal huske på en
# tekststreng som er ordet det representerer. Vi bryr oss ikke om store og små bokstaver, så husk at funksjonen "lower" finnes for å gjøre alt om til små bokstaver.
# Den skal også lagre og oppdatere et tall. Dette tallet beskriver hvor mange forekomster av ordet det er. Tallet skal kunne økes med en funksjon, feks "leggTilAntall"
# Tekststrengen kan for eksempel hete "ord" og tallet kan hete "antall". Hvis dere bruker samme navn er klassen ferdig om koden i main() kjører frem til testkoden for oppgave 3.2
# Her kan det være nyttig å lage en __str__ funksjon, men ikke nødvendig!
class Ord:
    def __init__(self, ordet: str) -> None:
        self.ordet = ordet.lower()
        self.forekomst = 1

    def legg_til_forekomst(self) -> None:
        self.forekomst += 1

    def __repr__(self) -> str:
        return f"{self.__class__.__name__}({', '.join(f'{key}={value}' for key, value in self.__dict__.items())})"


# oppgave 3.2 - en ordliste!
# Lag en klasse OrdListe.
# Denne skal ha en __init__-funksjon som tar inn en liste med ord.
# Denne listen skal leses gjennom i __init__ og brukes til å lagre alle unike ord i en Ord-klasse.
# hver gang et unikt ord vi allerede har lest dukker opp, skal vi øke antallet forekomster ved bruk av funksjonene vi lagde i forrige oppgave

# Ordlisten skal ha funksjoner for å hente ut informasjon:
# Vi vil kunne hente ut informasjon om det vanligste ordet (hva er ordet er og hvor mange forekomster), antall forekomster for et gitt ord, og antall unike ord
class OrdListe:
    def __init__(self, ordliste: list[str]) -> None:
        self.ordliste: dict[str, Ord] = {}
        for ord in ordliste:
            ord = ord.lower()
            if ord not in self.ordliste:
                self.ordliste[ord] = Ord(ord)
            else:
                self.ordliste[ord].legg_til_forekomst()

    def antall_ord(self) -> int:
        return len(self.ordliste)

    def antall_forekomster(self, ord: str) -> int:
        return self.ordliste[ord.lower()].forekomst

    def vanligste_ord(self) -> tuple[str, int]:
        maks = 0
        for ord in self.ordliste:
            if (forekomst := self.ordliste[ord.lower()].forekomst) > maks:
                maks = forekomst
                ordet = ord
        return ordet, maks


def main():
    # Testkode for oppgave 3.1
    iskrem = Ord("ISKREM")
    assert iskrem.forekomst == 1
    iskrem.legg_til_forekomst()
    assert iskrem.forekomst == 2
    assert iskrem.ordet == "iskrem"

    # testkode for oppgave 3.2
    with open("encapsulation/scarlet.txt", "r") as f:
        alle_ordene = [line.strip() for line in f]

    ordliste = OrdListe(alle_ordene)
    print(f"det er {ordliste.antall_ord()} unike ord i boken")
    print(f"Holmes forekommer {ordliste.antall_forekomster('Holmes')} ganger")
    vanligste_ord, vanligste_ord_antall = ordliste.vanligste_ord()
    print(f"det vanligste ordet er {vanligste_ord}")
    print(f"det vanligste ordet forekommer {vanligste_ord_antall} ganger")


if __name__ == "__main__":
    main()
