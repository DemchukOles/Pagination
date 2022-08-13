import React, { useState } from "react";

const Posts = ({ posts, setCurrentPosts }) => {
  const [activeQuote, setActiveQuote] = useState();

  return (
    <ul className="list">
      <h1>Quote List</h1>
      {posts.map((post) => (
        <li
          className={activeQuote === post ? "post activeQuote" : "post"}
          key={post.id}
          onClick={() => {
            setCurrentPosts(post);
            setActiveQuote(post);
          }}
        >
          <p>{post.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
