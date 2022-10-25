import React from "react";
import Header from "../Header/Header";
import Product from "../Product/Product";
import "./Main.css";

function Main() {
  return (
    <div>
      <div className="header_container">
        <Header />
      </div>
      <div className="home">
        <img
          src="https://m.media-amazon.com/images/I/61IlupYtztL._SX1500_.jpg"
          className="home_image"
          alt="amazon_banner"
        />
        <div className="home_row">
          <Product
            id="12313"
            title="Nintendo Switch – OLED Model w/ White Joy-Con"
            price={12.34}
            rating={4}
            image="https://m.media-amazon.com/images/I/61dYrzvBLbL._AC_UL320_.jpg"
          />
          <Product
            id="13123"
            title="Nintendo Switch – OLED Model w/ White Joy-Con"
            price={12.34}
            rating={4}
            image="https://m.media-amazon.com/images/I/61dYrzvBLbL._AC_UL320_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="12312"
            title="Nintendo Switch – OLED Model w/ White Joy-Con"
            price={12.34}
            rating={4}
            image="https://m.media-amazon.com/images/I/61dYrzvBLbL._AC_UL320_.jpg"
          />
          <Product
            id="13123"
            title="Nintendo Switch – OLED Model w/ White Joy-Con"
            price={12.34}
            rating={4}
            image="https://m.media-amazon.com/images/I/61dYrzvBLbL._AC_UL320_.jpg"
          />
          <Product
            id="1233"
            title="Nintendo Switch – OLED Model w/ White Joy-Con"
            price={12.34}
            rating={4}
            image="https://m.media-amazon.com/images/I/61dYrzvBLbL._AC_UL320_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="123"
            title="Nintendo Switch – OLED Model w/ White Joy-Con"
            price={12.34}
            rating={4}
            image="https://m.media-amazon.com/images/I/61dYrzvBLbL._AC_UL320_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
