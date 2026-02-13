import { signOut } from "../validation/signOut.js";
import { fetchDataProducts } from "./handle-product-details.js";
import { showAccount } from "./show-account.js";

fetchDataProducts();
signOut();

let account = JSON.parse(localStorage.getItem("account")) || [];
if (account.length != 0) {
  showAccount();
}
