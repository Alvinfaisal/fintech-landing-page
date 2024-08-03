// dom element
const navbar = document.querySelector(".navbar");
const btnOpenNav = document.querySelector("#btnOpenNav");
const btnCloseNav = document.querySelector("#btnCloseNav");

btnOpenNav.addEventListener("click", () => {
  navbar.classList.add("openNav");

  if (navbar.classList.contains("openNav")) {
    btnOpenNav.classList.add("hide");
    btnCloseNav.classList.remove("hide");
  }
});

btnCloseNav.addEventListener("click", () => {
  navbar.classList.remove("openNav");
  btnCloseNav.classList.add("hide");
  btnOpenNav.classList.remove("hide");
});
