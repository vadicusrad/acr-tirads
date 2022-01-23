import "./Footer.css";
import { NavLink } from "react-router-dom";
import TelegramIcon from "../Icons/TelegramIcon";
import EmailIcon from "../Icons/EmailIcon";
import GitHubIcon from "../Icons/GitHubIcon";
function Footer() {
  return (
    <div className="footer">
      <ul className="footer-nav">
        {/* <li>
          <NavLink className="navbar-link" to="/">
            TIRADS
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/tireoid_volume">
            Обьем щитовидной железы
          </NavLink>
        </li> */}
        <li>
          <NavLink className="navbar-link" to="/links">
            Ссылки
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/about">
            О приложении
          </NavLink>
        </li>
      </ul>

      <ul className="footer-contacts">
        <li>
          <a
            target="_blank"
            rel="nofollow noopener noreferrer"
            href="https://t.me/Vadicus"
          >
            <TelegramIcon />
          </a>
        </li>
        <li>
          <a href="mailto:vadicus.rad@yandex.ru">
            <EmailIcon />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="nofollow noopener noreferrer"
            href="https://github.com/vadicusrad"
          >
            <GitHubIcon />
          </a>
        </li>
      </ul>

      <div className="footer-info">
        <p>
          Made with hate and love by{" "}
          <a
            target="_blank"
            rel="nofollow noopener noreferrer"
            href="https://t.me/Vadicus"
          >
            Vadicus
          </a>
        </p>
        <p>2021 - 2022</p>
      </div>
    </div>
  );
}

export default Footer;
