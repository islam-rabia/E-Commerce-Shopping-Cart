import { cartCount } from "./cart-count.js";
import { cartManagement } from "./cart-management.js";
import { changeQuantity } from "./change-quantity.js";
import { decrement } from "./decrement.js";
import { increment } from "./increment.js";
import { relatedProducts } from "./related-products.js";
import { saveProductInLocalStorage } from "./saveProductInLocalStorage.js";

let wishlist;
async function fetchDataProducts() {
  let req = await fetch("https://api.jsonbin.io/v3/b/685196d38a456b7966afc4c8");
  let res = await req.json();
  let products = res.record.dishesList;
  wishlist = products;

  getProductDetails(products);
  cartCount();
}

function getProductDetails(products) {
  let params = new URLSearchParams(window.location.search);
  let productId = +params.get("productId");

  let product = products.find((ele) => ele.id === productId);
  if (product) {
    handleProductDetails(product);
    relatedProducts(products, productId);
  }
}

let app = document.querySelector(".details-list");

function handleProductDetails(product) {
  let { id, title, img, price, category } = product;
  app.innerHTML = `
        <li>
        <figure>
          <img src="${img}" alt="" />
        </figure>
        <div class="dishes-info">
          <h3>${title}</h3>
          <p>
            lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem vitae, inventore nesciunt maxime consequatur vel
            ipsum assumenda voluptate quisquam. Praesentium exercitationem
            impedit a totam cum deserunt temporibus alias in. Minus!
          </p>
          <div class="product-quantity">
            <span>quantity: </span>
            <div class="increment-decrement">
            <button title="increment" class="btn-increment" data-id="${id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            </button>
            <p id="quantity" data-id="${id}" class="quantity-${id}">0</p>
            <button title="decrement" class="btn-decrement" data-id="${id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-icon lucide-minus"><path d="M5 12h14"/></svg>
            </button>
            </div>
          </div>
          <span>Category: ${category}</span>
          <span>Price: $${price}</span>
          <button class="add-to-cart" data-id="${id}">Add to cart</button>
        </div>
      </li>
  `;

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

export { fetchDataProducts };
