import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import toggle from "../../helpers/toggler";

function Navbar() {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  // const toggleBurgerMenu = () => {
  //   setBurgerIsOpen(!burgerIsOpen);
  // };
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    return function () {
      setBurgerIsOpen(!burgerIsOpen);
    };
  }, []);
  console.log(burgerIsOpen);
  return (
    <div className="navbar">
      <a className="navbar-logo" href="/">
        Ultrasound Assistant
      </a>
      <NavLink
        onClick={() => {
          toggle(burgerIsOpen, setBurgerIsOpen);
          if (burgerIsOpen) {
            goBack();
          }
        }}
        className="navbar-menu-opener"
        to="/menu"
      >
        Выбрать инструмент
      </NavLink>

      <NavLink
        onClick={() => {
          toggle(burgerIsOpen, setBurgerIsOpen);
          if (burgerIsOpen) {
            goBack();
          }
        }}
        className="navbar-burger"
        to="/menu"
      >
        <span></span>
      </NavLink>
    </div>
  );
}

export default Navbar;
