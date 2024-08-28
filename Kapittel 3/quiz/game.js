let pointsDisplay

const quiz = await fetch("./quiz.json").then(response => response.json())

const initHTML = () => {
    let quizContainer = document.getElementById("quiz")

    for (let question of quiz) {
        let questionContainer = document.createElement("div")
        questionContainer.className = "question"

        let questionLabel = document.createElement("h2")
        questionLabel.innerText = question.spørsmål
        questionContainer.appendChild(questionLabel)

        let optionContainer = document.createElement("div")
        optionContainer.className = "options"
        for (let option of question.alternativer) {
            let answerLabel = document.createElement("label")
            answerLabel.innerText = option
            let answerButton = document.createElement("input")
            answerButton.type = "radio"
            answerButton.name = question.spørsmål
            answerButton.questionIndex = quiz.indexOf(question)
            answerButton.optionIndex = question.alternativer.indexOf(option)
            answerLabel.appendChild(answerButton)
            optionContainer.appendChild(answerLabel)
        }
        questionContainer.appendChild(optionContainer)

        quizContainer.appendChild(questionContainer)
    }

    let checkAnswerLabel = document.createElement("label")
    checkAnswerLabel.innerText = "Sjekk svar"
    let checkAnswer = document.createElement("button")
    checkAnswer.appendChild(checkAnswerLabel)
    checkAnswer.addEventListener("click", calcPoints)
    quizContainer.appendChild(checkAnswer)

    pointsDisplay = document.createElement("p")
    quizContainer.appendChild(pointsDisplay)
}

const calcPoints = () => {
    let buttons = document.querySelectorAll("input[type='radio']")
    let points = 0
    for (let button of buttons) {
        if (!button.checked) {
            continue
        }
        if (button.optionIndex == quiz[button.questionIndex].svarIndex) {
            points += 1
        }
    }
    pointsDisplay.innerText = `Du fikk ${points}/${quiz.length} poeng (${Math.round(points * 100 / quiz.length)} %)`
}

window.onload = () => {
    console.log("done")
}

initHTML()