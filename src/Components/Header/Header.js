import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

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
        <div className="header_search">
          <input type="text" className="header_searchInput" />
          <SearchIcon className="header_searchIcon" />
        </div>        
        <div className="header_nav">          
          <Link to="/login" className="header_link">
            <div className="header_option">
              <span className="header_optionLine1">Hello Cris</span>
              <span className="header_optionLine2">Sign In</span>
            </div>
          </Link>          
          <Link to="/" className="header_link">
            <div className="header_option">
              <span className="header_optionLine1">Returns</span>
              <span className="header_optionLine2">& Orders</span>
            </div>
          </Link>          
          <Link to="/" className="header_link">
            <div className="header_option">
              <span className="header_optionLine1">Your</span>
              <span className="header_optionLine2">Prime</span>
            </div>
          </Link>          
          <Link to="/checkout" className="header_link">
            <div className="header_optionBasket">              
              <ShoppingBasketIcon />              
              <span className="header_optionLine2 header_basketCount">0</span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
