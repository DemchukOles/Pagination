import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Pagination from "./Pagination";

const Quotes = ({ activeQuote, setActiveQuote }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [quotesPerPage, setQuotesPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
    };

    fetchPosts();
  }, []);
  const indexOfLastPost = currentPage * quotesPerPage;
  const indexOfFirstPost = indexOfLastPost - quotesPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const dispatch = useDispatch();
  const addCurrentQuote = (quote) => {
    dispatch({ type: "ADD_CURRENT_QUOTE", payload: quote });
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <ul className="list">
        {currentPosts.map((quote) => (
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
      <Pagination
        currentPage={currentPage}
        quotesPerPage={quotesPerPage}
        setQuotesPerPage={setQuotesPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Quotes;
