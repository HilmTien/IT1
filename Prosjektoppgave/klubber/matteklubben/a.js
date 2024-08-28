const fiksSjekkKnapp = () => {
    const submitKnapp = document.getElementById("submit")
    submitKnapp.addEventListener("click", sjekkSvar)
}

const sjekkSvar = () => {
    const alternativ = document.querySelector("input[name='svar']:checked")

    if (alternativ === null) {
        visMelding("velg et alternativ tronco")
        return
    }

    if (alternativ.id === "alt-1") {
        visMelding("riktig svar!")
    } else {
        visMelding("feil svar :(")
    }
}

const visMelding = (melding) => {
    const display = document.getElementById("svartekst")
    display.innerText = melding
}

window.onload = () => {
    fiksSjekkKnapp()
}