import React, { useState } from "react";
import Skill from "./skill";
import Workstyle from "./workstyle";
import Contact from "./contact";
import MediaQuery from "react-responsive";

const SmartPhoneBtn = props => {
  const { moveLeft, moveRight } = props;
  return (
    <React.Fragment>
      <button className='btn-left' onClick={moveLeft}>
        <i className='fas fa-angle-left'></i>
      </button>
      <button className='btn-right' onClick={moveRight}>
        <i className='fas fa-angle-right'></i>
      </button>
    </React.Fragment>
  );
};

const PCBtn = props => {
  const { moveLeft, moveRight } = props;
  return (
    <React.Fragment>
      <button className='btn-left' onClick={moveLeft}>
        <i className='fas fa-angle-left fa-3x'></i>
      </button>
      <button className='btn-right' onClick={moveRight}>
        <i className='fas fa-angle-right  fa-3x'></i>
      </button>
    </React.Fragment>
  );
};

const Work = () => {
  const [props, setCount] = useState({ transform: "translateX(0%)" });
  const [start, setStart] = useState({ x: 0, y: 0 });
  // const [end, setEnd] = useState({ x: 0, y: 0 });

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

  const handleTouchStart = event => {
    setStart({
      x: event.touches[0].clientX,
      y: event.touches[0].clientY
    });
  };

  const handleTouchEnd = event => {
    const endX = event.changedTouches[0].clientX;
    const offsetX = endX - start.x;
    // setEnd({
    //   x: event.changedTouches[0].clientX,
    //   y: event.changedTouches[0].clientY
    // });

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
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Workstyle />
        </div>
        <div
          className='slider'
          style={props}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Skill />
        </div>
        <div
          className='slider'
          style={props}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Contact />
        </div>
      </div>

      <MediaQuery query='(max-width: 767px)'>
        <SmartPhoneBtn moveLeft={moveLeft} moveRight={moveRight} />
      </MediaQuery>
      <MediaQuery query='(min-width: 768px)'>
        <PCBtn moveLeft={moveLeft} moveRight={moveRight} />
      </MediaQuery>

      <svg width='100%' height='100%'>
        <defs>
          <linearGradient id='Gradient01'>
            <stop offset='20%' stopColor='#39F' />
            <stop offset='90%' stopColor='#F3F' />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Work;
