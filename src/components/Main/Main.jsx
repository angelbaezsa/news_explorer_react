import React from "react";
import "./Main.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader.jsx";
import cardListArray from "../../utils/utils.js";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min.js";

const Main = ({ isLoading, searchResults, savedNews }) => {
  const location = useLocation();
  return location.pathname === "/" ? (
    <div className="main">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {searchResults.length === 0 ? (
            <>
              <h2 className="main__title">Search results</h2>
              <h3 className="main__not-found">
                Nothing found, try different keywords
              </h3>
            </>
          ) : (
            <>
              <h2 className="main__title">Search results</h2>
              <NewsCardList cardList={searchResults} />
            </>
          )}
        </>
      )}
    </div>
  ) : (
    <div className="main">
      <NewsCardList cardList={cardListArray} />
    </div>
  );
};

export default Main;
