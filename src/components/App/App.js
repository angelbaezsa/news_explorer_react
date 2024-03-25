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

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState("");
  const handleSearch = () => {
    setIsLoading(true);
  };

  const handleCloseModal = () => {
    setOpenModal("");
  };

  return (
    <div className="page">
      <NavBar onHome={"hello"} onSignIn={() => setOpenModal("login")} />
      <Switch>
        <Route exact path={"/"}>
          <Header onSearch={handleSearch} />
          <Main isLoading={isLoading} />
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
