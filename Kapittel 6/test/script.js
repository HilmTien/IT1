const checkForInclusive = () => {
    while (true) {
        const value = Math.random()
        if (value == 1 || value == 0) {
            console.log(`value is ${value}`)
            break
        }
    }
}

window.onload = () => {
    const button = document.getElementById("haug")
    button.addEventListener("click", checkForInclusive)
}