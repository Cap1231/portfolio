import React, { useState } from "react";
import Skill from "./skill";
import Workstyle from "./workstyle";
import Contact from "./contact";

const Work = () => {
  const [props, setCount] = useState({ transform: "translateX(0%)" });
  // let startX = 0;
  const [startX, setPosition] = useState(0);

  const moveLeft = () => {
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

  const hadndleTouchStart = event => {
    // startX = event.touches[0].clientX;
    setPosition(event.touches[0].clientX);
  };

  const hadndleTouchEnd = event => {
    const endX = event.changedTouches[0].clientX;
    const offsetX = endX - startX;

    if (offsetX < -50) {
      moveRight();
    } else if (offsetX > 50) {
      moveLeft();
    }
  };

  return (
    <div className='wrap-work'>
      <div className='K-flex'>
        <div
          className='slider'
          style={props}
          onTouchStart={hadndleTouchStart}
          onTouchEnd={hadndleTouchEnd}
        >
          <Workstyle />
        </div>
        <div
          className='slider'
          style={props}
          onTouchStart={hadndleTouchStart}
          onTouchEnd={hadndleTouchEnd}
        >
          <Skill />
        </div>
        <div
          className='slider'
          style={props}
          onTouchStart={hadndleTouchStart}
          onTouchEnd={hadndleTouchEnd}
        >
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

export default Work;
