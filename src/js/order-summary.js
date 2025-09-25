import { subtotal } from "./subTotal.js";
import { total } from "./total.js";

function orderSummary() {
  subtotal();
  total();
}

export { orderSummary };
