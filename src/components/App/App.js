import "./App.css";

import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/ About";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews.jsx";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleSearch = () => {
    setIsLoading(true);
  };
  return (
    <div className="page">
      <NavBar onHome={"hello"} onSignIn={"hello"} />
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
    </div>
  );
}

export default App;
