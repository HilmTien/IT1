const partier = [
    { "navn": "Rødt", "stemmer": 0 },
    { "navn": "Arbeiderpartiet", "stemmer": 0 },
    { "navn": "Senterpartiet", "stemmer": 0 },
    { "navn": "Høyre", "stemmer": 0 },
    { "navn": "Fremskrittspartiet", "stemmer": 0 },
]

const visTabell = () => {
    const tabell = document.getElementById("tabell")

    tabell.innerHTML = ""

    for (const parti of partier) {
        const tabellRad = document.createElement("tr")

        const tabellNavn = document.createElement("td")
        const tabellStemmer = document.createElement("td")
        const tabellStem = document.createElement("td")
        const stemKnapp = document.createElement("button")

        stemKnapp.innerHTML = "Stem!"
        stemKnapp.addEventListener("click", () => {
            parti.stemmer++
            visTabell()
        })

        tabellNavn.innerHTML = parti.navn
        tabellStemmer.innerHTML = parti.stemmer
        tabellStem.appendChild(stemKnapp)

        tabellRad.appendChild(tabellNavn)
        tabellRad.appendChild(tabellStemmer)
        tabellRad.appendChild(tabellStem)

        tabell.appendChild(tabellRad)
    }

    finnLedendeParti()
}

const finnLedendeParti = () => {
    partiMedFlestStemmer = partier.reduce(function (forrige, nå) {
        return (forrige.stemmer > nå.stemmer) ? forrige : nå
    })

    const display = document.getElementById("ledendeParti")
    display.innerHTML = `${partiMedFlestStemmer.navn} leder med ${partiMedFlestStemmer.stemmer} ${partiMedFlestStemmer.stemmer == 1 ? "stemme" : "stemmer"}`
}

window.onload = () => {
    visTabell()
}