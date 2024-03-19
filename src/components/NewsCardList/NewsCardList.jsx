import "./NewsCardList.css";
import React, { useState, useEffect } from "react";
import NewsCard from "../NewsCard/NewsCard.jsx";

const NewsCardList = ({ cardList }) => {
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
    setNumberOfCards(cardList.length);
  };

  return (
    <>
      <h2 className="main__title">Search results</h2>
      <div className="main__card-container card-container">
        {firstThreeCards.map((item, index) => (
          <NewsCard item={item} key={index} />
        ))}
      </div>
      {!hideShowMoreButton && (
        <button
          onClick={showMore}
          className="main__show-more_button show-more_button"
        >
          Show more
        </button>
      )}
    </>
  );
};

export default NewsCardList;
