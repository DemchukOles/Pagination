import React from "react";

import { useDispatch, useSelector } from "react-redux";

const Description = () => {
  const currentQuote = useSelector((state) => state.currentQuote.currentQuote);
  const { title, body } = currentQuote;

  const dispatch = useDispatch();
  const addFavoritesQuotes = () => {
    dispatch({ type: "ADD_FAVORITES_QUOTES", payload: currentQuote });
  };

  const favoritesQouotes = useSelector(
    (state) => state.favoritesQouotes.favoritesQouotes
  );
  const filtered = favoritesQouotes.filter((quote) => {
    return quote.title !== title;
  });
  const removeFavorites = () => {
    dispatch({ type: "REMOVE_QUOTES", payload: filtered });
  };

  return (
    <div className="list">
      <h1>Description</h1>
      <h3 className="postTitle">{title}</h3>
      <p className="postBody">{body}</p>
      <div className="buttonSection">
        {title && !favoritesQouotes.includes(currentQuote) && (
          <button
            className="favorites button"
            onClick={() => {
              addFavoritesQuotes();
            }}
          >
            add to favorites
          </button>
        )}
        {favoritesQouotes.includes(currentQuote) && (
          <button className="remove_favorites button" onClick={removeFavorites}>
            remove from favorites
          </button>
        )}
      </div>
    </div>
  );
};
export default Description;
