import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <a className="navbar-logo" href="#">
        Ultrasound Assistant
      </a>
      <ul className="navbar-links">
        <li>
          <a className="navbar-link" href="#">
            tirads
          </a>
        </li>
        <li>
          <a className="navbar-link" href="#">
            links
          </a>
        </li>
        <li>
          <a className="navbar-link" href="#">
            aboute
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
