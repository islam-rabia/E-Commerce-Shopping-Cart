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

/*
      <li>
          <figure class="relative">
            <img src="${img}" alt="" />

            <div class="increment-decrement">
              <button title="increment" class="btn-increment">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
              </button>
              <p class="quantity">0</p>
              <button title="decrement" class="btn-decrement">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-icon lucide-minus"><path d="M5 12h14"/></svg>
              </button>
            </div>
          </figure>


          <div class="dishes-info">
            <div class="dishes-title">
              <a href="#">
                <h3>${title}</h3>
              </a>
              <img src="./image/rating_starts.png" alt="" />
            </div>
            <p>${description}</p>
            <div class="card">
              <button class="add-to-cart" title="add to cart">
                Add To Cart
              </button>
              <span>$${price}</span>
            </div>
          </div>
        </li>
*/

export { navbarSlider };
