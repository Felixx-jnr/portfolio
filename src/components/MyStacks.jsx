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
    <div className="stacks flex flex-wrap justify-center gap-4 mx-auto my-0">
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        glareColor="#ffffff"
        glarePosition="all"
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        className="w-] bg-green-300 p-2 rounded-xl w-[49%]"
      >
        <div className="flex items-center gap-2 mt-3 ml-3 ">
          <FaCode className=" text-2xl " />
          <h3 className=" text-xl font-semibold">Frontend</h3>
        </div>
        <p className="my-2 text-xl leading-6 ml-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum at
          vitae laborum aliquam facilis optio obcaecati officia voluptatibus
          deserunt similique!
        </p>
        <div className=" flex justify-around">
          <div className="flex flex-col items-center w-10">
            <img
              style={{ width: "100%" }}
              src={html}
              alt=""
            />
            <p className="text-xl">HTML</p>
          </div>

          <div className="flex flex-col items-center w-10">
            <img
              style={{ width: "100%" }}
              src={css}
              alt=""
            />
            <p className="text-xl">CSS</p>
          </div>

          <div className="flex flex-col items-center w-10">
            <img
              style={{ width: "100%" }}
              src={tailwind}
              alt=""
            />
            <p className="text-xl">TAILWIND</p>
          </div>

          <div className="flex flex-col items-center w-10">
            <img
              style={{ width: "1000%" }}
              src={js}
              alt=""
            />
            <p className="text-xl">JS</p>
          </div>

          <div className="flex flex-col items-center w-10">
            <img
              style={{ width: "100%" }}
              src={sass}
              alt=""
            />
            <p className="text-xl">SASS</p>
          </div>

          <div className="flex flex-col items-center w-10">
            <img
              style={{ width: "100%" }}
              src={react}
              alt=""
            />
            <p className="text-xl">REACT</p>
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
        className="w-[49%] bg-red-300 p-2 rounded-xl"
      >
        <div className="flex items-center gap-2 mt-3 ml-3 ">
          <FaDatabase className=" text-2xl " />
          <h3 className=" text-xl font-semibold">Backend</h3>
        </div>
        <p className="my-2 text-xl leading-6 ml-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum at
          vitae laborum aliquam facilis optio obcaecati officia voluptatibus
          deserunt similique!
        </p>
        <div className="flex justify-around">
          <div className="flex flex-col items-center w-10">
            <img
              style={{ width: "100%" }}
              src={node}
              alt=""
            />
            <p className="text-xl">NODE</p>
          </div>

          <div className="flex flex-col items-center w-10">
            <img
              style={{ width: "100%" }}
              src={express}
              alt=""
            />
            <p className="text-xl">EXPRESS</p>
          </div>

          <div className="flex flex-col items-center w-10">
            <img
              style={{ width: "100%" }}
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
