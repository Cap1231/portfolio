import React from "react";
import { useSpring, animated } from "react-spring";

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

const Name = () => {
  const orange = "#f77911";
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
    <div className='name'>
      <animated.div className='border-name' style={props}></animated.div>
      <Eyes />
      <animated.h1 style={styleName}>Tsubasa Yamaguchi</animated.h1>
      <div className='occupation'>Web developer</div>
    </div>
  );
};

export default Name;
