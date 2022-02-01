import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
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

      <div className="navbar-menu-opener" onClick={() => toggleBurgerMenu()}>
        <span>Выбрать инструмент</span>
      </div>
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
              to="/tireoid_volume"
            >
              Объем щитовидной железы
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => toggleBurgerMenu()}
              className="navbar-burger-link"
              to="/prostate_volume"
            >
              Объем простаты
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => toggleBurgerMenu()}
              className="navbar-burger-link"
              to="/bladder_volume"
            >
              Объем мочевого пузыря
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => toggleBurgerMenu()}
              className="navbar-burger-link"
              to="/body_mass_index"
            >
              Индекс массы тела
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
              О приложении
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
