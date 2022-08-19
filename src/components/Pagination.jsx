import React from "react";
import { useGlobalContext } from "../ContextComponent/context";

const Pagination = () => {
  const { page, nbPages, getNextPage, getPrevPage } = useGlobalContext();
  return (
    <>
      <div className="pagination-btn">
        <button onClick={() => getPrevPage()}>Prev</button>
        <p>
          {page + 1} of {nbPages}
        </p>
        <button onClick={() => getNextPage()}>Next</button>
      </div>
    </>
  );
};

export default Pagination;
