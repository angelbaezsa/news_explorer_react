import { useCallback, useContext, useState } from "react";
import "./NewsCard.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { formatDate } from "../../utils/utils.js";

function NewsCard({ item, onSignIn }) {
  const location = useLocation();

  const [user, setUser] = useState(false);

  return (
    <div className="card">
      {location.pathname === "/saved-news" ? (
        <div className="card__button-wrapper">
          <span htmlFor="" className="card__keyword-label card__button">
            Photography
          </span>
          <div className="card__option-wrapper">
            <button className="card__delete-button-banner card__button">
              delete article
            </button>
            <button className="card__delete-button card__button"></button>
          </div>
        </div>
      ) : (
        <div className="card__button-wrapper">
          <div className="save-button-wrapper">
            {user ? null : (
              <button className="card__signin-button card__button">
                Sign in to save articles
              </button>
            )}
            <button className="card__save-button card__button"></button>
          </div>
        </div>
      )}
      <div className="image-container">
        <img
          className="card__image"
          src={item.urlToImage}
          alt={`illustration of ${item.publisher}`}
          // onClick={() => {
          //   onClickedCard(item);
          // }}
        />
      </div>

      <div className="card__content">
        <div className="card__date-wrapper">
          <p className="card__date">{formatDate(item.publishedAt)}</p>
        </div>
        <div className="card__title-wrapper">
          <p className="card__title">{item.title}</p>
        </div>
        <div className="card__text-wrapper">
          <p className="card__text">{item.content}</p>
        </div>
        <div className="card__publisher-wrapper">
          <p className="card__publisher">{item.source.name}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
