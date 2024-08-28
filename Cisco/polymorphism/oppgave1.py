# TODO
# oppgave 1.1
# Vi skal prøve å lage en oppskrift på dyr.
# Lag en klasse som heter "Dyr", denne skal representere et dyr.
# et dyr på kunne lage lyd, bevege seg og spise.
# disse funksjonene kan hete "snakk", "beveg" og "spis",
# eller noe annet (husk å endre på koden i main() for å bruke riktige funksjoner)
#
# Fordi vi ikke vet hva slags dyr vi beskriver skal disse funksjonene
# være tomme (bruk pass for å ikke gjøre noe)
class Dyr:
    def beveg(self) -> None:
        ...

    def spis(self) -> None:
        ...

    def snakk(self) -> None:
        ...


# TODO
# oppgave 1.2
# Klassen vi har så langt er litt kjedelig, fordi vi aner ikke hva slags dyr
# vi ser på!
# Lag noen nye klasser som arver fra Dyr, som skal representere andre dyr
# For eksempel hunder, katter eller krokodiller!
# Nå vet vi hvilket dyr vi beskriver, så da kan funksjonene "snakk", "beveg" og "spis"
# gjøre noe!
# Disse funksjonene skal returnere en streng som beskriver hvilken lyd dyret laget (snakk),
# Hvor fort de beveger seg (beveg), og hva de spiser (spis)
class Katt(Dyr):
    def beveg(self) -> None:
        print("a")

    def spis(self) -> None:
        print("b")

    def snakk(self) -> None:
        print("c")


class Hund(Dyr):
    def beveg(self) -> None:
        print("d")

    def spis(self) -> None:
        print("e")

    def snakk(self) -> None:
        print("f")


class Krokodille(Dyr):
    def beveg(self) -> None:
        print("g")

    def spis(self) -> None:
        print("h")

    def snakk(self) -> None:
        print("i")


def main():
    dyr1 = Dyr()
    assert isinstance(dyr1, Dyr), "objektet dyr1 er ikke et Dyr, men noe annet!"
    dyr1.beveg()
    dyr1.spis()
    dyr1.snakk()

    ######################
    # Her er tre eksempler på kode som skal kunne kjøre i oppgave 1.2,
    # hvis dere velger å lage dyrene Katt, Hund og Krokodille!
    ######################

    katt = Katt()
    assert isinstance(katt, Katt), "objektet katt er ikke en Katt, men noe annet!"
    katt.beveg()
    katt.spis()
    katt.snakk()

    hund = Hund()
    assert isinstance(hund, Hund), "objektet hund er ikke en Hund, men noe annet!"
    hund.beveg()
    hund.spis()
    hund.snakk()

    krokodille = Krokodille()
    assert isinstance(
        krokodille, Krokodille
    ), "objektet krokodille er ikke en Dyr, men noe annet!"
    krokodille.beveg()
    krokodille.spis()
    krokodille.snakk()


if __name__ == "__main__":
    main()
