function navbarSlider() {
  let btnOpen = document.querySelector(".open-navbar");
  let btnClose = document.querySelector(".close-navbar");
  let navbar = document.querySelector("nav");
  let sectionNavbar = document.querySelector(".section-navbar");

  btnOpen.addEventListener("click", () => {
    navbar.classList.add("active");
    sectionNavbar.classList.add("active");
  });

  btnClose.addEventListener("click", () => {
    navbar.classList.remove("active");
    sectionNavbar.classList.remove("active");
  });
}

export { navbarSlider };
