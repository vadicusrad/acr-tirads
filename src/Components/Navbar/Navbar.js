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
      <ul className="navbar-links">
        <li>
          <NavLink className="navbar-link" to="/">
            TIRADS
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/tireoid_volume">
            Обьем щитовидной железы
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/prostate_volume">
            Объем простаты
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/bladder_volume">
            Объем мочевого пузыря
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/body_mass_index">
            Индекс массы тела
          </NavLink>
        </li>

        <li>
          <NavLink className="navbar-link" to="/links">
            Ссылки
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
            <Link
              onClick={() => toggleBurgerMenu()}
              className="navbar-burger-link"
              to="/"
            >
              TIRADS
            </Link>
          </li>
          <li>
            <Link
              onClick={() => toggleBurgerMenu()}
              className="navbar-burger-link"
              to="/tireoid_volume"
            >
              Обьем щитовидной железы
            </Link>
          </li>
          <li>
            <Link
              onClick={() => toggleBurgerMenu()}
              className="navbar-burger-link"
              to="/prostate_volume"
            >
              Объем простаты
            </Link>
          </li>
          <li>
            <Link
              onClick={() => toggleBurgerMenu()}
              className="navbar-burger-link"
              to="/bladder_volume"
            >
              Объем мочевого пузыря
            </Link>
          </li>
          <li>
            <Link
              onClick={() => toggleBurgerMenu()}
              className="navbar-burger-link"
              to="/body_mass_index"
            >
              Индекс массы тела
            </Link>
          </li>
          <li>
            <Link
              onClick={() => toggleBurgerMenu()}
              className="navbar-burger-link"
              to="/links"
            >
              Ссылки
            </Link>
          </li>
          <li>
            <Link
              onClick={() => toggleBurgerMenu()}
              className="navbar-burger-link"
              to="/about"
            >
              О приложении
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
