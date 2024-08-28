import steder from "./steder.json" assert { type: "json" }

// const koordinater = {}

// for (const group of Object.keys(steder)) {
//     for (const sted of steder[group]) {
//         koordinater[sted.stedsnavn] = sted.koordinat
//     }
// }

const koordinater = Object.entries(steder).reduce((forrige, [_, lokasjoner]) => {
    lokasjoner.forEach(lokasjon => {
        forrige[lokasjon.stedsnavn] = lokasjon.koordinat
    })
    return forrige
}, {})

const parseEnheter = {
    "celsius": "°C"
}

let vær

class Vær {
    constructor(data) {
        this.koordinater = data.geometry.coordinates
        this.tidsserier = data.properties.timeseries.map((tidsserie) => {
            const details = tidsserie.data.instant.details
            return {
                "tid": new Date(tidsserie.time),
                "værStatus": {
                    "lufttemperatur": details.air_temperature
                }

            }
        })
        const units = data.properties.meta.units
        this.enheter = {
            "lufttemperatur": parseEnheter[units.air_temperature]
        }
    }

    fåKoordinater() {
        return `Lengdegrad ${this.koordinater[0]}, Breddegrad: ${this.koordinater[1]}, Høyde: ${this.koordinater[2]}`
    }

    fåTemperaturPåTidspunkt(tidspunkt) {
        const deltaTimer = Math.floor(millisekunderTilTimer(tidspunkt - this.tidsserier[0].tid))
        if (deltaTimer < 0) {
            throw new Error("tidspunkt kan ikke være før nå")
        }
        if (deltaTimer > 62) {
            throw new Error("for langt frem i fremtiden")
        }
        return this.tidsserier[deltaTimer].værStatus.lufttemperatur + this.enheter.lufttemperatur
    }
}

const millisekunderTilTimer = (tid) => {
    // 1000 * 60 * 60 = 3600000
    return tid / 3600000
}

