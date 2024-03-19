import { useCallback, useContext, useState } from "react";
import "./NewsCard.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function NewsCard({ item, onSignIn }) {
  console.log(item);
  const location = useLocation();
  const isSavedNewsLocation = location.pathname === "/saved-news";
  const isHomeLocation = location.pathname === "/";
  const [user, setUser] = useState(false);

  return (
    <div className="card">
      {location.pathname === "/saved-news" ? (
        <div className="card__button-wrapper">
          <span htmlFor="" className="card__keyword-label card__button">
            Photography
          </span>
          <div>
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

      <img
        className="card_image"
        src={
          "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70"
        }
        alt={`illustration of ${item.publisher}`}
        // onClick={() => {
        //   onClickedCard(item);
        // }}
      />
      <div className="card__content">
        <div>
          <p className="card__date">{item.date}</p>
        </div>
        <div className="card__title-wrapper">
          <p className="card__title">{item.title}</p>
        </div>
        <div className="card__text-wrapper">
          <p className="card__text">{item.article}</p>
        </div>
        <div className="card__publisher-wrapper">
          <p className="card__publisher">{item.publisher}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
