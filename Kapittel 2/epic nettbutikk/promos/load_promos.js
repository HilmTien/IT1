const promos = await fetch("./promos/promos.json").then(response => response.json())
console.log(promos)

const promosContainer = document.getElementById("promos-placeholder")

for (let promo of promos) {
    let promoContainer = document.createElement("div")

    let productNameSpan = document.createElement("span")
    let oldValueSpan = document.createElement("span")
    let newValueSpan = document.createElement("span")

    let productName = document.createTextNode(promo["product_name"])
    let oldValue = document.createTextNode(promo["price_original"])
    let newValue = document.createTextNode(promo["price_reduced"])

    productNameSpan.appendChild(productName)
    oldValueSpan.appendChild(oldValue)
    newValueSpan.appendChild(newValue)

    promoContainer.appendChild(productNameSpan)
    promoContainer.appendChild(oldValueSpan)
    promoContainer.appendChild(newValueSpan)

    promosContainer.appendChild(promoContainer)
}