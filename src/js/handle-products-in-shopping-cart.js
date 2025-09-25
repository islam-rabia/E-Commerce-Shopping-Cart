import { changeQuantity } from "./change-quantity.js";
import { increment } from "./increment.js";
import { decrement } from "./decrement.js";
import { removeProduct } from "./remove-product.js";
import { cartCount } from "./cart-count.js";
import { orderSummary } from "./order-summary.js";

function handleProductsInShoppingCart() {
  let products = JSON.parse(localStorage.getItem("products")) || [];

  mapProducts(products);
  cartCount();
}

let app = document.querySelector(".cart-list");
function mapProducts(products) {
  app.innerHTML = products
    .map((ele, index) => {
      let { id, title, img, price } = ele;

      return `
      <li>
        <figure>
          <img src="${img}" alt="" />
        </figure>
        <div class="cart-container">
          <div class="cart-title">
            <h3>${title}</h3>
            <div class="price">
              <p>$${price}</p>
            </div>
          </div>
          <div class="cart-category">
            <p>Category: Salad</p>
          </div>
          <div class="increment-decrement">
            <button title="increment" class="btn-increment" data-id="${id}">
              <svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
            <p id="quantity" class="quantity-${id}" data-id="${id}">0</p>
            <button title="decrement" class="btn-decrement" data-id="${id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-icon lucide-minus">
                <path d="M5 12h14" />
              </svg>
            </button>
          </div>
          <div class="remove-item">
            <button type="button" title="remove to cart" class="btn-remove" data-id="${id}" data-index="${index}">
              Remove to cart
            </button>
          </div>
        </div>
      </li>
    `;
    })
    .join("");

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

  let btnsRemove = document.querySelectorAll(".btn-remove");
  btnsRemove.forEach((btn) => {
    btn.addEventListener("click", () => {
      let productId = +btn.getAttribute("data-id");
      let productIndex = +btn.getAttribute("data-index");
      removeProduct(productIndex);
      cartCount();
      orderSummary();
    });
  });
}

export { handleProductsInShoppingCart, mapProducts };
