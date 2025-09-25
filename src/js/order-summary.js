import { subTotal } from "./subtotal.js";
import { total } from "./total.js";

function orderSummary() {
  subTotal();
  total();
}

export { orderSummary };
