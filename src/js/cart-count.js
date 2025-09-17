function cartCount() {
  let AllData = JSON.parse(localStorage.getItem("products")) || [];
  let p = document.querySelector(".count-cart p");
  let span = document.querySelector(".products-length");

  p.innerHTML = AllData.length;
  if (span) {
    span.innerHTML = `(${AllData.length})`;
  }
}

export { cartCount };
