import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../ContextComponent/context";

const Stories = () => {
  const { hits, nbPages, isLoading, removePost } = useGlobalContext();

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  return (
    <div className="stories-div">
      {hits.map((newsData) => {
        const { title, author, objectID, url, num_comments } = newsData;
        // console.log("ObjectId=>", objectID);
        return (
          <div key={objectID} className="card">
            <h2>{title}</h2>
            <p>
              By <span>{author} </span> | <span>{num_comments}</span> Comments
            </p>
            <div className="card-button">
              <a href={url} target="_blank">
                Read More
              </a>
              <a href="#" onClick={() => removePost(objectID)}>
                Remove
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
