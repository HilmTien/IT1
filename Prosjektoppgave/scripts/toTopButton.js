export function addToTopButton() {
  const body = document.querySelector("body");

  // lager selve knappen for å gå til toppen av en side
  const button = document.createElement("div");
  button.classList.add("til-topp");
  button.innerHTML = `
  <a href="./#top">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="3 6 18 12" stroke-width="1.5" stroke="black" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
  `;

  body.appendChild(button);
};
