
const klasseliste = [
    { "elevNummer": 1, "navn": "Scheie, Christina" },
    { "elevNummer": 2, "navn": "Sanden, Marte" },
    { "elevNummer": 3, "navn": "Hoseth, Marianne" },
    { "elevNummer": 4, "navn": "Egeland, Fredrik" },
    { "elevNummer": 5, "navn": "Edvardsen, Ida" },
    { "elevNummer": 6, "navn": "Bendiksen, Magnus" },
    { "elevNummer": 7, "navn": "Børresen, Hjørdis" },
    { "elevNummer": 8, "navn": "Jensen, Liv" },
    { "elevNummer": 9, "navn": "Evensen, Sofie" },
    { "elevNummer": 10, "navn": "Larsen, Marita" },
    { "elevNummer": 11, "navn": "Nordal, Ole" },
]

// const hentNavn = () => {
//     const elev = klasseliste.pop()
//     const [etternavn, fornavn] = elev.navn.split(", ")
//     return [elev.elevNummer, fornavn, etternavn]
// }

const lagTabell = () => {
    const tabell = document.getElementById("elevTabell")
    tabell.innerHTML = ""
    for (const elev of klasseliste) {
        // console.log(fornavn)
        const [etternavn, fornavn] = elev.navn.split(", ")

        const tabellRad = document.createElement("tr")
        const tabellElevNummer = document.createElement("td")
        const tabellFornavn = document.createElement("td")
        const tabellEtternavn = document.createElement("td")
        const tabellOppmøte = document.createElement("td")

        tabellElevNummer.innerHTML = elev.elevNummer
        tabellFornavn.innerHTML = fornavn
        tabellEtternavn.innerHTML = etternavn

        const tabellOppmøteKnapp = document.createElement("input")
        tabellOppmøteKnapp.type = "checkbox"
        tabellOppmøteKnapp.id = `${elev.elevNummer}ErTilstede`
        tabellOppmøte.appendChild(tabellOppmøteKnapp)

        tabellRad.appendChild(tabellElevNummer)
        tabellRad.appendChild(tabellFornavn)
        tabellRad.appendChild(tabellEtternavn)
        tabellRad.appendChild(tabellOppmøte)

        tabell.appendChild(tabellRad)
    }
}

const sorterEtterFornavn = () => {
    klasseliste.sort((a, b) => {
        const [a_etter, a_for] = a.navn.split(", ")
        const [b_etter, b_for] = b.navn.split(", ")
        return a_for > b_for ? 1 : -1
    })
    lagTabell()
}

const sorterEtterEtternavn = () => {
    klasseliste.sort((a, b) => {
        const [a_etter, a_for] = a.navn.split(", ")
        const [b_etter, b_for] = b.navn.split(", ")
        return a_etter > b_etter ? 1 : -1
    })
    lagTabell()
}

const sorterEtterElevnummer = () => {
    klasseliste.sort((a, b) => {
        return a.elevNummer > b.elevNummer ? 1 : -1
    })
    lagTabell()
}

const fiksKnapper = () => {
    const sorterFornavn = document.getElementById("sorterFornavn")
    const sorterEtternavn = document.getElementById("sorterEtternavn")
    const sorterElevnummer = document.getElementById("sorterElevnummer")

    sorterFornavn.onclick = sorterEtterFornavn
    sorterEtternavn.onclick = sorterEtterEtternavn
    sorterElevnummer.onclick = sorterEtterElevnummer
}

const test = () => {
    console.log("a" < "b")
}

window.onload = () => {
    fiksKnapper()
    lagTabell()
}