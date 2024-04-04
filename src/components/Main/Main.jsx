import React from "react";
import "./Main.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader.jsx";
import cardListArray from "../../utils/utils.js";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min.js";
import notFoundImage from "../../images/notfound.svg";

const Main = ({ isLoading, searchResults, savedNews, onSignIn, onDelete }) => {
  const location = useLocation();
  return location.pathname === "/" ? (
    <main className="main">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {searchResults.length === 0 ? (
            <div className="not-found-wrapper">
              {/* <h2 className="main__title">Search results</h2> */}
              <img
                className="main__not-found_image"
                src={notFoundImage}
                alt="not found ilustration"
              />
              <h2 className="main__not-found-title">Nothing found</h2>
              <p className="main__nothing-found-text">
                Sorry, but nothing matched your search terms.
              </p>
            </div>
          ) : (
            <>
              <h2 className="main__title">Search results</h2>
              <NewsCardList onSignIn={onSignIn} cardList={searchResults} />
            </>
          )}
        </>
      )}
    </main>
  ) : (
    <main className="main">
      <NewsCardList
        onDelete={onDelete}
        onSignIn={onSignIn}
        cardList={cardListArray}
      />
    </main>
  );
};

export default Main;
