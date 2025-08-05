function handleProductsInShoppingCart() {
  let products = JSON.parse(localStorage.getItem("products"));

  mapProducts(products);
}

let app = document.querySelector(".cart-list");
function mapProducts(products) {
  app.innerHTML = products
    .map((ele) => {
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
            <button title="increment" class="btn-increment">
              <svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
            <p class="quantity">0</p>
            <button title="decrement" class="btn-decrement">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-icon lucide-minus">
                <path d="M5 12h14" />
              </svg>
            </button>
          </div>
          <div class="remove-item">
            <button type="button" title="remove to cart">
              Remove to cart
            </button>
          </div>
        </div>
      </li>
    `;
    })
    .join("");
}

export { handleProductsInShoppingCart };
