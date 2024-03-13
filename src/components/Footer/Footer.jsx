import "../Footer/Footer.css";
import { NavLink } from "react-router-dom";
import githubLogo from "../../images/github.svg";
import linkedInLogo from "../../images/linkedin-rounded-svgrepo-com.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">© 2024 Supersite, Powered by News API</p>
      <div className="footer__item-wrapper item-wrapper">
        <NavLink to="/">Home</NavLink>
        <NavLink to="https://tripleten.com/">Tripleten</NavLink>
        <NavLink to="/">
          <img src={githubLogo} alt="" />
        </NavLink>
        <NavLink to="https://www.linkedin.com/in/angel-baez-099598185/">
          <img src={linkedInLogo} alt="" />
        </NavLink>
      </div>
    </footer>
  );
};
export default Footer;
