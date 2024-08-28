
const test = await fetch("./navbar.html").then(
    (response) => {
        return response.text()
    }
)
console.log(test)

const container = document.querySelector("header")

container.innerHTML = test