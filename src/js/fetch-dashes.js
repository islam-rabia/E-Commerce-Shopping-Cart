import { cartCount } from "./cart-count.js";
import { cartManagement } from "./cart-management.js";
import { changeQuantity } from "./change-quantity.js";
import { decrement } from "./decrement.js";
import { increment } from "./increment.js";
import { saveProductInLocalStorage } from "./saveProductInLocalStorage.js";

let wishlist;
async function fetchDataDashes() {
  let req = await fetch("https://api.jsonbin.io/v3/b/685196d38a456b7966afc4c8");
  let res = await req.json();
  let products = res.record.dishesList;
  wishlist = products;

  handleDataDashes(products);
  cartCount();
}

let app = document.querySelector(".dishes-list");
function handleDataDashes(products) {
  app.innerHTML = products
    .map((item) => {
      let { id, title, img, price, description } = item;

      return `
      <li>
          <figure class="relative">
            <img src="${img}" alt="" />
            <div class="increment-decrement">
              <button title="increment" class="btn-increment" data-id="${id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
              </button>
              <p id="quantity" class="quantity-${id}" data-id="${id}">0</p>
              <button title="decrement" class="btn-decrement" data-id="${id}">
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
              <button class="add-to-cart" title="add to cart" data-id="${id}">
                Add To Cart
              </button>
              <span>$${price}</span>
            </div>
          </div>
        </li>
    `;
    })
    .join("");

  let element = document.querySelector(".dishes-list");

  element.addEventListener("click", (event) => {
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

export { fetchDataDashes };
