import React from "react";
import Grid from "./template/Grid";

const Projects = () => {
  return (
    <div className="max-w-[90%] mx-auto bg-green-300 p-2 my-5 rounded-xl">
      <div className="reviews relative flex mt-16 mb-10 overflow-hidden">
        <div className="reviews-slide flex">
          <div className="font-bold lg:text-5xl text-3xl w-[45rem] text-gold ">
            EXPLORE OUR WORLD
          </div>
          <div className="font-bold lg:text-5xl text-3xl w-[45rem] text-gold ">
            EXPLORE OUR WORLD
          </div>
        </div>

        <div className="reviews-slide flex">
          <div className="font-bold lg:text-5xl text-3xl w-[45rem] text-gold ">
            EXPLORE OUR WORLD
          </div>
          <div className="font-bold lg:text-5xl text-3xl w-[45rem] text-gold ">
            EXPLORE OUR WORLD
          </div>
          *
        </div>
      </div>
      <div>
        <Grid />
      </div>
    </div>
  );
};

export default Projects;