import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyStacks from "./components/MyStacks";

const App = () => {
  return (
    <>
      <div className="section-one no-scrollbar">
        <Navbar />
        <Home />
      </div>
      <MyStacks />
    </>
  );
};

export default App;
