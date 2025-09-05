function changeQuantity(productId) {
  let getData = JSON.parse(localStorage.getItem("products")) || [];

  let product = getData.find((ele) => ele.id === productId);
  if (product) {
    let p = document.querySelector(`.quantity-${productId}`);
    p.innerHTML = product.quantity;
  }
}

export { changeQuantity };
