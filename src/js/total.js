function total() {
  let eleSubTotal = document.querySelector(".subtotal p");
  let eleDiscount = document.querySelector(".discount p");
  let eleDelivery = document.querySelector(".delivery-free p");
  let eleTotal = document.querySelector(".total p");
  let Data = JSON.parse(localStorage.getItem("products")) || [];

  let subTotalValue = parseFloat(eleSubTotal.innerHTML.slice(1));
  let discountValue = parseFloat(eleDiscount.innerHTML) / 100;
  let discount = subTotalValue * discountValue;

  let DeliveryValue = parseFloat(eleDelivery.innerHTML.slice(1));

  let total = subTotalValue + DeliveryValue - discount;
  eleTotal.innerHTML = `$${total}`;

  if (Data.length === 0) {
    eleTotal.innerHTML = `$0.0`;
  }
}

export { total };
