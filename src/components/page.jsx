import React from "react";

const Page = props => {
  const { pageData } = props;

  const indexPage = () => {
    const curPage = pageData.currentPage;
    if (curPage === 1) {
      return (
        <React.Fragment>
          <i className='fas fa-circle fa-xs'></i>
          <i className='far fa-circle fa-xs'></i>
          <i className='far fa-circle fa-xs'></i>
        </React.Fragment>
      );
    } else if (curPage === 2) {
      return (
        <React.Fragment>
          <i className='far fa-circle fa-xs'></i>
          <i className='fas fa-circle fa-xs'></i>
          <i className='far fa-circle fa-xs'></i>
        </React.Fragment>
      );
    } else if (curPage === 3) {
      return (
        <React.Fragment>
          <i className='far fa-circle fa-xs'></i>
          <i className='far fa-circle fa-xs'></i>
          <i className='fas fa-circle fa-xs'></i>
        </React.Fragment>
      );
    } else {
      console.log("ërror...");
    }
  };

  return <div className='page-index'>{indexPage()}</div>;
};
export default Page;
