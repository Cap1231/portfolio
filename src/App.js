import React from "react";
import "./App.css";
import Name from "./components/name";
import Work from "./components/work";

const App = () => {
  return (
    <React.Fragment>
      <Name />
      <Work />
    </React.Fragment>
  );
};

export default App;
