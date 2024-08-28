import elevrådet from "../elevrådet.json" assert { type: "json" }

export function byggMelding() {
    const display = document.querySelector(".elevrådet-mobil-tekst")

    display.innerHTML = `Elevrådet består av: ${elevrådet
        .map(
            (elev) => {
                return `${elev.navn} (${elev.klasse})`
            }
        )
        .slice(0, -1)
        .join(", ")
        } og ${elevrådet[elevrådet.length - 1].navn} (${elevrådet[elevrådet.length - 1].klasse})`
}