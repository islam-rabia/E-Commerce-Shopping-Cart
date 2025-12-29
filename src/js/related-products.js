import { cartCount } from "./cart-count.js";
import { cartManagement } from "./cart-management.js";
import { changeQuantity } from "./change-quantity.js";
import { decrement } from "./decrement.js";
import { increment } from "./increment.js";
import { saveProductInLocalStorage } from "./saveProductInLocalStorage.js";

let getAllData = JSON.parse(localStorage.getItem("products")) || [];
let wishlist;
function relatedProducts(products, productId) {
  wishlist = products;
  let findProduct = products.find((ele) => ele.id === productId);
  let filterProducts = products.filter(
    (ele) => ele.category === findProduct.category && ele.id !== productId
  );
  let randomProducts = [];

  while (randomProducts.length < 3 && filterProducts.length > 0) {
    let randomIndex = Math.floor(Math.random() * filterProducts.length); // 4, 3, 2
    randomProducts.push(filterProducts[randomIndex]);
    filterProducts.splice(randomIndex, 1);
  }

  handleRelatedProducts(randomProducts);
}

let app = document.querySelector(".related-list");
function handleRelatedProducts(randomProducts) {
  app.innerHTML = randomProducts
    .map((ele) => {
      let { id, title, description, quantity, img, price } = ele;

      return `
        <li>
          <figure class="relative">
            <img src="${img}" alt="">
            <div class="increment-decrement">
              <button title="increment" class="btn-increment" data-id="${id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
              </button>
              <p id="quantity" data-id="${id}" class="quantity-${id}">${
        getAllData.find((ele) => ele.id === id)?.quantity || 0
      }</p>
              <button title="decrement" class="btn-decrement" data-id="${id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-icon lucide-minus"><path d="M5 12h14"></path></svg>
              </button>
            </div>
          </figure>
          <div class="dishes-info">
            <div class="dishes-title">
              <a href="./product-details.html?productId=${id}">
                <h3>${title}</h3>
              </a>
              <img src="./image/rating_starts.png" alt="">
            </div>
            <p>${description}</p>
            <div class="card">
              <button class="add-to-cart" data-id="${id}">
                Add To Cart
              </button>
              <span>$${price}</span>
            </div>
          </div>
        </li>
    `;
    })
    .join("");

  app.addEventListener("click", (event) => {
    let btn = event.target.closest(".add-to-cart");
    if (btn) {
      let productId = +btn.getAttribute("data-id");
      // condition ? true : false
      let product = wishlist.find((ele) => ele.id === productId);
      saveProductInLocalStorage(product);
      cartManagement(product, productId);
      changeQuantity(productId);
      cartCount();
    }
  });

  let btnsIncrement = document.querySelectorAll(".btn-increment");
  btnsIncrement.forEach((btn) => {
    btn.addEventListener("click", () => {
      let productId = +btn.getAttribute("data-id");
      increment(productId);
      changeQuantity(productId);
    });
  });

  let btnsDecrement = document.querySelectorAll(".btn-decrement");
  btnsDecrement.forEach((btn) => {
    btn.addEventListener("click", () => {
      let productId = +btn.getAttribute("data-id");
      decrement(productId);
      changeQuantity(productId);
    });
  });

  let paragraphs = document.querySelectorAll("#quantity");
  paragraphs.forEach((ele) => {
    let productId = +ele.getAttribute("data-id");
    changeQuantity(productId);
  });
}

export { relatedProducts };
