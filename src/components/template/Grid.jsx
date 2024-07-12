import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const Grid = () => {
  const targetRef1 = React.useRef();
  const targetRef2 = React.useRef();
  const targetRef3 = React.useRef();
  const targetRef4 = React.useRef();
  const targetRef5 = React.useRef();
  const targetRef6 = React.useRef();

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: targetRef1,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: targetRef2,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: targetRef3,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollYProgress4 } = useScroll({
    target: targetRef4,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollYProgress5 } = useScroll({
    target: targetRef5,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollYProgress6 } = useScroll({
    target: targetRef6,
    offset: ["start end", "end start"],
  });

  const opacity1 = useTransform(scrollYProgress1, [0, 0.5, 1], [0, 1, 1]);
  const x1 = useTransform(scrollYProgress1, [0, 0.5, 1], [200, 0, -200]);

  const opacity2 = useTransform(scrollYProgress2, [0, 0.5, 1], [0, 1, 1]);
  const x2 = useTransform(scrollYProgress2, [0, 0.5, 1], [-200, 0, 200]);

  const opacity3 = useTransform(scrollYProgress3, [0, 0.5, 1], [0, 1, 1]);
  const x3 = useTransform(scrollYProgress3, [0, 0.5, 1], [200, 0, -200]);

  const opacity4 = useTransform(scrollYProgress4, [0, 0.5, 1], [0, 1, 1]);
  const x4 = useTransform(scrollYProgress4, [0, 0.5, 1], [-200, 0, 200]);

  const opacity5 = useTransform(scrollYProgress5, [0, 0.5, 1], [0, 1, 1]);
  const x5 = useTransform(scrollYProgress5, [0, 0.5, 1], [200, 0, -200]);

  const scale = useTransform(scrollYProgress6, [0, 0.5, 1], [0.7, 1, 1]);

  return (
    <main className=" overflow-hidden">
      {/* FIRST */}
      <motion.a
        ref={targetRef1}
        style={{ opacity: opacity1, x: x1 }}
        target="_blank"
        href="https://moviehq.vercel.app"
        className="section-one my-4 projects pt-10"
      >
        <div className="relative writeup">
          <div className="absolute -top-7 max-md:-top-8 left-0 px-2 font-bold lg:text-xl">
            <h3 className="text-[#771b48]">MOVIES HQ</h3>
            <p className="text-xs font-medium">REACT REDUX NODE TAILWIND</p>
          </div>

          <div className="one">
            <h1 className="lg:text-8xl md:text-7xl text-6xl leading-none font-bold text-[#771b48]">
              01
            </h1>

            <p className="pt-4 font-semibold text-left p-2 lg:text-sm text-xs">
              Developed a movie app using the MERN stack (MongoDB, Express,
              React, Node.js) which has the CRUD system. The app allows admin
              users to create, read, update, and delete movie entries
              seamlessly. With React for the frontend, while Node.js and Express
              handle the server side. MongoDB is used for the data storage.
            </p>
          </div>
        </div>

        <video
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          className="project-video"
        >
          <source
            src="https://res.cloudinary.com/dyf0wsiaf/video/upload/v1713026915/y5g9nahjcevsslfyvual.webm"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </motion.a>

      {/* SECOND */}
      <motion.a
        ref={targetRef2}
        style={{ opacity: opacity2, x: x2 }}
        target="_blank"
        href="https://gen-ecommerce.onrender.com/"
        className="section-two my-4 projects pt-10"
      >
        <video
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          className="project-video"
        >
          <source
            src="https://res.cloudinary.com/dyf0wsiaf/video/upload/v1719238251/qk5rdvevvjz7bw4ty92a.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="relative writeup">
          <div className="absolute -top-7 max-md:-top-8 right-0 bg-background px-3 font-bold lg:text-xl text-right">
            <h3 className="text-[#771b48]">GEN E-COMMERCE</h3>
            <p className="text-xs font-medium">HTML CSS JS</p>
          </div>

          <div className="two">
            <p className="pt-4 font-semibold text-right p-2 lg:text-sm text-xs">
              Developed the frontend of an e-commerce store using HTML, CSS, and
              JavaScript. It has a user-friendly interface and responsive
              design. JavaScript powers interactive elements while HTML and CSS
              ensure a clean and appealing layout. This project showcases my
              ability to create a visually appealing e-commerce experience.
            </p>

            <h1 className="lg:text-8xl md:text-7xl text-6xl leading-none font-bold text-[#771b48]">
              02
            </h1>
          </div>
        </div>
      </motion.a>

      {/* THIRD */}
      <motion.a
        ref={targetRef3}
        style={{ opacity: opacity3, x: x3 }}
        target="_blank"
        href="https://felix-gym.onrender.com"
        className="section-one my-4 projects pt-10"
      >
        <div className="relative writeup">
          <div className="absolute -top-7 max-md:-top-8 left-0 bg-background px-2 font-bold lg:text-xl">
            <h3 className="text-[#771b48]">THE FIT CLUB</h3>
            <p className="text-xs font-medium">REACT CSS</p>
          </div>

          <div className="one">
            <h1 className="lg:text-8xl md:text-7xl text-6xl leading-none font-bold text-[#771b48]">
              03
            </h1>

            <p className="pt-4 font-semibold text-left p-2 lg:text-sm text-xs">
              I designed and developed a landing page for a gym using REACT and
              CSS. The landing page features a responsive design that highlights
              the gym's services, facilities, and membership plans. It has
              interactive elements enhance user experience, with a clean and
              intuitive layout.
            </p>
          </div>
        </div>

        <video
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          className="project-video"
        >
          <source
            src="https://res.cloudinary.com/dyf0wsiaf/video/upload/v1719238081/fgys9znryfbsfn51czh3.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </motion.a>

      {/* FOURTH */}
      <motion.a
        ref={targetRef4}
        style={{ opacity: opacity4, x: x4 }}
        target="_blank"
        href="https://charity-master.onrender.com/"
        className="section-two my-4 projects pt-10"
      >
        <video
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          className="project-video"
        >
          <source
            src="https://res.cloudinary.com/dyf0wsiaf/video/upload/v1719238238/acd4t44kycv5udhuhugs.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="relative writeup">
          <div className="absolute -top-7 max-md:-top-8 right-0 bg-background px-3 font-bold lg:text-xl text-right">
            <h3 className="text-[#771b48]">CHARITY</h3>
            <p className="text-xs font-medium">HTML CSS JS</p>
          </div>

          <div className="two">
            <p className="pt-4 font-semibold text-right p-2 lg:text-sm text-xs">
              Designed and developed a landing page for a nature charity
              organization using HTML, CSS, and JavaScript. The landing page
              features a clean, responsive design that showcases the
              organization's mission and ways to get involved. Engaging visuals,
              animations, and interactive elements.
            </p>

            <h1 className="lg:text-8xl md:text-7xl text-6xl leading-none font-bold text-[#771b48]">
              04
            </h1>
          </div>
        </div>
      </motion.a>

      {/* FIFTH */}
      <motion.a
        ref={targetRef5}
        style={{ opacity: opacity5, x: x5 }}
        target="_blank"
        href="https://felixsocials.pages.dev"
        className="section-one my-4 projects pt-10"
      >
        <div className="relative writeup">
          <div className="absolute -top-7 max-md:-top-8 left-0 bg-background px-2 font-bold lg:text-xl">
            <h3 className="text-[#771b48]">SOCIAL MEDIA DASHBOARD</h3>
            <p className="text-xs font-medium">HTML SCSS JS</p>
          </div>

          <div className="one">
            <h1 className="lg:text-8xl md:text-7xl text-6xl leading-none font-bold text-[#771b48]">
              05
            </h1>

            <p className="pt-4 font-semibold text-left p-2 lg:text-sm text-xs">
              Built a social media engagement page with a light and dark mode
              toggle. This work was inspired by the design from frontend mentor,
              although I added a bit of my styling with the front card cover and
              the flip effect on hover. This is a single-page site, This project
            </p>
          </div>
        </div>

        <video
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          className="project-video"
        >
          <source
            src="https://res.cloudinary.com/dyf0wsiaf/video/upload/v1713026912/afcadc0qr4ac3xjmyc7c.webm"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </motion.a>

      {/* SIXTH */}
      <motion.a
        ref={targetRef6}
        style={{ scale: scale }}
        target="_blank"
        href="https://punch-assignment-beige.vercel.app/"
        className="section-two my-4 projects pt-10"
      >
        <video
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          className="project-video"
        >
          <source
            src="https://res.cloudinary.com/dyf0wsiaf/video/upload/v1719238044/woubungbvzhp9vhuohfx.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="relative writeup">
          <div className="absolute -top-7 max-md:-top-8 right-0 bg-background px-3 font-bold lg:text-xl text-right">
            <h3 className="text-[#771b48]">ZWILT LANDING PAGE</h3>
            <p className="text-xs font-medium">REACT SCSS TAILWIND</p>
          </div>

          <div className="two">
            <p className="pt-4 font-semibold text-right p-2 lg:text-sm text-xs">
              Designed and developed a landing page for an interview platform
              using REACT, TAILWIND and SCSS The landing page features a sleek,
              and responsive design with Interactive elements and engaging
              visuals. It provides an intuitive user experience, while clear and
              intuitive layout.
            </p>

            <h1 className="lg:text-8xl md:text-7xl text-6xl leading-none font-bold text-[#771b48]">
              06
            </h1>
          </div>
        </div>
      </motion.a>
    </main>
  );
};

export default Grid;
