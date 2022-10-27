import React from "react";
import Header from "../Header/Header";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../StateAPI/StateProvider";
import "./Checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div>
      <div className="header_container">
        <Header />
      </div>
      <div className="checkout">
        <div className="checkout_left">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492688_.jpg"
            alt="checkout ad"
            className="checkout_ad"
          />
          {basket?.length === 0 ? (
            <div>
              <h2>Your Shopping Basket is empty</h2>
              <p>
                You have no items in your basket. To buy one or more items,
                click "Add to basket" next to the item
              </p>
            </div>
          ) : (
            <div>
              <h2 className="checkout_title">Your Shopping Basket</h2>
              {basket.map((item) => (
                <CheckoutProduct
                  key={item.productId}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
        {basket.length > 0 && (
          <div className="checkout_right">
            <Subtotal />
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
