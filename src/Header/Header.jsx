import React from 'react'
import "../App.css";
import { Link } from "react-router-dom";


function header() {
  return (
    <div>      <header className="header">
    <div className="header_left">
      <Link to="/" className="shop">Shop</Link>
    </div>
    <div className="header_right">
      <Link to="/cart" className="material-icons cart">shopping_cart</Link>
      <Link to="/login" className="material-icons user-profile">person</Link>
      <div className="material-icons logout">logout</div>
    </div>
  </header></div>
  )
}

export default header