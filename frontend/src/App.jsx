import React from "react";
import Header from "./components/header/Header";
import TinderCards from "./components/tinderCards/TinderCards";
import SwipeButtons from "./components/SwipeButtons/SwipeButtons";

const App = () => {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
};

export default App;
