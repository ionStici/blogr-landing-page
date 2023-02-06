const runMainNav = function () {
  const openNavBtn = document.querySelector(".header__open-menu");
  const closeNavBtn = document.querySelector(".header__close-menu");
  const header = document.querySelector(".header");
  const mainNav = document.querySelector(".nav");
  const navBg = document.querySelector(".nav__bg");

  const switchNavBtns = function (btnOn, btnOff) {
    btnOn.classList.add("display-block");
    btnOff.classList.remove("display-block");
  };

  openNavBtn.addEventListener("click", function () {
    switchNavBtns(closeNavBtn, openNavBtn);
    mainNav.classList.add("display-block");
    navBg.classList.add("display-block");
    setTimeout(() => header.classList.add("open-main-nav"), 50);
  });

  const closeNav = function () {
    switchNavBtns(openNavBtn, closeNavBtn);
    header.classList.remove("open-main-nav");
    navBg.classList.remove("display-block");
    setTimeout(() => mainNav.classList.remove("display-block"), 200);
  };

  closeNavBtn.addEventListener("click", closeNav);
  navBg.addEventListener("click", closeNav);
};

runMainNav();
