const playerCount = 2
const gameContainer = document.getElementById("game")
let resetContainer
let gameAreaContainer
let settingsContainer

let players = []

class Player {
    constructor(playerName) {
        this.name = playerName

        this.history = []
        this.sum = 0
        this.lastRoll
    }

    roll() {
        this.lastRoll = Math.floor(Math.random() * 6) + 1
        this.sum += this.lastRoll
        this.history.push(this.lastRoll)
    }

    parseHistorikk() {
        return this.history.join(", ")
    }
}

const initHTML = () => {
    resetContainer = document.createElement("div")
    resetContainer.className = "reset"
    createReset()
    settingsContainer = document.createElement("div")
    settingsContainer.className = "settings"
    resetContainer.appendChild(settingsContainer)
    gameContainer.appendChild(resetContainer)
    gameAreaContainer = document.createElement("div")
    gameAreaContainer.className = "gameArea"
    gameContainer.appendChild(gameAreaContainer)
}

const createReset = () => {
    let resetButton = document.createElement("button")
    resetButton.innerText = "Reset game"
    resetButton.addEventListener("click", createGame)
    resetContainer.appendChild(resetButton)
}

const createNameInputBox = (playerIndex) => {
    let nameInput = document.createElement("label")
    nameInput.className = "nameInput"
    nameInput.innerText = `Spiller ${playerIndex + 1}: `
    let nameInputField = document.createElement("input")
    nameInputField.type = "text"
    nameInputField.name = playerIndex
    nameInput.appendChild(nameInputField)
    settingsContainer.appendChild(nameInput)
}

const confirmPlayers = () => {
    let nameFields = document.querySelectorAll(".nameInput>input")
    // validatenames?
    for (let nameField of nameFields) {
        players.push(new Player(nameField.value))
    }
    settingsContainer.innerHTML = ""
    startGame()
}

const createGame = () => {
    for (let i = 0; i < playerCount; i++) {
        createNameInputBox(i)
    }
    let confirmButton = document.createElement("button")
    confirmButton.innerText = "Bekreft"
    confirmButton.addEventListener("click", confirmPlayers)
    settingsContainer.append(confirmButton)
}

const startGame = () => {
    console.log(players)
    for (let player of players) {
        createPlayerHTML(player)
    }
}

const createPlayerHTML = (player) => {
    let playerContainer = document.createElement("div")
    playerContainer.className = `player${players.indexOf(player)}`

    let playerProperties = document.createElement("div")
    playerProperties.className = "properties"
    let playerNameDisplay = document.createElement("h2")
    playerNameDisplay.innerText = player.name
    let playerLastRollDisplay = document.createElement("p")
    playerLastRollDisplay.innerText = ""
    let playerSumDisplay = document.createElement("p")
    playerSumDisplay.innerText = ""
    let playerHistoryDisplay = document.createElement("p")
    playerHistoryDisplay.innerText = ""
    playerProperties.appendChild(playerNameDisplay)
    playerProperties.appendChild(playerLastRollDisplay)
    playerProperties.appendChild(playerSumDisplay)
    playerProperties.appendChild(playerHistoryDisplay)

    playerContainer.appendChild(playerProperties)

    let playerRollButton = document.createElement("button")
    playerRollButton.innerText = "Kast terning"
    playerRollButton.addEventListener("click", function () {
        player.roll()
        updateDisplay(player)
    })
    playerContainer.appendChild(playerRollButton)

    gameAreaContainer.appendChild(playerContainer)
}

const updateDisplay = (player) => {
    let playerProperties = document.querySelector(`.player${players.indexOf(player)}>.properties`)
    playerProperties.children[1].innerHTML = `Kast: ${player.lastRoll}`
    playerProperties.children[2].innerHTML = `Sum: ${player.sum}`
    playerProperties.children[3].innerHTML = `Historikk: ${player.parseHistorikk()}`
}

window.onload = () => {
    initHTML()
    createGame()
}