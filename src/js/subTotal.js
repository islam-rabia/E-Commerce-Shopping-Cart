function subTotal() {
  let Data = JSON.parse(localStorage.getItem("products")) || [];
  let subTotal = document.querySelector(".subtotal p");
  let sub = 0;
  Data.forEach((ele) => {
    let priceTotal = ele.quantity * ele.price;
    sub += priceTotal;
  });
  subTotal.innerHTML = `$${sub}.0`;
}

export { subTotal };
