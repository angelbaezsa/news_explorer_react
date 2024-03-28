import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import cardList from "../../utils/utils";
import cardListArray from "../../utils/utils";
import Main from "../Main/Main";
const SavedNews = () => {
  return (
    <>
      <SavedNewsHeader />
      <Main searchResults={cardListArray} />
      <Footer />
    </>
  );
};

export default SavedNews;
