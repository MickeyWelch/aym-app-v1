import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Manual from "./pages/Manual/Manual";
import Sudo from "./pages/Sudo/Sudo";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/manual">
          <Manual />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/sudo">
          <Sudo />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </>
  );
}

export default App;
