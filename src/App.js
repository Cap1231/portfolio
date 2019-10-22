import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
// import ReactDOM from "react-dom";
import "./App.css";
import Skill from "./components/skill";
import Workstyle from "./components/workstyle";
import Contact from "./components/contact";

const Eyes = () => {
  const props = useSpring({
    from: { opacity: 0, transform: "rotateY(0deg)" },
    to: async (next, cancel) => {
      await next({ opacity: 1 });
      await next({ transform: "rotateY(180deg)" });
      await next({ transform: "rotateY(0deg)" });
      await next({ transform: "rotateY(180deg)" });
      await next({ opacity: 0 });
      // await next({ transform: "rotateY(0deg)" });
      // await next({ transform: "rotateY(180deg)" });
    },
    delay: "7000"
  });

  return (
    <animated.span className='eye' style={props}>
      <span role='img' aria-label='Eye'>
        👀
      </span>
    </animated.span>
  );
};

const Work = () => {
  const initPage = { transform: "translateX(0%)" };
  const [props, setCount] = useState(initPage);

  const moveLeft = () => {
    console.log("Clicked left");

    let transformVal = props.transform;

    if (transformVal === "translateX(-200%)") {
      transformVal = "translateX(-100%)";
    } else if (transformVal === "translateX(-100%)") {
      transformVal = "translateX(0%)";
    } else {
      transformVal = "translateX(-200%)";
    }
    setCount({ transform: transformVal });
  };

  const moveRight = () => {
    console.log("Clicked Right");

    let transformVal = props.transform;

    if (transformVal === "translateX(0%)") {
      transformVal = "translateX(-100%)";
    } else if (transformVal === "translateX(-100%)") {
      transformVal = "translateX(-200%)";
    } else {
      transformVal = "translateX(0%)";
    }

    setCount({ transform: transformVal });
  };

  return (
    <div className='wrap-work'>
      <div className='K-flex'>
        <div className='slider' style={props}>
          <Workstyle />
        </div>
        <div className='slider' style={props}>
          <Skill />
        </div>
        <div className='slider' style={props}>
          <Contact />
        </div>
      </div>

      <button className='btn-left' onClick={moveLeft}>
        <i className='fas fa-angle-left'></i>
      </button>
      <button className='btn-right' onClick={moveRight}>
        <i className='fas fa-angle-right'></i>
      </button>
    </div>
  );
};

const App = () => {
  const orange = "#F7A411";
  const props = useSpring({
    from: {
      left: "0%",
      top: "0%",
      width: "2%",
      height: "2%",
      background: orange
    },
    to: async next => {
      // while (1) {
      await next({
        left: "0%",
        top: "0%",
        width: "100%",
        height: "2%",
        background: orange
      });
      await next({
        left: "98%",
        top: "0%",
        width: "2%",
        height: "2%",
        background: orange
      });
      await next({
        left: "98%",
        top: "0%",
        width: "2%",
        height: "100%",
        background: orange
      });
      await next({
        left: "98%",
        top: "98%",
        width: "2%",
        height: "2%",
        background: orange
      });
      await next({
        left: "0%",
        top: "98%",
        width: "100%",
        height: "2%",
        background: orange
      });
      await next({
        left: "0%",
        top: "98%",
        width: "2%",
        height: "2%",
        background: orange
      });
      await next({
        left: "0%",
        top: "0%",
        width: "2%",
        height: "100%",
        background: orange
      });
      await next({
        left: "0%",
        top: "0%",
        width: "2%",
        height: "0%",
        background: orange
      });
    }
  });
  const styleName = useSpring({
    from: { opacity: 0, marginRight: "-100%" },
    to: { opacity: 1, marginRight: "0%" },
    delay: 10500,
    config: { duration: 1500 }
  });
  return (
    <React.Fragment>
      <div className='name'>
        <animated.div className='border-name' style={props}></animated.div>
        <Eyes />
        <animated.h1 style={styleName}>Tsubasa Yamaguchi</animated.h1>
        <div className='occupation'>Web developer</div>
      </div>
      <Work />
    </React.Fragment>
  );
};

export default App;
