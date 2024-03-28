import { useState } from "react";
import "./SavedNewsHeader.css";
import cardListArray from "../../utils/utils";

const SavedNewsHeader = () => {
  const renderKeywords = () => {
    const keywordCount = cardListArray.length;
    if (keywordCount === 0) {
      return "No keywords";
    } else if (keywordCount === 1) {
      return cardListArray[0].title;
    } else if (keywordCount === 2) {
      return `${cardListArray[0].title} and ${cardListArray[1].title}`;
    } else {
      const otherCount = keywordCount - 2;
      return `${cardListArray[0].title}, ${cardListArray[1].title}, and ${otherCount} other`;
    }
  };

  return (
    <div className="saved-news__header">
      <p className="saved-news__header-title">Saved articles</p>
      <h2 className="saved-news__header-subtitle">
        Elize, You have {cardListArray.length} saved articles
      </h2>
      <p className="saved-news__keywords">
        By keywords: {<strong>{renderKeywords()}</strong>}
      </p>
    </div>
  );
};

export default SavedNewsHeader;
