import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Quotes from "./components/Quotes";
import Pagination from "./components/Pagination";
import Description from "./components/Description";
import Favorites from "./components/Favorites";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [activeQuote, setActiveQuote] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
    };

    fetchPosts();
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <div>
        <Quotes
          quotes={currentPosts}
          activeQuote={activeQuote}
          setActiveQuote={setActiveQuote}
        />
        <Pagination
          currentPage={currentPage}
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
      <Description />
      <Favorites activeQuote={activeQuote} setActiveQuote={setActiveQuote} />
    </div>
  );
};

export default App;
