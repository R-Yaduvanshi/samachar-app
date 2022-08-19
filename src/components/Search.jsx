import React from "react";
import { useGlobalContext } from "../ContextComponent/context";
// import "./App.css";
import "../App.css";

const Search = () => {
  const { query, searchPost } = useGlobalContext();
  return (
    <>
      <h1>Tech News</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="Search Here"
            value={query}
            onChange={(e) => searchPost(e.target.value)}
            className="input"
          />
        </div>
      </form>
    </>
  );
};

export default Search;
