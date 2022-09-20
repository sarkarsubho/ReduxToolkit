import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./nav.css"

export const Navbar = () => {
  const items =useSelector(state=>state.cart)
  return <div className="nav">

    <span className="logo"> Redux Toolkit</span>
    <div>
      <Link  className="navlink" to="/">Home</Link>
      <Link className="navlink" to="/cart">Cart</Link>
        
    </div>
    <span className="cartCount">
          CartItem = {items.length}
    </span>
  </div>;
};
