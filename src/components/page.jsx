import React from "react";

const Page = props => {
  const { pageData } = props;

  const indexPage = () => {
    const curPage = pageData.currentPage;

    return (
      <React.Fragment>
        <i className={`${curPage === 1 ? "fas" : "far"} fa-circle fa-xs`}></i>
        <i className={`${curPage === 2 ? "fas" : "far"}  fa-circle fa-xs`}></i>
        <i className={`${curPage === 3 ? "fas" : "far"}  fa-circle fa-xs`}></i>
      </React.Fragment>
    );
  };

  return <div className='page-index'>{indexPage()}</div>;
};
export default Page;
