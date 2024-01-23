import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/">Vending Machine</Link>
      <Link to="/cookies">Cookies</Link>
      <Link to="/chocolate">Chocolate</Link>
      <Link to="/icecream">Ice Cream</Link>
    </nav>
  );
}

export default NavBar;
