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
import { motion, useInView } from "framer-motion";

const MyStacks = () => {
  const frontendIcons = [
    { src: html, label: "HTML" },
    { src: css, label: "CSS" },
    { src: tailwind, label: "TAILWIND" },
    { src: js, label: "JS" },
    { src: sass, label: "SASS" },
    { src: react, label: "REACT" },
  ];

  const backendIcons = [
    { src: node, label: "NODE" },
    { src: express, label: "EXPRESS" },
    { src: mongo, label: "MONGO" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this value as needed
  });

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
          user experience. I create responsive and interactive web applications.
          With experience in React , I build dynamic and efficient websites. I
          craft seamless user experiences that are both visually appealing and
          highly functional.
        </p>

        <div className=" flex justify-around">
          {frontendIcons.map((frontendIcon, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center w-8 sm:w-10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.3, duration: 0.4 }}
            >
              <img
                style={{ width: "100%" }}
                src={frontendIcon.src}
                alt={frontendIcon.label}
              />
              <p className="sm:text-sm text-xs font-semibold">
                {frontendIcon.label}
              </p>
            </motion.div>
          ))}
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
          development. On the backend, I work with Node.js, Express, and
          databases such as MongoDB to build scalable server-side applications.
          I deliver seamless, end-to-end solutions that are and highly
          functional, scalable and efficient
        </p>

        <div className=" flex justify-around">
          {backendIcons.map((backendIcon, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center w-10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.3, duration: 0.4 }}
            >
              <img
                style={{ width: "100%" }}
                src={backendIcon.src}
                alt={backendIcon.label}
              />
              <p className="sm:text-sm text-xs font-semibold">
                {backendIcon.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

export default MyStacks;
