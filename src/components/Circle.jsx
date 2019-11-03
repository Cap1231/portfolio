import React from "react";

const circle = props => {
  const { lang, level, exp } = props;
  const circumference = 314; /* 円周 */
  const skillNum = circumference - (circumference * level) / 100;
  const style = {
    strokeDashoffset: skillNum
  };

  return (
    <div className='circle-container'>
      <div className='circle'>
        <svg width='110px' height='110px'>
          <circle cx='50' cy='50' r='50' />
          <circle cx='50' cy='50' r='50' style={style} />
        </svg>
        <div className='circle-number'>
          <span>{level}%</span>
        </div>
      </div>
      <h3>{lang}</h3>
      <div>{exp} years</div>
    </div>
  );
};

export default circle;
