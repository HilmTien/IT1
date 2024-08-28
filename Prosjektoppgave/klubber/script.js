import klubber from "./klubber.json" assert { type: "json" };

const klubbliste = document.querySelector(".klubbliste");

for (const klubb of klubber) {
  // Lag elementer
  const liEl = document.createElement("li");
  const ankerEl = document.createElement("a");
  const imgEl = document.createElement("img");
  const tekstBlokkEl = document.createElement("div");

  // Sett attributter
  imgEl.src = klubb.bildeCoverPath;
  imgEl.alt = `Bildecover til ${klubb.klubbnavn}`;
  tekstBlokkEl.innerHTML = klubb.klubbnavn;

  // Bygg inn lenke
  if (klubb.klubbSidePath) {
    ankerEl.href = klubb.klubbSidePath;
  }

  // For CSS
  liEl.classList.add("klubb");
  imgEl.classList.add("klubb-cover");
  tekstBlokkEl.classList.add("klubb-knapp");

  // Legg til elementene
  ankerEl.appendChild(imgEl);
  ankerEl.appendChild(tekstBlokkEl);
  liEl.appendChild(ankerEl);
  klubbliste.appendChild(liEl);
}
