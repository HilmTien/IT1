class Person:
    def __init__(self, fornavn: str, etternavn: str, alder: int):
        self.fornavn = fornavn
        self.etternavn = etternavn
        self.alder = alder


class Arbeidssted:
    # TODO
    # Oppgave 2.1
    # Lag en klasse "Arbeidssted"
    # Denne skal ha et navn og en liste med Personer som jobber der.
    # Listen med personer som jobber der skal være tom i starten!
    # Kall den listen for "ansatte"
    # Husk __init__!
    def __init__(self, navn: str) -> None:
        self.navn = navn
        self.ansatte: list[Person] = []

    # TODO Oppgave 2.2
    # I tillegg trenger vi en funksjon som legger til en ansatt i listen
    # Husk at vi kan bruke append-funksjonen til å legge til en liste
    # liste = [1]
    # liste.append(2)
    # Koden i main() skal kunne kjøre!
    def legg_til_ansatt(self, ny_ansatt: Person) -> None:
        self.ansatte.append(ny_ansatt)

    # TODO Oppgave 2.3
    # Noen ganger bytter folk jobb, så da vil arbeidsstedet fjerne
    # dem fra listen over ansatte!
    # Skriv en funksjon "slutt" som tar inn et personnavn, altså en streng,
    # og fjerner en Person-objektet med samme navn fra listen
    # Husk at vi kan bruke remove-funksjonen til å fjerne fra en liste
    # liste = [1,2]
    # liste.remove(2)
    # Koden i main() skal kunne kjøre!
    def fjern_ansatt(self, fornavn: str, etternavn: str) -> None:
        for i, ansatt in enumerate(self.ansatte):
            if ansatt.fornavn == fornavn and ansatt.etternavn == etternavn:
                del self.ansatte[i]


def main():
    arbeidssted = Arbeidssted("Cisco")

    assert (
        len(arbeidssted.ansatte) == 0
    ), "Lengden av listen er feil! Vi har ikke ansatt noen enda, så lengden bør være 0"

    ansatt = Person(fornavn="Ansatt", etternavn="Ansattesen", alder=28)

    arbeidssted.legg_til_ansatt(ansatt)

    assert (
        len(arbeidssted.ansatte) == 1
    ), "Lengden av listen er feil! Vi har ansatt en person, så lengden bør være 1"
    assert (
        arbeidssted.ansatte[0].fornavn == "Ansatt"
    ), "Fornavnet på den ansatte er feil!"
    assert (
        arbeidssted.ansatte[0].etternavn == "Ansattesen"
    ), "Etternavnet på den ansatte er feil!"

    arbeidssted.fjern_ansatt("Ansatt", "Ansattesen")

    assert (
        len(arbeidssted.ansatte) == 0
    ), "Lengden av listen er feil! En ansatt sluttet så da bør lengden være 0"

    print("Flott! Det ser ut som oppgaven er løst!")


if __name__ == "__main__":
    main()
