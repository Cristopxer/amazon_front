import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateAPI/StateProvider";
import {getBasketTotal} from "../StateAPI/Reducer"
import "./Subtotal.css";

function Subtotal() {
    const [{basket}] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
