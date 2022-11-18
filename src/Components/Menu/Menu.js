import "./Menu.css";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <div className="menu-links">
        <NavLink
          //   onClick={() => toggleBurgerMenu()}
          className="menu-link"
          to="/"
        >
          TIRADS
        </NavLink>

        <NavLink
          //   onClick={() => toggleBurgerMenu()}
          className="menu-link"
          to="/tireoid_volume"
        >
          Объем щитовидной железы
        </NavLink>

        <NavLink
          //   onClick={() => toggleBurgerMenu()}
          className="menu-link"
          to="/prostate_volume"
        >
          Объем простаты
        </NavLink>

        <NavLink
          //   onClick={() => toggleBurgerMenu()}
          className="menu-link"
          to="/bladder_volume"
        >
          Объем мочевого пузыря
        </NavLink>

        <NavLink
          //   onClick={() => toggleBurgerMenu()}
          className="menu-link"
          to="/body_mass_index"
        >
          Индекс массы тела
        </NavLink>
        <NavLink
          //   onClick={() => toggleBurgerMenu()}
          className="menu-link"
          to="/body_surface_area"
        >
          Площадь поверхности тела
        </NavLink>
        <NavLink
          //   onClick={() => toggleBurgerMenu()}
          className="menu-link"
          to="/links"
        >
          Ссылки
        </NavLink>

        <NavLink
          //   onClick={() => toggleBurgerMenu()}
          className="menu-link"
          to="/about"
        >
          О приложении
        </NavLink>
      </div>
    </div>
  );
}

export default Menu;
