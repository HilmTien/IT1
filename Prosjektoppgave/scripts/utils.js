import keys from "/.env/apiKeys.json" assert { type: "json" };

export const rapidAPIKey = keys.rapidAPI;

export function hentFraLocalStorage(nøkkel, defaultTypeFabrikk) {
  const verdi = localStorage.getItem(nøkkel);
  if (verdi === null) {
    return new defaultTypeFabrikk();
  } else {
    return new defaultTypeFabrikk(verdi);
  }
}

export function sjekkOmNyDag() {
  // Henter tider for å sammenligne
  const sisteBesøkDag = hentFraLocalStorage("sisteBesøkDag", Number);

  const nå = new Date();
  const da = new Date(sisteBesøkDag);

  // Lagrer tiden
  localStorage.setItem("sisteBesøkDag", nå.getTime());

  // Sjekker om datoene er like
  const erSammeDag = (
    nå.getUTCFullYear() === da.getUTCFullYear() &&
    nå.getUTCMonth() === da.getUTCMonth() &&
    nå.getUTCDay() === da.getUTCDay()
  )
  return !erSammeDag
}

export function toTitleCase(string) {
  return string
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
    .join(" ");
}
