import { fetchDataDashes } from "./fetch-dashes.js";
import { navbarSlider } from "./navbar-slider.js";
import { fetchSearchProducts } from "./search-product.js";
import { showSectionSearch } from "./show-section-search.js";
import { showAccount } from "./show-account.js";
import { signOut } from "../validation/signOut.js";

navbarSlider();
fetchDataDashes();
showSectionSearch();
fetchSearchProducts();
signOut();

let account = JSON.parse(localStorage.getItem("account")) || [];
if (account.length != 0) {
  showAccount();
}
