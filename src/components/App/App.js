import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import { newsApi } from "../../utils/NewsApi";
import NavBar from "../NavBar/NavBar.jsx";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import About from "../About/About.jsx";
import Footer from "../Footer/Footer.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [didSearch, setDidSearch] = useState(false);

  const handleSearch = (keyword) => {
    setDidSearch(true);
    if (keyword.trim() !== "") {
      setIsLoading(true);
      // console.log("this is the search result: ", keyword);
      newsApi.getNews(keyword).then((response) => {
        if (response.length !== 0) {
          // console.log(response.articles);
          setSearchResult(response.articles);
          // console.log(searchResult);
          setIsLoading(false);
        }
      });
    }
  };
  const handleCloseModal = () => {
    setOpenModal("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleCloseModal();
      document.removeEventListener("keydown", handleKeyDown);
    }
  };

  const handleSignIn = () => {
    setOpenModal("login");
  };
  const handleOpenModal = (modal) => {
    setOpenModal(modal);
    document.addEventListener("keydown", handleKeyDown);
  };

  return (
    <div className="page">
      <NavBar onHome={"hello"} onSignIn={() => handleOpenModal("login")} />
      <Switch>
        <Route exact path={"/"}>
          <Header onSearch={handleSearch} />
          {didSearch ? (
            <Main
              onSignIn={handleSignIn}
              searchResults={searchResult}
              isLoading={isLoading}
            />
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
