// menu burger
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    // Si on défile plus de 50px, on passe le header en noir, sinon on rétablit le style initial
    if (window.scrollY > 50) {
      header.style.backgroundColor = "#000";
    } else {
      header.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    }
  });