const hentVærData = async (lengdegrad, breddegrad) => {
    const respons = await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${breddegrad}&lon=${lengdegrad}`)

    if (!respons.ok) {
        displayError("Noe galt skjedde i API-forespørselen")
        return
    }

    const data = await respons.json()
    return data
}

const fiksInputFelt = () => {
    const submitInputEl = document.getElementById("submitInput")
    const submitLocationEl = document.getElementById("submitCurrentPos")
    const locationPickerEl = document.getElementById("stedValg")

    submitLocationEl.addEventListener("click", fåVæretFraLokasjon)
    submitInputEl.addEventListener("click", fåVæretFraInput)
    locationPickerEl.addEventListener("change", settInnStedskoordinater)
}

const settInnStedskoordinater = () => {
    const dropdownEl = document.getElementById("stedValg")

    const koordinat = koordinater[dropdownEl.value]
    // console.log(koordinat)

    const lengdegrad = document.getElementById("lengdegradInput")
    const breddegrad = document.getElementById("breddegradInput")

    lengdegrad.value = koordinat.lengdegrad
    breddegrad.value = koordinat.breddegrad
}

const settInnFavorittkoordinater = () => {
    const dropdownEl = document.getElementById("favorittValg")
    const [long, lat] = dropdownEl.value.split(", ")

    const lengdegrad = document.getElementById("lengdegradInput")
    const breddegrad = document.getElementById("breddegradInput")

    lengdegrad.value = long
    breddegrad.value = lat

    dropdownEl.value = ""
}

const fåVæretFraLokasjon = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const lengdegrad = document.getElementById("lengdegradInput")
        const breddegrad = document.getElementById("breddegradInput")

        lengdegrad.value = position.coords.longitude
        breddegrad.value = position.coords.latitude
    })

}

const fåVæretFraInput = async () => {
    const lengdegrad = document.getElementById("lengdegradInput").value
    const breddegrad = document.getElementById("breddegradInput").value
    if (lengdegrad === "" || breddegrad === "") {
        displayError("Et av koordinatfeltene er tomt.")
        return
    }
    vær = new Vær(await hentVærData(lengdegrad, breddegrad))
    // console.log(vær.fåTemperaturPåTidspunkt(new Date()))
    displayVæret()
}

const displayError = (message) => {
    const display = document.getElementById("display")
    display.innerHTML = message
}

const displayVæret = () => {
    const display = document.getElementById("display")
    display.innerHTML = `Været ved ${vær.fåKoordinater()}:`
    const favoritter = fåFavoritter()

    fjernFavorittKnapp()
    fjernFjernFavorittKnapp()

    if (!Object.keys(favoritter).includes(`${vær.koordinater[0]}, ${vær.koordinater[1]}`)) {
        leggTilFavorittKnapp()
    }

    if (Object.keys(favoritter).includes(`${vær.koordinater[0]}, ${vær.koordinater[1]}`)) {
        leggTilFjernFavorittKnapp()
    }


    const tabell = document.getElementById("værTabell")
    tabell.innerHTML = ""
    const nå = new Date()
    for (let i = 0; i < 62; i++) {
        const tabellRad = document.createElement("tr")

        // 60 * 60 * 1000 = 3600000
        const klokkeslett = new Date(nå.getTime() + i * 3600000)
        const klokkeslettEl = document.createElement("td")
        const temperaturEl = document.createElement("td")
        klokkeslettEl.innerHTML = klokkeslett.toLocaleDateString("nb-NO", { "weekday": "long", "hour": "numeric", "minute": "numeric" })
        temperaturEl.innerHTML = vær.fåTemperaturPåTidspunkt(klokkeslett)

        if (parseFloat(temperaturEl.innerHTML) < 0) {
            temperaturEl.classList.add("cold")
        } else {
            temperaturEl.classList.add("warm")
        }

        tabellRad.appendChild(klokkeslettEl)
        tabellRad.appendChild(temperaturEl)

        tabell.appendChild(tabellRad)
    }
}

const fjernFavorittKnapp = () => {
    const favorittKnappContainer = document.getElementById("favorittKnappContainer")
    favorittKnappContainer.innerHTML = ""
}

const fjernFjernFavorittKnapp = () => {
    const fjernFavorittKnappContainer = document.getElementById("fjernFavorittKnappContainer")
    fjernFavorittKnappContainer.innerHTML = ""
}

const leggTilFavorittKnapp = () => {
    const favorittKnappContainer = document.getElementById("favorittKnappContainer")
    favorittKnappContainer.innerHTML = ""
    const favorittKnapp = document.createElement("button")
    favorittKnapp.addEventListener("click", leggTilFavoritt)
    favorittKnapp.innerHTML = "Legg til i favoritter"
    favorittKnappContainer.appendChild(favorittKnapp)
}

const leggTilFjernFavorittKnapp = () => {
    const fjernFavorittKnappContainer = document.getElementById("fjernFavorittKnappContainer")
    fjernFavorittKnappContainer.innerHTML = ""
    const fjernFavorittKnapp = document.createElement("button")
    fjernFavorittKnapp.addEventListener("click", fjernFraFavoritt)
    fjernFavorittKnapp.innerHTML = "Fjern fra favoritter"
    fjernFavorittKnappContainer.appendChild(fjernFavorittKnapp)
}

const leggTilFavoritt = () => {
    const favoritter = fåFavoritter()
    favoritter[`${vær.koordinater[0]}, ${vær.koordinater[1]}`] = `${vær.koordinater[0]}, ${vær.koordinater[1]}`
    localStorage.setItem("favoritter", JSON.stringify(favoritter))
    byggFavorittDropdown()
    fjernFavorittKnapp()
    leggTilFjernFavorittKnapp()
}

const fjernFraFavoritt = () => {
    const favoritter = fåFavoritter()
    delete favoritter[`${vær.koordinater[0]}, ${vær.koordinater[1]}`]
    localStorage.setItem("favoritter", JSON.stringify(favoritter))
    byggFavorittDropdown()
    fjernFjernFavorittKnapp()
    leggTilFavorittKnapp()
}

const fåFavoritter = () => {
    let favoritter = JSON.parse(localStorage.getItem("favoritter"))
    if (favoritter == null) {
        favoritter = {}
    }
    return favoritter
}

const byggDropdown = () => {
    const dropdownEl = document.getElementById("stedValg")
    for (const [group, entries] of Object.entries(steder)) {
        const groupEl = document.createElement("optgroup")
        groupEl.label = group

        groupEl.innerHTML = entries.map(entry => {
            // console.log(entry.stedsnavn)
            return `<option>${entry.stedsnavn}</option>`
        }).join("")
        dropdownEl.appendChild(groupEl)
    }
}

const byggFavorittDropdown = () => {
    const container = document.getElementById("favorittValgContainer")
    const favoritter = fåFavoritter()

    container.innerHTML = `
    <label for="favorittValg">
        Favorittsteder
        <br>
        <select name="sted" id="favorittValg">
            <option value="none" selected disabled hidden></option>
            ${Object.keys(favoritter).map(val => (
        `<option>${val}</option>`
    )).join("")}
        </select>
    </label>
    `
    document.getElementById("favorittValg").addEventListener("change", settInnFavorittkoordinater)

    if (Object.keys(favoritter).length === 0) {
        document.getElementById("favorittValgContainer").innerHTML = ""
    }
}

window.onload = () => {
    byggDropdown()
    const favoritter = fåFavoritter()
    if (Object.keys(favoritter).length !== 0) {
        byggFavorittDropdown()
    }
    fiksInputFelt()
    //console.log(vær.fåTemperaturPåTidspunkt(new Date("2023-02-13T16:01:00Z",)))
}