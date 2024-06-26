import React from "react";
import Grid from "./template/Grid";

const Projects = () => {
  return (
    <div
      className="max-w-[90%] mx-auto p-2 my-2 rounded-xl"
      id="project"
    >
      <div className="reviews relative flex mt-5 mb-5 overflow-hidden">
        <div className="reviews-slide flex">
          <div className="font-bold lg:text-5xl text-3xl w-[45rem] text-gold ">
            MY PROJECTS
          </div>
          <div className="font-bold lg:text-5xl text-3xl w-[45rem] text-gold ">
            MY PROJECTS
          </div>
        </div>

        <div className="reviews-slide flex">
          <div className="font-bold lg:text-5xl text-3xl w-[45rem] text-gold ">
            MY PROJECTS
          </div>
          <div className="font-bold lg:text-5xl text-3xl w-[45rem] text-gold ">
            MY PROJECTS
          </div>
        </div>
      </div>
      <div>
        <Grid />
      </div>
    </div>
  );
};

export default Projects;
