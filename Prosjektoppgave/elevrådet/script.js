import { byggMelding } from "./modules/medlemslisteMobil.js"
import { leggTilTabellSortering, renderTabell } from "./modules/medlemstabell.js"

window.onload = () => {
    renderTabell()
    leggTilTabellSortering()

    byggMelding()
}