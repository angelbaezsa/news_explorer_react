import "../Footer/Footer.css";
import { NavLink, Link } from "react-router-dom";
import githubLogo from "../../images/github.svg";
import linkedInLogo from "../../images/linkedin-rounded-svgrepo-com.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">© 2024 Supersite, Powered by News API</p>
      <div className="footer__item-wrapper item-wrapper">
        <div className="footer__item-container item-container">
          <NavLink className="footer__item" to="/">
            Home
          </NavLink>

          <NavLink
            className="footer__item icon-container"
            to="https://tripleten.com/"
          >
            Tripleten
          </NavLink>
        </div>
        <div className="footer__icon-container">
          <NavLink to="/">
            <img className="footer__icon icon-github" src={githubLogo} alt="" />
          </NavLink>

          <a href="https://www.linkedin.com/in/angel-baez-099598185/">
            <img
              className="footer__icon icon-linkedin"
              src={linkedInLogo}
              alt=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
