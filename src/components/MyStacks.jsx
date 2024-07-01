import React from "react";
import { FaCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import react from "../assets/react.svg";
import sass from "../assets/sass.svg";
import node from "../assets/node.svg";
import express from "../assets/express.svg";
import mongo from "../assets/mongodb.svg";
import tailwind from "../assets/tailwind.svg";
import Tilt from "react-parallax-tilt";

const MyStacks = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mx-auto my-0 max-w-[90%] p-3 rounded-3xl">
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        glareColor="#ffffff"
        glarePosition="all"
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        className=" bg-pink-100/30 p-1 rounded-xl md:w-[47%] w-[100%]"
      >
        <div className="flex items-center gap-2 mt-3 ml-3 ">
          <FaCode className=" text-2xl text-[#771b48]" />
          <h3 className=" text-xl font-semibold text-[#771b48]">Frontend</h3>
        </div>
        <p className="my-2 text-xl leading-6 ml-3 ">
          I am a passionate frontend developer with a keen eye for design and
          user experience. Proficient in HTML, CSS, and JavaScript, I create
          responsive and interactive web applications. With experience in
          frameworks like React and Angular, I build dynamic and efficient
          websites. My goal is to craft seamless user experiences that are both
          visually appealing and highly functional.
        </p>
        <div className=" flex justify-around">
          <div className="flex flex-col items-center w-8 sm:w-10 ">
            <img
              style={{ width: "100%" }}
              src={html}
              alt=""
            />
            <p className="sm:text-sm text-xs font-semibold">HTML</p>
          </div>

          <div className="flex flex-col items-center w-8 sm:w-10">
            <img
              style={{ width: "100%" }}
              src={css}
              alt=""
            />
            <p className="sm:text-sm text-xs font-semibold">CSS</p>
          </div>

          <div className="flex flex-col items-center w-8 sm:w-10">
            <img
              style={{ width: "100%" }}
              src={tailwind}
              alt=""
            />
            <p className=" sm:text-sm text-xs font-semibold">TAILWIND</p>
          </div>

          <div className="flex flex-col items-center w-8 sm:w-10">
            <img
              style={{ width: "1000%" }}
              src={js}
              alt=""
            />
            <p className="sm:text-sm text-xs font-semibold">JS</p>
          </div>

          <div className="flex flex-col items-center w-8 sm:w-10">
            <img
              style={{ width: "100%" }}
              src={sass}
              alt=""
            />
            <p className="sm:text-sm text-xs font-semibold">SASS</p>
          </div>

          <div className="flex flex-col items-center w-8 sm:w-10">
            <img
              style={{ width: "100%" }}
              src={react}
              alt=""
            />
            <p className="sm:text-sm text-xs font-semibold">REACT</p>
          </div>
        </div>
      </Tilt>

      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        glareColor="#ffffff"
        glarePosition="all"
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        className=" bg-pink-100/30 p-2 rounded-xl md:w-[47%] w-[100%]"
      >
        <div className="flex items-center gap-2 mt-3 ml-3  ">
          <FaDatabase className=" text-2xl text-[#771b48]" />
          <h3 className=" text-xl font-semibold text-[#771b48]">Backend</h3>
        </div>
        <p className="my-2 text-xl leading-6 ml-3">
          I am a versatile developer skilled in both frontend and backend
          development. On the frontend, I use HTML, CSS, and JavaScript to
          create responsive and interactive web applications, leveraging
          frameworks like React and Angular for dynamic user experiences. On the
          backend, I work with Node.js, Express, and databases such as MongoDB
          and SQL to build robust and scalable server-side applications. My goal
          is to deliver seamless, end-to-end solutions that are both visually
          appealing and highly functional.
        </p>
        <div className="flex justify-around">
          <div className="flex flex-col items-center w-10">
            <img
              style={{ width: "100%" }}
              src={node}
              alt=""
            />
            <p className="text-sm font-semibold">NODE</p>
          </div>

          <div className="flex flex-col items-center w-10">
            <img
              style={{ width: "100%" }}
              src={express}
              alt=""
            />
            <p className="text-sm font-semibold">EXPRESS</p>
          </div>

          <div className="flex flex-col items-center w-10">
            <img
              style={{ width: "100%" }}
              src={mongo}
              alt=""
            />
            <p className="text-sm font-semibold">MONGODB</p>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default MyStacks;
