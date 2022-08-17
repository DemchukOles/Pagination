import React from "react";
import { useDispatch } from "react-redux";

const Quotes = ({ quotes, activeQuote, setActiveQuote }) => {
  const dispatch = useDispatch();

  const addCurrentQuote = (quote) => {
    dispatch({ type: "ADD_CURRENT_QUOTE", payload: quote });
  };
  return (
    <ul className="list">
      <h1>Quote List</h1>
      {quotes.map((quote) => (
        <li
          className={activeQuote === quote ? "post activeQuote" : "post"}
          key={quote.id}
          onClick={() => {
            setActiveQuote(quote);
            addCurrentQuote(quote);
          }}
        >
          <p>{quote.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default Quotes;
