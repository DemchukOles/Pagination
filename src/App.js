import React, { useState } from "react";
import Quotes from "./components/Quotes";
import Description from "./components/Description";
import Favorites from "./components/Favorites";
import InfiniteScroll from "./components/InfiniteScroll";
import "./App.css";

const App = () => {
  const [activeQuote, setActiveQuote] = useState();
  const [pagination, setPagination] = useState(true);
  const paginationHandler = () => {
    setPagination(!pagination);
  };
  return (
    <div className="container">
      <div>
        <h1 className="title">Quote List</h1>
        {pagination ? (
          <div>
            <button className="paginationButton" onClick={paginationHandler}>
              infinite scroll
            </button>
            <Quotes activeQuote={activeQuote} setActiveQuote={setActiveQuote} />
          </div>
        ) : (
          <div>
            <button className="paginationButton" onClick={paginationHandler}>
              pagination
            </button>
            <InfiniteScroll
              activeQuote={activeQuote}
              setActiveQuote={setActiveQuote}
            />
          </div>
        )}
      </div>
      <Description />
      <Favorites activeQuote={activeQuote} setActiveQuote={setActiveQuote} />
    </div>
  );
};

export default App;
