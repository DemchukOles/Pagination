import React from "react";
// import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Posts = ({ posts, activeQuote, setActiveQuote }) => {
  const dispatch = useDispatch();

  const addCurrentQuote = (post) => {
    dispatch({ type: "ADD_CURRENT_QUOTE", payload: post });
  };
  return (
    <ul className="list">
      <h1>Quote List</h1>
      {posts.map((post) => (
        <li
          className={activeQuote === post ? "post activeQuote" : "post"}
          key={post.id}
          onClick={() => {
            setActiveQuote(post);
            addCurrentQuote(post);
          }}
        >
          <p>{post.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
