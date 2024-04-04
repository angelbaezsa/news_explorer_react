import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

import "./NewsCardList.css";

import React, { useState, useEffect } from "react";
import NewsCard from "../NewsCard/NewsCard.jsx";
import cardListArray from "../../utils/utils";

const NewsCardList = ({ cardList, onDelete, onSignIn }) => {
  console.log(onDelete); // method will be useful later
  const location = useLocation();
  const [numberOfCards, setNumberOfCards] = useState(3);
  const [hideShowMoreButton, setHideShowMoreButton] = useState(true);
  const firstThreeCards = cardList.slice(0, numberOfCards);

  useEffect(() => {
    if (numberOfCards >= cardList.length) {
      setHideShowMoreButton(true);
    } else {
      setHideShowMoreButton(false);
    }
  }, [numberOfCards, cardList.length]);

  const showMore = () => {
    setNumberOfCards(numberOfCards + 3);
  };

  return location.pathname === "/" ? (
    <>
      {/* <h2 className="main__title">Search results</h2> */}
      <div className="cardlist__card-container">
        {firstThreeCards.map((item, index) => (
          <NewsCard onSignIn={onSignIn} item={item} key={index} />
        ))}
      </div>
      {!hideShowMoreButton && (
        <button onClick={showMore} className="cardlist__show-more_button">
          Show more
        </button>
      )}
    </>
  ) : (
    <>
      <div className="cardlist__card-container">
        {cardListArray.map((item, index) => (
          <NewsCard onSignIn={onSignIn} item={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default NewsCardList;
