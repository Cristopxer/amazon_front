import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="header">
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
            className="header_logo"
          />
        </Link>
        <input type="text" className="header_searchInput" />
      </nav>      
    </div>
  );
}

export default Header;
