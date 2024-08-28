
import books from "./books.json" assert { type: "json" };

// defaultdict oppførsel (default value 0)
const cart = new Proxy({}, {
    get: (target, name) => name in target ? target[name] : 0
})

const pageContainer = document.getElementById("content")

const addBookHTML = (book, container) => {
    let bookContainer = document.createElement("div")
    bookContainer.classList.add("book")

    let bookTitle = document.createElement("h2")
    let bookAuthor = document.createElement("p")
    let bookCover = document.createElement("img")
    let addToCartLabel = document.createElement("label")
    let addToCartButton = document.createElement("button")

    addToCartLabel.innerHTML = book.price
    addToCartButton.innerHTML = "Legg til handlevogn"
    addToCartButton.addEventListener("click", () => {
        addToCart(book)
    })
    addToCartLabel.appendChild(addToCartButton)
    bookTitle.innerText = book.title
    bookAuthor.innerText = `Av: ${book.author}`
    bookCover.src = book.coverPath
    bookCover.alt = `Forside til ${book.title}`

    bookContainer.appendChild(bookTitle)
    bookContainer.appendChild(bookAuthor)
    bookContainer.appendChild(bookCover)
    bookContainer.appendChild(addToCartLabel)

    container.appendChild(bookContainer)
}

const addToCart = (book) => {
    let bookID = books.indexOf(book)
    cart[bookID] += 1
    console.log(cart)
    window.sessionStorage.setItem("cart", JSON.stringify(cart))
    console.log(JSON.parse(window.sessionStorage.getItem("cart")))
}

const initHTML = () => {
    let header = document.createElement("h1")
    header.classList.add("page-header")
    header.innerText = "Bøkene våre"
    pageContainer.appendChild(header)

    let bookContainer = document.createElement("div")
    bookContainer.classList.add("books")

    for (let book of books) {
        addBookHTML(book, bookContainer)
    }

    pageContainer.appendChild(bookContainer)
}

window.onload = () => {
    initHTML()
}