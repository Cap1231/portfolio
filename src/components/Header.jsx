import React, { useState, useContext } from "react";
import { useTransition, animated } from "react-spring";
import { Link } from "react-router-dom";
import { NavContext } from "../App";

const HamburgerIcon = () => (
  <svg width='35px' height='35px'>
    <g stroke='#f77911'>
      <line x1='0' y1='7.5' x2='35' y2='7.5' strokeWidth='5' />
      <line x1='0' y1='17.5' x2='35' y2='17.5' strokeWidth='5' />
      <line x1='0' y1='27.5' x2='35' y2='27.5' strokeWidth='5' />
    </g>
  </svg>
);

const Header = () => {
  const navContext = useContext(NavContext);
  console.log(navContext.val);
  // console.log({()=>navContext.dispatch("open")});
  const [isToggleOn, setToggle] = useState(true);
  const transitions = useTransition(isToggleOn, null, {
    // from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 }
  });

  const nav = {
    open: {
      clipPath: "circle(300px at 50% 50%)",
      WebkitClipPath: "circle(300px at 50% 50%)"
    },
    close: {
      clipPath: "circle(0px at 95% 5%)",
      WebkitClipPath: "circle(0px at 95% 5%)"
    }
  };
  const [navStyle, setNav] = useState(nav.close);

  // const navRef = useRef();
  const handleToggle = () => {
    if (isToggleOn) {
      setNav(nav.open);
    } else {
      setNav(nav.close);
    }
    setToggle(!isToggleOn);
  };

  window.addEventListener("scroll", () => {
    const screenHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollTop;
    if (scrollHeight >= screenHeight) {
      // グローバルな値で保持したい。redux?
      setHamb({ display: "block" });
      navContext.dispatch("open");
    }
  });

  const initHamb = navContext.val ? { display: "block" } : { display: "none" };

  const [hambStyle, setHamb] = useState(initHamb);

  return (
    <nav>
      <animated.div
        className='hamburger'
        style={hambStyle}
        onClick={handleToggle}
      >
        {transitions.map(({ item, key, props }) =>
          isToggleOn ? (
            <animated.div key={key} style={props}>
              <HamburgerIcon />
            </animated.div>
          ) : (
            <animated.div key={key} style={props}>
              <i className='fas fa-times fa-2x'></i>
            </animated.div>
          )
        )}
      </animated.div>

      <ul className='nav-links' style={navStyle}>
        <li onClick={handleToggle}>
          <Link to='/'>Home</Link>
        </li>
        <li onClick={handleToggle}>
          <Link to='/#'>Roadmap</Link>
        </li>
        <li onClick={handleToggle}>
          <Link to='/Design1'>Design1</Link>
        </li>
        　
      </ul>
    </nav>
  );
};

export default Header;
