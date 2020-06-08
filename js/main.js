const menuBtn = document.querySelector(".m__menu");
const menu = document.querySelector(".menu__sitebar");

menuBtn.addEventListener("click", function () {
   menu.classList.toggle("active");
});