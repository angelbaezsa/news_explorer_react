import "./App.css";

import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/ About";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import { newsApi } from "../../utils/NewsApi.js";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [didSearch, setDidSearch] = useState(false);

  const handleSearch = (keyword) => {
    setDidSearch(true);
    if (keyword.trim() !== "") {
      setIsLoading(true);
      console.log("this is the search result: ", keyword);
      newsApi.getNews(keyword).then((response) => {
        if (response.length !== 0) {
          console.log(response.articles);
          setSearchResult(response.articles);
          console.log(searchResult);
          setIsLoading(false);
        }
      });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };
  const handleOpenModal = (modal) => {
    setOpenModal(modal);
    document.addEventListener("keydown", handleKeyDown);
  };
  const handleCloseModal = () => {
    setOpenModal("");
    document.removeEventListener("keydown", handleKeyDown);
  };

  return (
    <div className="page">
      <NavBar onHome={"hello"} onSignIn={() => handleOpenModal("login")} />
      <Switch>
        <Route exact path={"/"}>
          <Header onSearch={handleSearch} />
          {didSearch ? (
            <Main searchResults={searchResult} isLoading={isLoading} />
          ) : null}
          <About />
          <Footer />
        </Route>
        <Route path={"/saved-news"}>
          <SavedNews />
        </Route>
      </Switch>

      {openModal === "login" && (
        <LoginModal
          onSignUp={() => setOpenModal("register")}
          onCloseModal={handleCloseModal}
        />
      )}
      {openModal === "register" && (
        <RegisterModal
          onSignIn={() => setOpenModal("login")}
          onCloseModal={handleCloseModal}
        />
      )}
      {openModal === "confirmation" && <></>}
    </div>
  );
}

export default App;
