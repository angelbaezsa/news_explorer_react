// import { useState } from "react";
import "./SavedNewsHeader.css";
import cardListArray from "../../utils/utils";

const SavedNewsHeader = () => {
  const renderKeywords = () => {
    const keywordCount = cardListArray.length;
    if (keywordCount === 0) {
      return "No keywords";
    } else if (keywordCount === 1) {
      return cardListArray[0].source.name;
    } else if (keywordCount === 2) {
      return `${cardListArray[0].source.name} and ${cardListArray[1].source.name}`;
    } else {
      const otherCount = keywordCount - 2;
      return `${cardListArray[0].source.name}, ${cardListArray[1].source.name}, and ${otherCount} other`;
    }
  };

  return (
    <section className="saved-news__header">
      <p className="saved-news__header-title">Saved articles</p>
      <h1 className="saved-news__header-subtitle">
        Elize, You have {cardListArray.length} saved articles
      </h1>
      <p className="saved-news__keywords">
        By keywords: {<strong>{renderKeywords()}</strong>}
      </p>
    </section>
  );
};

export default SavedNewsHeader;
