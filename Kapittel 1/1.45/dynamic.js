function syncAntallGjester(newValue) {
    if (newValue > 10 || newValue < 1) {
        return
    }
    document.getElementById("gjesterlabel").innerText = `Du bestiller for: ${newValue} gjest${newValue == 1 ? '' : 'er'}`
    document.getElementById("gjesterrange").value = newValue
    document.getElementById("gjesternumber").value = newValue
}

function sjekkRettRequirement() {
    let retter = document.getElementsByName("rett")
    let requirementIsMet = false

    for (let rett of retter) {
        if (rett.hasAttribute("checked")) {
            requirementIsMet = true
        }
    }

    if (requirementIsMet) {
        for (let rett of retter) {
            rett.setAttribute("required", false)
        }
    } else {
        for (let rett of retter) {
            rett.setAttribute("required", true)
        }
    }
}