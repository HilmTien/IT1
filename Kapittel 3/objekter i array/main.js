const mangekanter = [
    {
        "navn": "trekant",
        "kanter": 3,
    },
    {
        "navn": "firkant",
        "kanter": 4,
    },
    {
        "navn": "femkant",
        "kanter": 5,
    },
    {
        "navn": "sekskant",
        "kanter": 6,
    },
    {
        "navn": "sjukant",
        "kanter": 7,
    },
]

console.log("med for .. of .. syntax")
for (let mangekant of mangekanter) {
    console.log(`en ${mangekant.navn} har ${mangekant.kanter} kanter`)
}

console.log("med vanlig syntax for å printe annenhver")
for (let i = 0; i < mangekanter.length; i += 2) {
    let mangekant = mangekanter[i]
    console.log(`en ${mangekant.navn} har ${mangekant.kanter} kanter`)
}

console.log("sorterer synkende etter antall kanter")

function sorterEtterKanterSynkende(a, b) {
    if (a.kanter > b.kanter) {
        return -1
    } else {
        return 1
    }
}
mangekanter.sort(sorterEtterKanterSynkende)
for (let mangekant of mangekanter) {
    console.log(`en ${mangekant.navn} har ${mangekant.kanter} kanter`)
}


console.log("setter inn en ny element på slutten og starten av listen")
mangekanter.push({ "navn": "åttekant", "kanter": 8 })
mangekanter.unshift({ "navn": "nikant", "kanter": 9 })
for (let mangekant of mangekanter) {
    console.log(`en ${mangekant.navn} har ${mangekant.kanter} kanter`)
}