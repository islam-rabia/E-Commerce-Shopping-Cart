import { signOut } from "../validation/signOut.js";
import { handleProductsInShoppingCart } from "./handle-products-in-shopping-cart.js";
import { navbarSlider } from "./navbar-slider.js";
import { orderSummary } from "./order-summary.js";
import { showAccount } from "./show-account.js";

navbarSlider();
handleProductsInShoppingCart();
orderSummary();
signOut();

let account = JSON.parse(localStorage.getItem("account")) || [];
if (account.length != 0) {
  showAccount();
}
