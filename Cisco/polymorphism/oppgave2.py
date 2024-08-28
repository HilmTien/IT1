# Her skal vi lage en klasse som gjør en oppgave
# og så spesialisere hvordan den gjør dette ved å bruke arv
# og polymorfisme.

# Lag en klasse FilLeser som tar inn et filnavn.
# klassen skal ha en funksjon som leser filen og
# lagrer innholdet i en medlemsvariabel
class FilLeser:
    def __init__(self, filnavn: str) -> None:
        self.filnavn = filnavn
        self.innhold = None

    def les_fil(self) -> None:
        with open(self.filnavn, "r") as f:
            self.innhold = f.read()


# Lag en klasse LitenFilLeser som arver fra FilLeser
# Denne skal gjøre det samme, men alt innholdet som blir lest
# skal gjøres om til små bokstaver!
class LitenFilLeser(FilLeser):
    pass


# Lag en klasse StorFilLeser som arver fra FilLeser
# Denne skal gjøre det samme, men alt innholdet som blir lest
# skal gjøres om til store bokstaver!
class StorFilLeser(FilLeser):
    pass


# Finn på noen andre morsomme måter å endre oppførselen på!
# for eksempel en leser som sletter filen etterpå
# eller som tuller med den på andre måter.

if __name__ == "__main__":
    les = FilLeser("polymorphism/foo.txt")
    les.lesFil()
    print(les.innhold)

    les = StorFilLeser("foo.txt")
    les.lesFil()
    print(les.innhold)

    les = LitenFilLeser("foo.txt")
    les.lesFil()
    print(les.innhold)

    les = TulleFilLeser("foo.txt")
    les.lesFil()
    print(les.innhold)

    les = DestruktivFilLeser("foo.txt")
    les.lesFil()
    print(les.innhold)
