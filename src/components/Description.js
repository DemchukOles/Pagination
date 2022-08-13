import React from "react";

const Description = ({ currentPost }) => {
  const { title, body } = currentPost;

  return (
    <div className="list">
      <h1>Description</h1>
      <h3 className="postTitle">{title}</h3>
      <p className="postBody">{body}</p>
      {title && <button className="favorites">add to favorites</button>}
    </div>
  );
};
export default Description;
