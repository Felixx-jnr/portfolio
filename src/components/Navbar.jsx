import React, { useState, useEffect, useRef } from "react";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animateClass, setAnimateClass] = useState("");
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setAnimateClass("slide-out");
      setTimeout(() => setIsMenuOpen(false), 300);
    } else {
      setIsMenuOpen(true);
      setAnimateClass("slide-in");
    }
  };

  useEffect(() => {
    const closeMenu = (e) => {
      if (
        isMenuOpen &&
        dropdownRef.current &&
        dropdownRef.current.contains(e.target)
      ) {
        setAnimateClass("slide-out");
        setTimeout(() => setIsMenuOpen(false), 300);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [isMenuOpen]);

  return (
    <div className="fixed left-1/2 -translate-x-1/2 w-[100%] rounded-lg z-50">
      <nav>
        <div className="mx-auto flex justify-between items-center w-[86%] h-10 bg-white/50 px-3 rounded-xl backdrop-blur-sm border-2 border-white  ">
          <div>
            <a
              href="#"
              className="font-bold text-xl sm:text-2xl md:text-3xl"
            >
              FELIX UDOH
            </a>
          </div>

          <div className="hidden md:block">
            <ul className="flex space-x-3 lg:space-x-5 text-xl font-semibold">
              <li>
                <a href="#">Project</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <ul className="flex space-x-2 lg:space-x-4  text-2xl">
              <li>
                <FaLinkedin />
              </li>
              <li>
                <FaGithub />
              </li>
              <li>
                <FaXTwitter />
              </li>
              <li>
                <FaEnvelope />
              </li>
            </ul>
          </div>

          <div className="block md:hidden">
            {/* Hamburger menu for mobile */}
            <button
              className="font-bold text-xl sm:text-2xl md:text-3xl bars-button flex "
              onClick={toggleMenu}
            >
              {isMenuOpen ? "" : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile menu with overlay */}
        {isMenuOpen && (
          <>
            <div
              className="fixed"
              onClick={toggleMenu}
            ></div>
            <div
              className={`absolute bg-sky-100 flex flex-col justify-center items-center -top-2 right-0 md:hidden z-50 h-screen w-screen ${animateClass}`}
              ref={dropdownRef}
            >
              <div className="absolute top-2 flex justify-between items-center w-[86%] bg-white/50 h-10 px-3 rounded-xl backdrop-blur-lg border-2 border-white">
                <div>
                  <a
                    href="#"
                    className="font-bold text-xl sm:text-2xl md:text-3xl"
                  >
                    FELIX UDOH
                  </a>
                </div>
                <FaTimes className="font-bold text-xl sm:text-2xl md:text-3xl" />
              </div>

              <ul className="flex flex-col mt-3 space-y-3 items-center text-xl sm:text-2xl font-semibold text-black ">
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300"
                  >
                    Project
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>

              <div>
                <ul className="flex space-x-3 sm:space-x-5 justify-center my-4 text-xl sm:text-2xl">
                  <li>
                    <FaLinkedin />
                  </li>
                  <li>
                    <FaGithub />
                  </li>
                  <li>
                    <FaXTwitter />
                  </li>
                  <li>
                    <FaEnvelope />
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
