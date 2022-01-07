import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <a className="navbar-logo" href="/">
        Ultrasound Assistant
      </a>
      <ul className="navbar-links">
        <li>
          <NavLink className="navbar-link" to="/">
            tirads
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/links">
            links
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/about">
            about
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
