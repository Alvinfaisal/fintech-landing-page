// dom element
const navbar = document.querySelector(".navbar");
const btnOpenNav = document.querySelector("#btnOpenNav");
const btnCloseNav = document.querySelector("#btnCloseNav");
const bodyTag = document.querySelector("body");

btnOpenNav.addEventListener("click", () => {
  navbar.classList.add("openNav");

  if (navbar.classList.contains("openNav")) {
    btnOpenNav.classList.add("hide");
    btnCloseNav.classList.remove("hide");
    bodyTag.classList.add("scroll-hidden");
  }
});

btnCloseNav.addEventListener("click", () => {
  navbar.classList.remove("openNav");
  btnCloseNav.classList.add("hide");
  btnOpenNav.classList.remove("hide");
  bodyTag.classList.remove("scroll-hidden");
});

document.addEventListener("click", (e) => {
  if (
    !e.target.classList.contains("navbar") &&
    e.target.id !== "btnOpenNav" &&
    !e.target.classList.contains("navbar-link")
  ) {
    navbar.classList.remove("openNav");
    btnCloseNav.classList.add("hide");
    btnOpenNav.classList.remove("hide");
    bodyTag.classList.remove("scroll-hidden");
  }
});
