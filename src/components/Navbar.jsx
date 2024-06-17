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
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const closeMenu = (e) => {
      if (
        isMenuOpen &&
        dropdownRef.current &&
        dropdownRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [isMenuOpen]);

  return (
    <div className="fixed left-1/2 -translate-x-1/2 w-[100%] rounded-lg">
      <nav>
        <div className=" mx-auto flex justify-between items-center w-[92%] bg-red-400/50 px-3 py-1 rounded-full">
          <div>
            <a
              href="#"
              className="text-white font-bold text-3xl"
            >
              FELIX UDOH
            </a>
          </div>

          <div className="hidden md:block">
            <ul className="flex space-x-4 text-2xl">
              <li>
                <a
                  href="#"
                  className=" "
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=""
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=""
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=""
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <ul className="flex space-x-4 text-2xl">
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
              className="text-white text-3xl bars-button flex"
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
              className="fixed flex flex-col justify-center items-center bg-white/80 md:hidden z-50 -top-5 h-screen w-screen "
              ref={dropdownRef}
            >
              <FaTimes className="absolute top-5 right-8 text-3xl " />

              <ul className="flex flex-col mt-3 space-y-5 text-2xl items-center text-black">
                <li>
                  <a
                    href="#"
                    className=" hover:text-gray-300"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className=" hover:text-gray-300"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className=" hover:text-gray-300"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className=" hover:text-gray-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>

              <div>
                <ul className="flex space-x-4 text-2xl justify-center my-4">
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
