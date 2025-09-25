import { subtotal } from "./subtotal.js";
import { total } from "./total.js";

function orderSummary() {
  subtotal();
  total();
}

export { orderSummary };
