const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".header__nav");
const header = document.querySelector(".header");
const blurr = document.querySelector(".blur");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
	mobileNav.classList.toggle("open");
    header.classList.toggle("open");
    blurr.classList.toggle("open");
    body.classList.toggle("open");
});