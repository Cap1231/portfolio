import React, { useContext } from "react";
import { NavContext } from "../App";

const Design2 = () => {
  const navContext = useContext(NavContext);
  console.log(navContext);
  const style = {
    color: "white",
    display: "block",
    background: "lightblue",
    width: "100px",
    height: "50px"
    // margin: "10px",
  };
  return (
    <div>
      <button style={style} onClick={() => navContext.dispatch("increment")}>
        Increment
      </button>
      <button style={style} onClick={() => navContext.dispatch("decrement")}>
        Decrement
      </button>
      <button style={style} onClick={() => navContext.dispatch("reset")}>
        Reset
      </button>
    </div>
  );
};

export default Design2;
