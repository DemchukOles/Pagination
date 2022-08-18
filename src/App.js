import React, { useState } from "react";
import Quotes from "./components/Quotes";
import Description from "./components/Description";
import Favorites from "./components/Favorites";
import InfiniteScroll from "./components/InfiniteScroll";
import "./App.css";

const App = () => {
  const [activeQuote, setActiveQuote] = useState();

  return (
    <div className="container">
      <div>
        <h1 className="title">Quote List</h1>
        <Quotes activeQuote={activeQuote} setActiveQuote={setActiveQuote} />
        <InfiniteScroll
          activeQuote={activeQuote}
          setActiveQuote={setActiveQuote}
        />
      </div>
      <Description />
      <Favorites activeQuote={activeQuote} setActiveQuote={setActiveQuote} />
    </div>
  );
};

export default App;
