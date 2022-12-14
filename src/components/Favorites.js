import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Favorites = ({ activeQuote, setActiveQuote }) => {
  const favoritesQouotes = useSelector(
    (state) => state.favoritesQouotes.favoritesQouotes
  );

  const dispatch = useDispatch();
  const addCurrentQuote = (post) => {
    dispatch({ type: "ADD_CURRENT_QUOTE", payload: post });
  };
  return (
    <div className="list">
      <h1>Favorites Quotes</h1>
      {favoritesQouotes.map((post) => (
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
    </div>
  );
};
export default Favorites;
