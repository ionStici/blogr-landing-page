const runSubNav = function () {
  const btns = document.querySelectorAll(".nav__item__link");

  btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const subNav = e.target.nextElementSibling;
      const navStatus = subNav.dataset.navStatus;

      if (navStatus === "closed") {
        const navItem = e.target.closest(".nav__item");
        subNav.style.display = "revert";

        navItem.classList.add("rotate-arrow");

        setTimeout(
          () => (subNav.style.height = `${subNav.dataset.height}px`),
          1
        );
        setTimeout(() => navItem.classList.add("nav-open"), 50);
        setTimeout(() => navItem.classList.add("nav-open-pm"), 50);

        subNav.dataset.navStatus = "open";
      } else {
        const navItem = e.target.closest(".nav__item");
        navItem.classList.remove("rotate-arrow");

        navItem.classList.remove("nav-open");

        setTimeout(() => (subNav.style.height = `0`), 1);
        setTimeout(() => navItem.classList.remove("nav-open-pm"), 100);
        setTimeout(() => (subNav.style.display = "none"), 150);

        subNav.dataset.navStatus = "closed";
      }
    });
  });
};

runSubNav();
