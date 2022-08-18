import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

const InfiniteScroll = ({ activeQuote, setActiveQuote }) => {
  const [quotes, setQuotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    if (fetching) {
      axios
        .get(
          // eslint-disable-next-line
          "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${currentPage}"
        )
        .then((response) => {
          setQuotes([...quotes, ...response.data]);
          setCurrentPage(currentPage + 1);
          setTotalCount(response.headers["x-total-count"]);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching, currentPage, quotes]);

  const scrollHandler = (e) => {
    if (
      e.target.scrollHeight - (e.target.scrollTop + 300) < 10 &&
      quotes.length < totalCount
    )
      setFetching(true);
  };
  const dispatch = useDispatch();
  const addCurrentQuote = (quote) => {
    dispatch({ type: "ADD_CURRENT_QUOTE", payload: quote });
  };
  return (
    <div>
      <ul className="listInfinite" onScroll={scrollHandler}>
        {quotes.map((quote, i) => (
          <li
            className={activeQuote === quote ? "post activeQuote" : "post"}
            key={i}
            onClick={() => {
              setActiveQuote(quote);
              addCurrentQuote(quote);
            }}
          >
            <p>{quote.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default InfiniteScroll;
