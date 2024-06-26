import { useState } from "react";
import "./Header.css";

const Header = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  return (
    <header className="header">
      <form
        className="header__form header__search-form"
        onSubmit={(event) => {
          event.preventDefault();
          onSearch(search);
        }}
      >
        <h1 className="header__title">What's going on in the world?</h1>
        <h3 className="header__sub-title">
          Find the latest news on any topic and save them in your personal
          account.
        </h3>
        <div className="header__form-wrapper">
          <input
            type="search"
            placeholder="Enter topic"
            className="search-bar"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button className="search-form__submit-button" type="submit">
            Search
          </button>
        </div>
      </form>
    </header>
  );
};
export default Header;
