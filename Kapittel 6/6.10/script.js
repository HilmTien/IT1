import retter from "./retter.json" assert { type: "json" }

console.log(retter)

const byggTabell = () => {
    const tabell = document.getElementById("tabell")

    tabell.innerHTML = ""

    for (const rett of retter) {
        const tabellRad = document.createElement("tr")

        const tabellRett = document.createElement("td")
        const tabellIngredienser = document.createElement("td")
        const tabellPris = document.createElement("td")

        tabellRett.innerHTML = rett.rett
        tabellIngredienser.innerHTML = rett.ingredienser.join(", ")
        tabellPris.innerHTML = `${rett.pris} kr`

        tabellRad.appendChild(tabellRett)
        tabellRad.appendChild(tabellIngredienser)
        tabellRad.appendChild(tabellPris)

        tabell.appendChild(tabellRad)
    }
}

const sorterEtterPris = () => {
    retter.sort((a, b) => a.pris - b.pris)
    byggTabell()
}

const fiksKnapper = () => {
    const sorterEtterPrisKnapp = document.getElementById("sorterEtterPris")
    sorterEtterPrisKnapp.addEventListener("click", sorterEtterPris)
}

window.onload = () => {
    fiksKnapper()
    byggTabell()
}