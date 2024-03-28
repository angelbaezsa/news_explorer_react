import React from "react";
import "./Main.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader.jsx";
import cardList from "../../utils/utils.js";

const Main = ({ isLoading, searchResults, savedNews }) => {
  return (
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
  );
};

export default Main;
