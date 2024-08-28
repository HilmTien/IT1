export function loadNavbar() {
  $(document).ready(function () {
    $(function () {
      // sett inn navbar
      $("#nav-placeholder").load("/navbar/navbar.html");

      // legg til mobilmenyfunksjonalitet
      $(document).on("click", ".mobile-hamburger", toggleMenu)
    });
  });
};

function toggleMenu() {
  const menu = document.querySelector(".navbar-items-mobile")
  // sjekker om menyen er synlig eller ikke
  switch (menu.style.display) {
    case "block":
      menu.style.display = "none"
      break
    case "none":
      menu.style.display = "block"
      break
    default: // kjøres bare en gang
      menu.style.display = "block"
  }
}