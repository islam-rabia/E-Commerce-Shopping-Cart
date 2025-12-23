async function fetchSearchProducts() {
  let req = await fetch("https://api.jsonbin.io/v3/b/685196d38a456b7966afc4c8");
  let res = await req.json();
  let products = res.record.dishesList;

  searchProducts(products);
}

function searchProducts(products) {
  let searchSection = document.querySelector("#search_product");
  let searchInput = searchSection.querySelector("input");
  let searchList = searchSection.querySelector(".search-list");
  let searchBody = searchSection.querySelector(".search-body p");

  searchInput.addEventListener("input", (e) => {
    let inputValue = e.target.value.toLowerCase();
    searchList.innerHTML = "";
    searchBody.innerHTML = "";

    if (searchInput.value === "") {
      searchBody.innerHTML = "No recent searches";
      return;
    }

    let filterProduct = products.filter((ele) =>
      ele.title.toLowerCase().includes(inputValue)
    );

    if (filterProduct.length === 0) {
      searchList.innerHTML = "Not Found Products";
      return;
    }

    searchList.innerHTML = filterProduct
      .map((ele) => {
        let { id, title, img, price, category } = ele;

        return `
        <li class="search-item" data-id="${id}">
          <figure>
            <img src="${img}" alt="${title}" />
          </figure>
          <div class="search-item-info">
            <a href="./product-details.html?productId=${id}">
              <h3>${title}</h3>
            </a>
            <span>Quantity: 0</span>
            <br />
            <span>Category: ${category}</span>
            <p>$${price}</p>
          </div>
        </li>
      `;
      })
      .join("");
  });
}

export { fetchSearchProducts };
