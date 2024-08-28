

function regnUtEtterMoms() {
    const før_moms = document.getElementById("numberInput").value
    const display = document.getElementById("display")
    display.innerText = Math.round(før_moms * 1.25 * 100) / 100
}