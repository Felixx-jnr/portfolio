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
    <div className="stacks flex flex-wrap justify-center gap-4 no-scrollbar">
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        glareColor="#ffffff"
        glarePosition="all"
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        className="w-[48%] bg-green-300"
      >
        <div className="flex justify-center items-center gap-2 my-3 ">
          <FaCode className=" text-4xl " />
          <h3 className=" text-3xl">Frontend</h3>
        </div>
        <p className="my-4 text-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum at
          vitae laborum aliquam facilis optio obcaecati officia voluptatibus
          deserunt similique!
        </p>
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <img
              style={{ width: "50%" }}
              src={html}
              alt=""
            />
            <p className="text-xl">HTML</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              style={{ width: "50%" }}
              src={css}
              alt=""
            />
            <p className="text-xl">CSS</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              style={{ width: "50%" }}
              src={js}
              alt=""
            />
            <p className="text-xl">JS</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              style={{ width: "70%" }}
              src={sass}
              alt=""
            />
            <p className="text-xl">SASS</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              style={{ width: "60%" }}
              src={react}
              alt=""
            />
            <p className="text-xl">REACT</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              style={{ width: "85%" }}
              src={tailwind}
              alt=""
            />
            <p className="text-xl">TAILWIND</p>
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
        className="w-[48%] bg-red-300"
      >
        <div className="flex justify-center items-center gap-2 my-3 ">
          <FaDatabase className=" text-4xl " />
          <h3 className=" text-3xl">Backend</h3>
        </div>
        <p className="my-4 text-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum at
          vitae laborum aliquam facilis optio obcaecati officia voluptatibus
          deserunt similique!
        </p>
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <img
              style={{ width: "35%" }}
              src={node}
              alt=""
            />
            <p className="text-xl">NODE</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              style={{ width: "35%" }}
              src={express}
              alt=""
            />
            <p className="text-xl">EXPRESS</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              style={{ width: "35%" }}
              src={mongo}
              alt=""
            />
            <p className="text-xl">MONGODB</p>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default MyStacks;
