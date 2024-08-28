import OLData from "./data.json" assert { type: "json" }

const keys = [
    "Land", "Sted", "Årstall"
]

function deloppgaveA() {
    for (let OL of OLData) {
        console.log(`Sommer-OLen i ${OL.årstall} ble arrangert i ${OL.sted} (${OL.land})`)
    }
}

function deloppgaveB() {
    OLData.sort(sorterSynkende)
    deloppgaveA()
}

const sorterSynkende = (første, andre) => {
    // sier at andre skal forran første hvis andre > første (altså synkende)
    return andre.årstall - første.årstall
}

function deloppgaveC() {
    byggTabell()
}

const byggTabell = () => {
    const tableElement = document.createElement("table")

    // Bygger første rad
    const tableHeader = document.createElement("thead")
    const tableHRow = document.createElement("tr")
    for (let key of keys) {
        let tableHCell = document.createElement("th")
        tableHCell.innerText = key
        tableHRow.appendChild(tableHCell)
    }
    tableHeader.appendChild(tableHRow)

    // Bygger resten av radene
    const tableBody = document.createElement("tbody")
    for (const entry of OLData) {
        const entryRow = document.createElement("tr")
        for (const key of keys) {
            const entryCell = document.createElement("td")
            entryCell.innerText = entry[key.toLowerCase()]
            entryRow.appendChild(entryCell)
        }
        tableBody.appendChild(entryRow)
    }

    // Setter sammen tabellen og putter i HTML
    tableElement.appendChild(tableHeader)
    tableElement.appendChild(tableBody)

    const container = document.querySelector("main")
    container.appendChild(tableElement)
}

window.onload = () => {
    console.log("Deloppgave A:")
    deloppgaveA()
    console.log("Deloppgave B:")
    deloppgaveB()
    console.log("Deloppgave C:")
    deloppgaveC()
    console.log("Bygget HTML dynamisk!")
}