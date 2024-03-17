import React from "react";
import Header from "./components/header/Header";
import TinderCards from "./components/tinderCards/TinderCards";

const App = () => {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      {/* Swipe buttons */}
    </div>
  );
};

export default App;
