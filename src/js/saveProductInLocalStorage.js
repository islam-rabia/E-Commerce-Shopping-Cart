let wishList = JSON.parse(localStorage.getItem("products")) || [];

function saveProductInLocalStorage(product) {
  wishList.push(product);

  console.log(wishList);
  localStorage.setItem("products", JSON.stringify(wishList));
}

export { saveProductInLocalStorage };
