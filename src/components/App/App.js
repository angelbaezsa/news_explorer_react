import "./App.css";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="page">
      <NavBar onHome={"hello"} onSignIn={"hello"} />
      <Switch>
        <Route path={"/"}>
          <Header onSearch={"addSearch function here"} />
          <Footer />
        </Route>
        <Route path={"/saved-news"}></Route>
      </Switch>
    </div>
  );
}

export default App;
