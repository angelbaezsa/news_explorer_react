import "./NavBar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import toggleButtonClosed from "../../images/menu.svg";
import toggleButtonOpen from "../../images/close.svg";

const NavBar = ({ onHome, onSignIn }) => {
  // Receive props as an object
  const [isHome, setIsHome] = useState(false); // Use useState correctly
  const [isToggle, setIsToggle] = useState(false);

  const handleToggleMenu = () => {
    setIsToggle(!isToggle);
  };

  return (
    <nav className={isToggle ? "navbar_black" : "navbar"}>
      <NavLink to="/">
        <h3 className="navbar__logo">NewsExplorer</h3>
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
          <NavLink className="navbar__button button-type-home" to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <button
            className="navbar__button button-type-signin"
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
  );
};

export default NavBar;
