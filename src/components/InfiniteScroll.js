import React, { useEffect, useState } from "react";
import axios from "axios";

const InfiniteScroll = () => {
  const [quotes, setQuotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    if (fetching) {
      axios
        .get(
          // eslint-disable-next-line
          "https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${currentPage}"
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
  return (
    <div>
      <h1 className="title">Quote List</h1>
      <ul className="listInfinite" onScroll={scrollHandler}>
        {quotes.map((quote, i) => (
          <li className="post" key={i}>
            <p>{quote.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default InfiniteScroll;
