import "./NavBar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import toggleButtonClosed from "../../images/menu.svg";
import toggleButtonOpen from "../../images/close.svg";
import toggleButtonClosedBlack from "../../images/menu_black.svg";
import toggleButtonOpenBlack from "../../images/close_black.svg";
import icon from "../../images/logout.svg";

const NavBar = ({ onHome, onSignIn, onSignOut }) => {
  // Receive props as an object

  const [isToggle, setIsToggle] = useState(false);
  const location = useLocation();

  const handleToggleMenu = () => {
    setIsToggle(!isToggle);
  };

  return location.pathname === "/" ? (
    <nav className={`${isToggle ? "navbar_black" : "navbar"} `}>
      <NavLink to="/">
        <h3 className="navbar__logo light-font">NewsExplorer</h3>
      </NavLink>

      <button
        onClick={handleToggleMenu}
        className={`navbar__toggle-button toggle-button ${
          isToggle ? "toggle-button_open" : "toggle-button_closed"
        }`}
      >
        <img
          src={`${isToggle ? toggleButtonOpen : toggleButtonClosed}`}
          alt=""
        />
      </button>

      <ul className="navbar__button-wrapper">
        <li>
          <NavLink
            className={`light-font navbar__button navbar__home-button ${
              location.pathname === "/" ? "navbar__home-button_selected" : null
            }`}
            to="/"
            exact
          >
            Home
          </NavLink>
        </li>
        <li>
          <button
            className="light-font navbar__button button-type-signin"
            onClick={onSignIn}
          >
            Signin
          </button>
        </li>
      </ul>
      {isToggle ? (
        <div className="toggle-menu_modal">
          <div className="toggle-menu-wrapper">
            <ul className="navbar__toggle-menu toggle-menu">
              <li className="toggle-menu_item">
                <NavLink to="/" className="toggle-menu__link">
                  Home
                </NavLink>
              </li>
              <li className="toggle-menu_item">
                <button className="toggle-menu__button">Sign in</button>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </nav>
  ) : (
    <nav className={`${isToggle ? "navbar_black" : "navbar__saved-news"} `}>
      <NavLink to="/">
        <h3 className="navbar__logo dark-font">NewsExplorer</h3>
      </NavLink>

      <button
        onClick={handleToggleMenu}
        className={`navbar__toggle-button toggle-button ${
          isToggle ? "toggle-button_open" : "toggle-button_closed"
        }`}
      >
        <img
          src={`${isToggle ? toggleButtonOpen : toggleButtonClosedBlack}`}
          alt=""
        />
      </button>

      <ul className="navbar__button-wrapper">
        <li>
          <NavLink
            className={`dark-font navbar__button navbar__home-button ${
              location.pathname === "/" ? "navbar__home-button_selected" : null
            }`}
            to="/"
            exact
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`dark-font navbar__button navbar__home-button ${
              location.pathname === "/saved-news"
                ? "navbar__saved-news-button_selected"
                : null
            }`}
            to="/"
            exact
          >
            saved articles
          </NavLink>
        </li>
        <li>
          <button
            className="dark-font navbar__button button-type-signout-dark"
            onClick={onSignOut}
          >
            {/* here goes the user.name*/}
            Elize
            <img className="navbar__button-icon" src={icon} alt="" />
          </button>
        </li>
      </ul>
      {isToggle ? (
        <div className="toggle-menu_modal">
          <div className="toggle-menu-wrapper">
            <ul className="navbar__toggle-menu toggle-menu">
              <li className="toggle-menu_item">
                <NavLink to="/" className="toggle-menu__link">
                  Home
                </NavLink>
              </li>
              <li className="toggle-menu_item">
                <button className="toggle-menu__button">Sign in</button>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default NavBar;
