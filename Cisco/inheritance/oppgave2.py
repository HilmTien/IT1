# Denne klassen beskriver en person som ser på en serie
class Person:
    def __init__(self, serie: str):
        self.serie = serie


# TODO
# Oppgave 2.1
# klassene Fan og Hater beskriver personer som er veldig fan av eller hater serien de ser på
# lag en funskjon __str__ for begge klassene som beskriver hva de synes om serien sin!
# Husk at __str__ er en magisk funksjon som skal returnere en streng, og blir automatisk kalt
# når du prøver å printe objektet.
#
# For eksempel; hvis en fan ser på Harry Potter, skal __str__ returnere "Er veldig fan av Harry Potter"
# Hvis en hater ser på Harry Potter, skal __str__ returnere "Synes Harry Potter er veldig teit"


class Fan(Person):
    def __init__(self, serie: str):
        super().__init__(serie)

    def __str__(self) -> str:
        return f"Er veldig fan av {self.serie}"


class Hater(Person):
    def __init__(self, serie: str):
        super().__init__(serie)

    def __str__(self) -> str:
        return f"Synes {self.serie} er veldig teit"


# TODO
# Oppgave 2.2
# Dette er en teorioppgave, så her trenger vi ikke kode!
# Hvorfor kan vi ikke si at vi driver med polymorfisme
# når vi lager en egen __str__ funksjon for Fan og Hater,
# som arver fra Person?


if __name__ == "__main__":
    fanboy = Fan("Harry Potter")
    fangirl = Fan("Star Wars")
    nett_troll = Hater("Harry Potter")

    print(fanboy)
    print(fangirl)
    print(nett_troll)

    assert str(fanboy) == "Er veldig fan av Harry Potter"
    assert str(fangirl) == "Er veldig fan av Star Wars"
    assert str(nett_troll) == "Synes Harry Potter er veldig teit"
