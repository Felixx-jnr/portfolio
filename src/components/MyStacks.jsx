import React from "react";
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
import typescript from "../assets/typescript.svg";
import next from "../assets/next.svg";
import Tilt from "react-parallax-tilt";

const MyStacks = () => {
  const frontendIcons = [
    { src: html, label: "HTML" },
    { src: css, label: "CSS" },
    { src: tailwind, label: "TAILWIND" },
    { src: js, label: "JS" },
    { src: sass, label: "SASS" },
    { src: react, label: "REACT" },
    { src: next, label: "NEXT" },
    { src: typescript, label: "TS" },
    { src: node, label: "NODE" },
    { src: express, label: "EXPRESS" },
    { src: mongo, label: "MONGO" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mx-auto my-0 max-w-[90%] p-3 rounded-3xl">
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        glareColor="#ffffff"
        glarePosition="all"
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        className=" bg-pink-100/30 p-1 rounded-xl w-[100%]"
      >
        <div className="flex items-center gap-2 mt-3 ml-3 ">
          <FaDatabase className=" text-2xl text-[#771b48]" />
          <h3 className=" text-2xl font-semibold text-[#771b48]">MY STACKS</h3>
        </div>
        <p className="my-2 text-xl leading-6 ml-3 ">
          "I am a passionate web developer with a keen eye for design, user
          experience, and logical operation. I engineer and build responsive,
          interactive web applications. With experience in both backend and
          frontend, I build dynamic and efficient web applications, crafting
          seamless user experiences that are both visually appealing and highly
          functional."
        </p>

        <div className="flex justify-around flex-wrap">
          {frontendIcons.map((frontendIcon, index) => (
            <div
              key={index}
              className="flex flex-col flex-wrap items-center w-10 mx-4 mb-4"
            >
              <img
                style={{ width: "100%" }}
                src={frontendIcon.src}
                alt={frontendIcon.label}
              />
              <p className="sm:text-sm text-xs font-semibold">
                {frontendIcon.label}
              </p>
            </div>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

export default MyStacks;
