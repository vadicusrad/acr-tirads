import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const toggleBurgerMenu = () => {
    setBurgerIsOpen(!burgerIsOpen);
  };
  return (
    <div className="navbar">
      <a className="navbar-logo" href="/">
        Ultrasound Assistant
      </a>
      <ul className="navbar-links">
        <li>
          <NavLink className="navbar-link" to="/">
            TIRADS
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/links">
            Ссылки
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/about">
            about
          </NavLink>
        </li>
      </ul>
      <div className="navbar-burger" onClick={() => toggleBurgerMenu()}>
        <span></span>
      </div>
      <div
        className={`navbar-burger-menu ${
          burgerIsOpen ? "navbar-burger-menu-open" : ""
        }`}
      >
        <ul className="navbar-burger-links">
          <li>
            <NavLink
              onClick={() => toggleBurgerMenu()}
              className="navbar-burger-link"
              to="/"
            >
              TIRADS
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => toggleBurgerMenu()}
              className="navbar-burger-link"
              to="/links"
            >
              Ссылки
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => toggleBurgerMenu()}
              className="navbar-burger-link"
              to="/about"
            >
              about
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
