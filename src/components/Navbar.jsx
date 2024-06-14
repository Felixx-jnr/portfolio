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
      // Check if the click is outside the mobile menu and the bars button
      if (isMenuOpen && !e.target.classList.contains("bars-button")) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener("click", closeMenu);

    // Cleanup the event listener when component unmounts
    return () => document.removeEventListener("click", closeMenu);
  }, [isMenuOpen]);

  return (
    <nav className="fixed bg-gray-800/30 p-2 left-1/2 -translate-x-1/2 w-[95%] rounded-lg navbar">
      <div className=" mx-auto flex justify-between items-center">
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
                className="text-white hover:text-gray-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300"
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
            className="text-white text-3xl bars-button"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className="md:hidden"
          ref={dropdownRef}
        >
          <ul className="flex flex-col mt-3 space-y-5 text-2xl items-center">
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300"
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
      )}
    </nav>
  );
};

export default Navbar;
