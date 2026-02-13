function cartManagement(products, productId) {
  let wishList = JSON.parse(localStorage.getItem("products")) || [];

  let findProduct = wishList.find((ele) => ele.id === productId);
  if (findProduct) {
    wishList = wishList.map((ele) =>
      ele.id === findProduct.id ? { ...ele, quantity: ele.quantity + 1 } : ele
    );
  } else {
    let findProduct = products.find((ele) => ele.id === productId);
    wishList.push({ ...findProduct, quantity: 1 });
  }

  localStorage.setItem("products", JSON.stringify(wishList));
}

export { cartManagement };
