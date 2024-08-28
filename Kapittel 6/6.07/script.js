

const generatePins = (n) => {
    const pins = new Set()
    for (let i = 0; i < n; i++) {
        let pin = Math.round(Math.random() * 9999).toString().padStart(4, 0)
        while (pins.has(pin) || (+pin[pin.length - 1] % 2) || (pin[0] == pin[1] == pin[2] == pin[3])) {
            pin = Math.round(Math.random() * 9999).toString().padStart(4, 0)
        }
        pins.add(pin)
    }
    return Array.from(pins)
}

window.onload = () => {
    const pins = generatePins(100)
    console.log(pins)
    const display = document.getElementById("display")
    display.innerHTML = pins.join(", ")
}