const menu = document.querySelector(".menu");
const navMenu = document.querySelector(".nav-menu");
const busca = document.querySelector("input");

menu.addEventListener("click", () =>{
    menu.classList.toggle('active');
    navMenu.classList.toggle('active');
    busca.classList.toggle('active');
});