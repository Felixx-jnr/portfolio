import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyStacks from "./components/MyStacks";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <div className="home no-scrollbar">
        <Navbar />
        <Home />
      </div>

      <MyStacks />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
