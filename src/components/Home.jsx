import React from "react";
import pic1 from "../assets/edit1.jpg";

const Home = () => {
  return (
    <div className=" relative ml-5 top-1/2 -translate-y-1/2">
      <div>
        <img
          style={{
            width: "50px",
            borderRadius: "10px",
          }}
          src={pic1}
          alt=" felix frontend backend fullstack"
        />

        <h2 className="head font-bold text-5xl py-2">
          Hi! I'm Felix - a Fullstack Developer
        </h2>

        <p className=" text-2xl font-semibold py-2">
          I build things for the web
        </p>

        <button className=" px-2 py-1 border bg-white font-semibold rounded-2xl">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Home;
