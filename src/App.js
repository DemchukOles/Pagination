import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import Description from "./components/Description";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [currentPost, setCurrentPosts] = useState([]);

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
        <Posts posts={currentPosts} setCurrentPosts={setCurrentPosts} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
      <Description currentPost={currentPost} />
    </div>
  );
};

export default App;
