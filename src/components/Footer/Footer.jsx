import "./Footer.css";

import { NavLink } from "react-router-dom";

import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

import githubLogo from "../../images/github.svg";

// import linkedInLogo from "../../images/linkedin-rounded-svgrepo-com.svg";
import facebookLogo from "../../images/facebook_icon.svg";

const Footer = () => {
  const location = useLocation();
  return location.pathname === "/" ? (
    <footer className="footer">
      <p className="footer__text">© 2021 Supersite, Powered by News API</p>
      <div className="footer__item-wrapper item-wrapper">
        <div className="footer__item-container">
          <NavLink className="footer__item" to="/">
            Home
          </NavLink>

          <NavLink className="footer__item" to="https://tripleten.com/">
            Practicum
          </NavLink>
        </div>
        <div className="footer__icon-container">
          <NavLink to="/">
            <img
              className="footer__icon-github footer__icon-github"
              src={githubLogo}
              alt="logo"
            />
          </NavLink>

          <a href="https://www.linkedin.com/in/angel-baez-099598185/">
            <img
              className="footer__icon-linkedin footer__icon-linkedin"
              src={facebookLogo}
              alt="logo"
            />
          </a>
        </div>
      </div>
    </footer>
  ) : (
    <footer className="footer">
      <p className="footer__text">© 2021 Supersite, Powered by News API</p>
      <div className="footer__item-wrapper item-wrapper">
        <div className="footer__item-container">
          <NavLink className="footer__item" to="/">
            Home
          </NavLink>

          <NavLink className="footer__item" to="https://tripleten.com/">
            Practicum
          </NavLink>
        </div>
        <div className="footer__icon-container">
          <NavLink to="/">
            <img
              className="footer__icon footer__icon-github"
              src={githubLogo}
              alt="logo"
            />
          </NavLink>

          <a href="https://www.linkedin.com/in/angel-baez-099598185/">
            <img
              className="footer__icon footer__icon-linkedin"
              src={facebookLogo}
              alt="logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
