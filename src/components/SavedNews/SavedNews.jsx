import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader.jsx";

import Footer from "../Footer/Footer.jsx";

import cardListArray from "../../utils/utils";

import Main from "../Main/Main.jsx";

const SavedNews = () => (
  <>
    <SavedNewsHeader />
    <Main searchResults={cardListArray} />
    <Footer />
  </>
);

export default SavedNews;
