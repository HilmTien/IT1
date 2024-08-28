import tidsskjema from "../tidsskjema.json" assert { type: "json" };
import { toTitleCase } from "/scripts/utils.js";

function visTilgjengelighetsrutenett() {
  for (const [dag, opererer] of Object.entries(tidsskjema)) {
    const dagBlokk = document.querySelector(`.${dag}`);
    dagBlokk.classList.add(opererer ? "opererer" : "opererer-ikke");
  }
}

function visTilgjelighetTekst() {
  const tilgjengelighetDisplay = document.querySelector(
    ".tilgjengelighet-tekst"
  );
  tilgjengelighetDisplay.innerHTML = `Matteklubben er oppegående på ${Object.entries(
    tidsskjema
  )
    // fjerner dager som ikke er tilgjengelig
    .filter(([_, opererer]) => {
      return opererer;
    })
    // gjør dagene som er tilgjengelig til titlecase
    .map(([dag, _]) => {
      return toTitleCase(dag);
    })
    // setter sammen dagene til en streng "Mandag / Torsdag / ..."
    .join(" / ")}`;
}

export function visTilgjengelighet() {
  visTilgjengelighetsrutenett();
  visTilgjelighetTekst();
}
