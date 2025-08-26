let wishList = JSON.parse(localStorage.getItem("products")) || [];

function cartManagement(product, productId) {
  let findProduct = wishList.find((ele) => ele.id === productId);
  if (findProduct) {
    wishList = wishList.map((ele) =>
      ele.id === productId ? { ...ele, quantity: ele.quantity + 1 } : ele
    );
  } else {
    wishList.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("products", JSON.stringify(wishList));
}

export { cartManagement };
