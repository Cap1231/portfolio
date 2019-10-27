import React, { useState, useRef } from "react";
import { useTransition, animated } from "react-spring";

const Header = () => {
  const [isToggleOn, setToggle] = useState(true);
  const transitions = useTransition(isToggleOn, null, {
    // from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
    // config: config.slow
    delay: 3000
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
  const navRef = useRef();
  const handleToggle = () => {
    if (isToggleOn) {
      setNav(nav.open);
    } else {
      setNav(nav.close);
    }
    setToggle(!isToggleOn);
  };

  return (
    <nav>
      <div className='hamburger' onClick={handleToggle}>
        {transitions.map(({ item, key, props }) =>
          isToggleOn ? (
            <animated.div key={key} style={props}>
              <svg width='35px' height='35px'>
                <g stroke='#f77911'>
                  <line x1='0' y1='7.5' x2='35' y2='7.5' strokeWidth='5' />
                  <line x1='0' y1='17.5' x2='35' y2='17.5' strokeWidth='5' />
                  <line x1='0' y1='27.5' x2='35' y2='27.5' strokeWidth='5' />
                </g>
              </svg>
            </animated.div>
          ) : (
            <animated.div key={key} style={props}>
              <i className='fas fa-times fa-2x'></i>
            </animated.div>
          )
        )}
        {/* {isToggleOn ? (
          <div>
            <svg width='35px' height='35px'>
              <g stroke='#f77911'>
                <line x1='0' y1='7.5' x2='35' y2='7.5' strokeWidth='5' />
                <line x1='0' y1='17.5' x2='35' y2='17.5' strokeWidth='5' />
                <line x1='0' y1='27.5' x2='35' y2='27.5' strokeWidth='5' />
              </g>
            </svg>
          </div>
        ) : (
          <div>
            <i className='fas fa-times fa-2x'></i>
          </div>
        )} */}
      </div>

      <ul className='nav-links' ref={navRef} style={navStyle}>
        <li>
          <a href='/#'>Roadmap</a>
        </li>
        <li>
          <a href='/#'>Work1</a>
        </li>
        　
      </ul>
    </nav>
  );
};

export default Header;
