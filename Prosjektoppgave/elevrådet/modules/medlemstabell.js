import elevrådetOriginal from "../elevrådet.json" assert { type: "json" }

let elevrådet = JSON.parse(JSON.stringify(elevrådetOriginal))

export function renderTabell() {
    byggElevrådTabell()
}

export function leggTilTabellSortering() {
    const klasseHead = document.querySelector(".tabell-klasse")
    const navnHead = document.querySelector(".tabell-navn")

    klasseHead.addEventListener("click", sorterEtterKlasse)
    navnHead.addEventListener("click", sorterEtterNavn)
}

function byggElevrådTabell() {
    const tabell = document.querySelector(".elevråd-tabell")

    tabell.innerHTML = `${elevrådet
        .map(
            (elev) => {
                return `<tr>
                    <td>${elev.klasse}</td>
                    <td>${elev.navn}</td>
                    <td><a href="mailto:${elev.epost}">${elev.epost}</a></td>
                </tr>`
            }
        )
        .join("")}`
}

function skiftKlasseVerdi(nåværende, neste) {
    const klasseHead = document.querySelector(".tabell-klasse")
    const navnHead = document.querySelector(".tabell-navn")

    klasseHead.classList.remove(nåværende)
    navnHead.classList.remove(nåværende)
    klasseHead.classList.add(neste)
    navnHead.classList.add(neste)

    // switch (nåværende) {
    //     case "usortert":
    //         klasseHead.classList.remove("usortert")
    //         navnHead.classList.remove("usortert")
    //         klasseHead.classList.add("stigende")
    //         navnHead.classList.add("stigende")
    //         break
    //     case "stigende":
    //         klasseHead.classList.remove("stigende")
    //         navnHead.classList.remove("stigende")
    //         klasseHead.classList.add("synkende")
    //         navnHead.classList.add("synkende")
    //         break
    //     case "synkende":
    //         klasseHead.classList.remove("synkende")
    //         navnHead.classList.remove("synkende")
    //         klasseHead.classList.add("usortert")
    //         navnHead.classList.add("usortert")
    //         break
    // }
}

function sorterEtterKlasse() {
    const klasseHead = document.querySelector(".tabell-klasse")

    function sorterStigende() {
        elevrådet.sort(
            (a, b) => {
                if (a.klasse < b.klasse) {
                    return -1
                } else if (a.klasse > b.klasse) {
                    return 1
                } else {
                    return 0
                }
            }
        )
    }

    function sorterSynkende() {
        elevrådet.sort(
            (a, b) => {
                if (a.klasse < b.klasse) {
                    return 1
                } else if (a.klasse > b.klasse) {
                    return -1
                } else {
                    return 0
                }
            }
        )
    }

    if (klasseHead.classList.contains("synkende")) {
        elevrådet = JSON.parse(JSON.stringify(elevrådetOriginal))
        skiftKlasseVerdi("synkende", "usortert")
    } else if (klasseHead.classList.contains("stigende")) {
        sorterSynkende()
        skiftKlasseVerdi("stigende", "synkende")
    } else if (klasseHead.classList.contains("usortert")) {
        sorterSynkende()
        skiftKlasseVerdi("usortert", "synkende")
    }
    byggElevrådTabell()
}

function sorterEtterNavn() {
    const navnHead = document.querySelector(".tabell-navn")

    function sorterStigende() {
        elevrådet.sort(
            (a, b) => {
                if (a.navn < b.navn) {
                    return -1
                } else if (a.navn > b.navn) {
                    return 1
                } else {
                    return 0
                }
            }
        )
    }

    function sorterSynkende() {
        elevrådet.sort(
            (a, b) => {
                if (a.navn < b.navn) {
                    return 1
                } else if (a.navn > b.navn) {
                    return -1
                } else {
                    return 0
                }
            }
        )
    }

    if (navnHead.classList.contains("usortert")) {
        sorterStigende()
        skiftKlasseVerdi("usortert", "stigende")
    } else if (navnHead.classList.contains("stigende")) {
        sorterSynkende()
        skiftKlasseVerdi("stigende", "synkende")
    } else if (navnHead.classList.contains("synkende")) {
        elevrådet = JSON.parse(JSON.stringify(elevrådetOriginal))
        skiftKlasseVerdi("synkende", "usortert")
    }
    byggElevrådTabell()
}