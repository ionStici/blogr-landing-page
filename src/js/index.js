import "./subNav.js";

const openNavBtn = document.querySelector(".header__open-menu");
const closeNavBtn = document.querySelector(".header__close-menu");
const header = document.querySelector(".header");
const mainNav = document.querySelector(".nav");
const navBg = document.querySelector(".nav__bg");

const switchNavBtns = function (btnOn, btnOff) {
  btnOn.style.display = "inline";
  btnOff.style.display = "none";
};

openNavBtn.addEventListener("click", function () {
  switchNavBtns(closeNavBtn, openNavBtn);
  mainNav.style.display = "block";
  navBg.style.display = "block";
  setTimeout(() => header.classList.add("open-main-nav"), 50);
});

const closeNav = function () {
  switchNavBtns(openNavBtn, closeNavBtn);
  header.classList.remove("open-main-nav");
  navBg.style.display = "none";
  setTimeout(() => (mainNav.style.display = "block"), 200);
};

closeNavBtn.addEventListener("click", closeNav);
navBg.addEventListener("click", closeNav);
