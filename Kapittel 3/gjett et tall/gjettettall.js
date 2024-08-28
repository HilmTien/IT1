let answer;
let inputField;
let display;

function sjekksvar() {
    console.log(inputField.value)
    if (inputField.value > answer) {
        changeText("ans is lower")
        console.log("ans is lower")
    } else if (inputField.value < answer) {
        changeText("ans is higher")
        console.log("ans is higher")
    } else {
        changeText("correct")
        console.log("correct")
    }
}

function changeText(text) {
    display.innerHTML = text
}

function initGame() {
    const gameContainer = document.getElementById("game")
    inputField = document.createElement("input")
    inputField.type = "number"
    inputField.onchange = sjekksvar
    gameContainer.appendChild(inputField)
    display = document.createElement("p")
    gameContainer.appendChild(display)
}

window.onload = () => {
    answer = Math.floor(Math.random() * 100)
    initGame()
}