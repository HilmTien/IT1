import answers from "./answers.json" assert { type: "json" }

const gameContainer = document.querySelector("main")

const initHTML = () => {
    let question = document.createElement("p")
    question.innerText = "Hva er hovedstaden i Burkina Faso?"
    gameContainer.appendChild(question)
    for (let answer of answers) {
        let answerElement = document.createElement("p")
        answerElement.innerText = answer.label
        if (answer.isCorrect) {
            /*answerElement.addEventListener("click", () => {
                answerElement.style.backgroundColor = "#66CC00"
            })*/
            answerElement.addEventListener("click", createChangeColor(answerElement, "#66CC00"))
        } else {
            /*answerElement.addEventListener("click", () => {
                answerElement.style.backgroundColor = "#CC0000"
            })*/
            answerElement.addEventListener("click", createChangeColor(answerElement, "#CC0000"))
        }
        gameContainer.appendChild(answerElement)
    }
}

const createChangeColor = (element, color) => {
    return () => { element.style.backgroundColor = color }
}

window.onload = () => {
    initHTML()
}