import { visDagensFakta, visTidligereFakta } from "./modules/dagensfunfact.js";
import { visTilgjengelighet } from "./modules/tidsskjema.js";
import { sjekkOmNyDag } from "/scripts/utils.js";

window.onload = () => {
  const erNyDag = sjekkOmNyDag();

  if (erNyDag) {
    visDagensFakta();
  } else {
    visTidligereFakta();
  }
  visTilgjengelighet();
};
