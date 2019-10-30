import React from "react";
import Circle from "./Circle";
import Page from "./Page";

const skill = () => {
  return (
    <div className='skill'>
      <Page pageData={{ currentPage: 2 }} />

      <h2 className='work-title'>Skill</h2>
      {/* <Language />
      <Framework /> */}

      <div className='grid-skill'>
        <Circle lang={"Javascript"} level={80} exp={2} />
        <Circle lang={"Python"} level={70} exp={1} />
        <Circle lang={"C"} level={90} exp={3} />
        <Circle lang={"html / CSS"} level={100} exp={2} />
        <Circle lang={"React"} level={70} exp={1} />
        <Circle lang={"Nodejs"} level={70} exp={1} />
      </div>
    </div>
  );
};

export default skill;
