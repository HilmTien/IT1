let display;
let notifDisplay;
let button;
let clickCount = 0;

const getDisplay = () => {
    return document.getElementById("display")
}

const buttonIsClicked = () => {
    addOne()
    checkNotification()
    updateDisplay()
}

const addOne = () => {
    clickCount += 1
}

const checkNotification = () => {
    if (clickCount >= 10) {
        notifDisplay.innerHTML = "Nå er det nok"
    }
}

const updateDisplay = () => {
    display.innerHTML = `Du har trykket på meg ${clickCount} ganger`
}

const initGame = () => {
    button = document.getElementById("hoved")
    display = document.getElementById("display")
    notifDisplay = document.getElementById("notification")
    updateDisplay()
    button.addEventListener("click", buttonIsClicked)
}

window.onload = () => {
    initGame()
}