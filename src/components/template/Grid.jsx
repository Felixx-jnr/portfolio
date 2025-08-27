import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const Grid = () => {
  const targetRef1 = React.useRef();
  const targetRef2 = React.useRef();
  const targetRef3 = React.useRef();
  const targetRef4 = React.useRef();
  const targetRef5 = React.useRef();
  const targetRef6 = React.useRef();

  // Check if it's a mobile screen
  const isMobile = window.innerWidth <= 768;

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

  const mobileStyle = { opacity: 1, x: 0, scale: 1 };

  return (
    <main className="overflow-hidden">
      {/* FIRST - ECOMMERCERCE */}
      <motion.a
        ref={targetRef1}
        style={!isMobile ? { opacity: opacity1, x: x1 } : mobileStyle}
        target="_blank"
        href="https://fil-store.vercel.app/"
        className="my-4 pt-10 section-one projects"
      >
        <div className="relative writeup">
          <div className="-top-7 max-md:-top-8 left-0 absolute px-2 font-bold lg:text-xl">
            <h3 className="text-[#771b48]">FIL E-COMMERCE</h3>
            <p className="font-medium text-xs">NEXT EXPRESS REDUX TAILWIND</p>
          </div>

          <div className="one">
            <h1 className="font-bold text-[#771b48] text-6xl md:text-7xl lg:text-8xl leading-none">
              01
            </h1>

            <p className="p-2 pt-4 font-semibold text-xs lg:text-sm text-left">
              Developed a fully functional e-commerce application with user and
              admin features. Users can create accounts, log in, browse
              products, and make purchases. The platform includes admin
              functionality for product and order management.
              <p className="font-bold text-red-500 text-xs lg:text-sm text-left">
                NOTE: This project is still a work in progress and a lot of
                changes are yet to be made especially to the stylings.
              </p>
            </p>
          </div>
        </div>

        <video
          width="100%"
          height="100%"
          autoPlay
          playsInline
          loop
          muted
          className="project-video"
        >
          <source
            src="https://res.cloudinary.com/dyf0wsiaf/video/upload/v1756289893/iiz3q03isey2sc3xbg2r.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </motion.a>

      {/* SECOND - CHC */}
      <motion.a
        ref={targetRef2}
        style={!isMobile ? { opacity: opacity2, x: x2 } : mobileStyle}
        target="_blank"
        href="https://calvaryhillglobalchurch.org/"
        className="my-4 pt-10 section-two projects"
      >
        <video
          width="100%"
          height="100%"
          autoPlay
          loop
          playsInline
          muted
          className="project-video"
        >
          <source
            src="https://res.cloudinary.com/dyf0wsiaf/video/upload/v1756289888/jrmg0itfgykjdc7dznsh.mp4
"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="relative writeup">
          <div className="-top-7 max-md:-top-8 right-0 absolute bg-background px-3 font-bold lg:text-xl text-right">
            <h3 className="text-[#771b48]">CALVARY HILL CHURCH</h3>
            <p className="font-medium text-xs">NEXT NODE S3(STORAGE)</p>
          </div>

          <div className="two">
            <p className="p-2 pt-4 font-semibold text-xs lg:text-sm text-right">
              Built a fully responsive website for a church featuring a custom
              audio player, gallery section, and sermon playing and downloads.
              Integrated Amazon S3 for sermon storage and streaming. The site
              provides a seamless user experience across devices.
            </p>

            <h1 className="font-bold text-[#771b48] text-6xl md:text-7xl lg:text-8xl leading-none">
              02
            </h1>
          </div>
        </div>
      </motion.a>

      {/* THIRD - MOVIE */}
      <motion.a
        ref={targetRef3}
        style={!isMobile ? { opacity: opacity3, x: x3 } : mobileStyle}
        target="_blank"
        href="https://moviehq.vercel.app/"
        className="my-4 pt-10 section-one projects"
      >
        <div className="relative writeup">
          <div className="-top-7 max-md:-top-8 left-0 absolute bg-background px-2 font-bold lg:text-xl">
            <h3 className="text-[#771b48]">MOVIES HQ</h3>
            <p className="font-medium text-xs">REACT REDUX NODE TAILWIND</p>
          </div>

          <div className="one">
            <h1 className="font-bold text-[#771b48] text-6xl md:text-7xl lg:text-8xl leading-none">
              03
            </h1>

            <p className="p-2 pt-4 font-semibold text-xs lg:text-sm text-left">
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
          playsInline
          muted
          className="project-video"
        >
          <source
            src="https://res.cloudinary.com/dyf0wsiaf/video/upload/v1756291369/lzhcxhjdloupc8anhzef.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </motion.a>

      {/* FOURTH - JOHNNIE */}
      <motion.a
        ref={targetRef4}
        style={!isMobile ? { opacity: opacity4, x: x4 } : mobileStyle}
        target="_blank"
        href="https://scroll-anime.vercel.app/"
        className="my-4 pt-10 section-two projects"
      >
        <video
          width="100%"
          height="100%"
          autoPlay
          loop
          playsInline
          muted
          className="project-video"
        >
          <source
            src="https://res.cloudinary.com/dyf0wsiaf/video/upload/v1756289909/qnep0ubcjufdtzffjwug.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="relative writeup">
          <div className="-top-7 max-md:-top-8 right-0 absolute bg-background px-3 font-bold lg:text-xl text-right">
            <h3 className="text-[#771b48]">JOHNNIE WALKER</h3>
            <p className="font-medium text-xs">REACT FRAMER-MOTION</p>
          </div>

          <div className="two">
            <p className="p-2 pt-4 font-semibold text-xs lg:text-sm text-right">
              Created a visually engaging landing page for a beverage brand to
              practice advanced web animations. Focused on delivering a smooth
              user experience with animated elements and video backgrounds.
              <p className="font-bold text-red-500 text-xs lg:text-sm text-right">
                NOTE: Site is not fully optimized; asset loading may take some
                time.
              </p>
            </p>

            <h1 className="font-bold text-[#771b48] text-6xl md:text-7xl lg:text-8xl leading-none">
              04
            </h1>
          </div>
        </div>
      </motion.a>

      {/* FIFTH - ADMIN */}
      <motion.a
        ref={targetRef5}
        style={!isMobile ? { opacity: opacity5, x: x5 } : mobileStyle}
        target="_blank"
        href="https://ss-admin-dashboard.vercel.app/"
        className="my-4 pt-10 section-one projects"
      >
        <div className="relative writeup">
          <div className="-top-7 max-md:-top-8 left-0 absolute bg-background px-2 font-bold lg:text-xl">
            <h3 className="text-[#771b48]">CHUCKY ADMIN DASHBOARD</h3>
            <p className="font-medium text-xs"> REACT CHARTJS LEAFLETJS</p>
          </div>

          <div className="one">
            <h1 className="font-bold text-[#771b48] text-6xl md:text-7xl lg:text-8xl leading-none">
              05
            </h1>

            <p className="p-2 pt-4 font-semibold text-xs lg:text-sm text-left">
              Designed and developed a responsive admin dashboard frontend with
              static data visualization. Implemented interactive charts using
              Chart.js and integrated Leaflet.js for dynamic map features with
              custom pins.
            </p>
          </div>
        </div>

        <video
          width="100%"
          height="100%"
          autoPlay
          loop
          playsInline
          muted
          className="project-video"
        >
          <source
            src="https://res.cloudinary.com/dyf0wsiaf/video/upload/v1756289903/t9em8blab2mohm19ds4u.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </motion.a>

      {/* SIXTH - CHARITY */}
      <motion.a
        ref={targetRef6}
        style={!isMobile ? { scale } : mobileStyle}
        target="_blank"
        href="https://charity-master.onrender.com/"
        className="my-4 pt-10 section-two projects"
      >
        <video
          width="100%"
          height="100%"
          autoPlay
          playsInline
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
          <div className="-top-7 max-md:-top-8 right-0 absolute bg-background px-3 font-bold lg:text-xl text-right">
            <h3 className="text-[#771b48]">CHARITY</h3>
            <p className="font-medium text-xs">HTML CSS JS</p>
          </div>

          <div className="two">
            <p className="p-2 pt-4 font-semibold text-xs lg:text-sm text-right">
              Designed and developed a landing page for a nature charity
              organization using HTML, CSS, and JavaScript. The landing page
              features a clean, responsive design that showcases the
              organization's mission and ways to get involved. Engaging visuals,
              animations, and interactive elements.
            </p>

            <h1 className="font-bold text-[#771b48] text-6xl md:text-7xl lg:text-8xl leading-none">
              06
            </h1>
          </div>
        </div>
      </motion.a>
    </main>
  );
};

export default Grid;
