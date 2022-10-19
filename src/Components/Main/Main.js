import React from "react";
import Header from "../Header/Header";
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
      </div>
    </div>
  );
}

export default Main;
