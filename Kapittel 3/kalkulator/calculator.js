
/**
 * 
 * @param {String} string a mathematical expression such as 1 + 5 * 4
 * @returns {Number} the evaluated value
 */
function evaluateExpression(string) {
    string = string.replace(",", ".")
    try {
        let value = Function(`'use strict'; return (${string})`)()
        return value
    } catch {
        return Number.NaN
    }
}

const denyDouble = ["+", "-", "*", "/", "."]

var calc_text = ""

function updateDisplay() {
    document.getElementById("calc-display").innerText = calc_text
}

function calculate() {
    document.getElementById("text-display").innerText = evaluateExpression(calc_text).toFixed(2)
}

function removeLastNumber() {
    calc_text = calc_text.replace(/\d+$/, "")
    updateDisplay()
}

function removeLastCharacter() {
    calc_text = calc_text.slice(0, -1)
    updateDisplay()
}

function resetCalculator() {
    calc_text = ""
    updateDisplay()
}

function negate() {
    let lastNumber = parseFloat(calc_text.match(/[+-]?(\d*\.?\d*)(?!.*\d)/)[0])
    let thingBeforeLastNumber = calc_text.charAt(calc_text.search(/[+-]?(\d*\.?\d*)(?!.*\d)/) - 1)
    // console.log(lastNumber)
    // console.log(thingBeforeLastNumber)
    if (lastNumber > 0) {
        calc_text = calc_text.replace(/[+-]?(\d*\.?\d*)(?!.*\d)/, `${-lastNumber}`)
    } else {
        if (["*", "/", "", "."].includes(thingBeforeLastNumber)) {
            calc_text = calc_text.replace(/[+-]?(\d*\.?\d*)(?!.*\d)/, `${-lastNumber}`)
        } else {
            calc_text = calc_text.replace(/[+-]?(\d*\.?\d*)(?!.*\d)/, `+${-lastNumber}`)
        }
    }
    updateDisplay()
}

function addToExpression(elem) {
    let text = elem.innerText
    if (text === ".") {
        if (calc_text.match(/[+-]?(\d*\.?\d*)(?!.*\d)/)[0].includes(".")) {
            return
        }
    }

    if (denyDouble.includes(text)) {
        if (denyDouble.includes(calc_text.slice(-1))) {
            calc_text = calc_text.replace(/.$/, text)
        } else {
            calc_text += text
        }
    } else {
        calc_text += text
    }

    // console.log(calc_text)
    updateDisplay()
}