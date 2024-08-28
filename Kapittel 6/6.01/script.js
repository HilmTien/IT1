const array = ["a", "b", "c", "d", "e"]

function addValueToListContainer(value, container) {
    const li = document.createElement("li")
    li.innerText = value
    container.appendChild(li)
}

window.onload = () => {
    let container = document.getElementById("displayList")
    addValueToListContainer(array[0], container)
    addValueToListContainer(array[2], container)
    addValueToListContainer(array[array.length - 1], container)
}