import "./NavBar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import toggleButtonClosed from "../../images/menu.svg";
import toggleButtonOpen from "../../images/close.svg";
import toggleButtonClosedBlack from "../../images/menu_black.svg";
// import toggleButtonOpenBlack from "../../images/close_black.svg";
import icon from "../../images/logout.svg";

const NavBar = ({ onSignIn, onSignOut }) => {
  // Receive props as an object

  const [isToggle, setIsToggle] = useState(false);
  const location = useLocation();

  const handleToggleMenu = () => {
    setIsToggle(!isToggle);
  };

  return location.pathname === "/" ? (
    <nav className={`${isToggle ? "navbar__black" : "navbar"} `}>
      <NavLink to="/">
        <h3 className="navbar__logo light-font">NewsExplorer</h3>
      </NavLink>

      <button
        onClick={handleToggleMenu}
        className={`navbar__toggle-button toggle-button ${
          isToggle
            ? "navbar__toggle-button_open"
            : "navbar__toggle-button_closed"
        }`}
      >
        <img
          src={`${isToggle ? toggleButtonOpen : toggleButtonClosed}`}
          alt="button"
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
            className="light-font navbar__button navbar__signin-button"
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
              <li className="toggle-menu__item">
                <NavLink to="/saved-news" className="toggle-menu__link">
                  Saved news
                </NavLink>
              </li>
              <li className="toggle-menu__item">
                <button
                  onClick={() => {
                    onSignIn();
                    setIsToggle(!isToggle);
                  }}
                  className="toggle-menu__button"
                >
                  Sign in
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </nav>
  ) : (
    <nav className={`${isToggle ? "navbar__black" : "navbar__saved-news"} `}>
      <NavLink to="/">
        <h3
          className={`navbar__logo  ${isToggle ? `light-font` : `dark-font`}`}
        >
          NewsExplorer
        </h3>
      </NavLink>

      <button
        onClick={handleToggleMenu}
        className={`navbar__toggle-button toggle-button ${
          isToggle
            ? "navbar__toggle-button_open"
            : "navbar__toggle-button_closed"
        }`}
      >
        <img
          src={`${isToggle ? toggleButtonOpen : toggleButtonClosedBlack}`}
          alt="button"
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
            className="dark-font navbar__button navbar__signout-button"
            onClick={onSignOut}
          >
            {/* here goes the user.name*/}
            Elize
            <img className="navbar__button-icon" src={icon} alt="icon" />
          </button>
        </li>
      </ul>
      {isToggle ? (
        <div className="toggle-menu_modal">
          <div className="toggle-menu-wrapper">
            <ul className="navbar__toggle-menu toggle-menu">
              <li className="toggle-menu__item">
                <NavLink to="/" className="toggle-menu__link">
                  Home
                </NavLink>
              </li>
              <li className="toggle-menu__item">
                <button className="toggle-menu__button">Sign out</button>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default NavBar;
