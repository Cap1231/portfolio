import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Design1 from "./components/Design1";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/design1' component={Design1} />
      </Switch>
    </Router>
  );
};

export default App;
