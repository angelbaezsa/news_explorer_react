import { useState } from "react";
import "./Header.css";

const Header = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  return (
    <div className="header">
      <form className="header__form search-form" onSubmit={onSearch}>
        <h1 className="header__title title">What's going on in the world?</h1>
        <h3 className="header__sub-title sub-title">
          Find the latest news on any topic and save them in your personal
          account.
        </h3>
        <div className="form-wrapper">
          <input
            type="search"
            placeholder="Enter topic"
            className="search-bar"
          />
          <button className="form__submit-button submit-button" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
export default Header;
