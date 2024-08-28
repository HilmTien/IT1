import { hentFraLocalStorage, rapidAPIKey } from "/scripts/utils.js";

const fåDagensFakta = async () => {
  const url =
    "https://numbersapi.p.rapidapi.com/random/math?min=0&max=1000000&fragment=true&json=true";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": rapidAPIKey,
      "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
    },
  };

  const respons = await fetch(url, options);

  if (!respons.ok) {
    return "Kunne ikke få dagens fakta. Kontakt nettsideadministratoren.";
  }

  const data = await respons.json();

  return [data.number, data.text];
};

export const visDagensFakta = async () => {
  const funfactDisplay = document.querySelector(".fun-fact-text");

  const dagensFakta = await fåDagensFakta();
  const melding = `Dagens tall er ${dagensFakta[0]}: <span lang="en">${dagensFakta[1]}</span>`;
  localStorage.setItem("dagensTall", dagensFakta[0]);
  localStorage.setItem("dagensFunFact", dagensFakta[1]);
  funfactDisplay.innerHTML = melding;

  const funfactStats = document.querySelector(".fun-fact-stats");
  let antallDager = hentFraLocalStorage("antallDager", Number);
  antallDager += 1;
  funfactStats.innerHTML = `Du har sett ${antallDager} ${antallDager - 1 === 0 ? "fun-fact" : "fun-facts"
    } til sammen!`;
  localStorage.setItem("antallDager", antallDager);
};

export const visTidligereFakta = () => {
  const funfactDisplay = document.querySelector(".fun-fact-text");
  const tallet = hentFraLocalStorage("dagensTall", Number);
  const faktaOmTallet = hentFraLocalStorage("dagensFunFact", String);
  funfactDisplay.innerHTML = `Dagens tall er ${tallet}: <span lang="en">${faktaOmTallet}</span>`;

  const funfactStats = document.querySelector(".fun-fact-stats");
  let antallDager = hentFraLocalStorage("antallDager", Number);
  funfactStats.innerHTML = `Du har sett ${antallDager} ${antallDager - 1 === 0 ? "fun-fact" : "fun-facts"
    } til sammen!`;
};
