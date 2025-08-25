import { saveProductInLocalStorage } from "./saveProductInLocalStorage.js";

function eventAddToCart(products) {
  let app = document.querySelector(".dishes-list");

  app.addEventListener("click", (event) => {
    let btn = event.target.closest(".add-to-cart");

    if (btn) {
      let productId = +btn.getAttribute("data-id");
      // condition ? true : false
      let product = products.find((ele) => ele.id === productId);

      saveProductInLocalStorage(product);
    }
  });
}

export { eventAddToCart };
