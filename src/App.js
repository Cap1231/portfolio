import React from "react";
import "./App.css";
import Name from "./components/name";
import Work from "./components/work";
import Header from "./components/header";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Name />
        <Work />
      </main>
    </React.Fragment>
  );
};

export default App;
