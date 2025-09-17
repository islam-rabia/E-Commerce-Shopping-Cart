import { mapProducts } from "./handle-products-in-shopping-cart.js";

let AllData = JSON.parse(localStorage.getItem("products")) || [];

function removeProduct(productIndex) {
  // AllData = AllData.filter((ele) => (ele.id !== productId ? ele : undefined));
  AllData.splice(productIndex, 1);

  mapProducts(AllData);
  localStorage.setItem("products", JSON.stringify(AllData));
}

export { removeProduct };
