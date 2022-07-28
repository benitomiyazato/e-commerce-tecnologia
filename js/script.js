const hamburguer = document.querySelector(".hamburguer-menu");
const navMenu = document.querySelector(".nav-menu");
const mainHeader = document.querySelector(".main-header");

hamburguer.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    mainHeader.classList.toggle("active");
});