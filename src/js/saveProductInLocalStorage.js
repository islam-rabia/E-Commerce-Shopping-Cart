function saveProductInLocalStorage(products, productId) {
  let wishList = JSON.parse(localStorage.getItem("products")) || [];
  let findProduct = products.find((ele) => ele.id === productId);

  if (findProduct) {
    localStorage.setItem("products", JSON.stringify(wishList));
    wishList.push(findProduct);
  }
}

export { saveProductInLocalStorage };
