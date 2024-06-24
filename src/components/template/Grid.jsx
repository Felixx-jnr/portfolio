import React from "react";

const Grid = () => {
  return (
    <main className="">
      <section className="section-one my-10 bg-pink-600">
        <div className="relative writeup">
          <p className="absolute -top-3.5 left-0 bg-background px-3 font-bold lg:text-xl">
            Strategic Planning
          </p>

          <div className="one">
            <h1 className=" lg:text-8xl md:text-7xl text-6xl leading-none font-bold ">
              01
            </h1>

            <p className="pt-4 font-semibold text-left p-2 lg:text-sm text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              harum minus, fuga esse reiciendis accusantium ad quam molestias
              dignissimos soluta? Quasi soluta nulla quam sint expedita maxime
              aliquid quo aut, similique
            </p>
          </div>
        </div>

        <video
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
        >
          <source
            src="https://res.cloudinary.com/dyf0wsiaf/video/upload/v1713026915/y5g9nahjcevsslfyvual.webm"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="section-two my-10 bg-red-600">
        <video
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
        >
          <source
            src="https://res.cloudinary.com/dyf0wsiaf/video/upload/v1713026912/afcadc0qr4ac3xjmyc7c.webm"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="relative writeup ">
          <p className="absolute -top-3.5 right-0 bg-background px-3 font-bold lg:text-xl">
            Custom Design
          </p>

          <div className="two">
            <p className="pt-4 font-semibold text-left p-2 lg:text-sm text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              harum minus, fuga esse reiciendis accusantium ad quam molestias
              dignissimos soluta? Quasi soluta nulla quam sint expedita maxime
              aliquid quo aut, similique
            </p>

            <h1 className=" lg:text-8xl md:text-7xl text-6xl leading-none font-bold  ">
              02
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Grid;
