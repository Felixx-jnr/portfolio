import React from "react";
import pic1 from "../assets/edit1.jpg";

const Home = () => {
  return (
    <div className=" relative mx-2 xs:mx-6 md:mx-20 top-1/2 -translate-y-1/2 ">
      <div>
        <img
          style={{
            width: "50px",
            borderRadius: "10px",
          }}
          src={pic1}
          alt=" felix frontend backend fullstack"
        />

        <h2 className=" lg:hidden max-lg:block font-bold text-3xl xs:text-4xl sm:text-5xl mt-2">
          Hi! I'm Felix <br /> A Fullstack Developer
        </h2>

        <h2 className="max-lg:hidden font-bold text-5xl my-2">
          Hi! I'm Felix - A Fullstack Developer
        </h2>

        <p className=" xs:text-2xl font-semibold my-2">
          I build things for the web
        </p>

        <a
          href="#contact"
          className=" inline-block px-2 py-2 mt-1 border bg-white font-bold rounded-2xl"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
};

export default Home;
