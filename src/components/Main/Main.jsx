import "./Main.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader.jsx";
import cardList from "../../utils/utils.jsx";
const Main = ({ isLoading }) => {
  return (
    <div className="main">
      {isLoading ? <Preloader /> : <NewsCardList cardList={cardList} />}
    </div>
  );
};
export default Main;
