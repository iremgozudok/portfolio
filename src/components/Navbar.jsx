import React from "react";
import Logo from "../asset/ing.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-700 bg-white">
      <div className="z-10">
        <img src={Logo} alt="logo image" className="w-20" />
      </div>

      <ul className="hidden md:flex text-xl">
        <li className="p-10 cursor-pointer">
          <a href="#about-me">About Me</a>
        </li>
        <li className="p-10 cursor-pointer">
          <a href="#skills">Skills</a>
        </li>
        <li className="p-10 cursor-pointer">
          <a href="#projects">Projects</a>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-white"
        }
      >
        <li className="p-5 font-bold text-2xl cursor-pointer">
          <a onClick={handleClick} href="#about-me">
            About Me
          </a>
        </li>
        <li className="p-5 font-bold text-2xl cursor-pointer">
          <a onClick={handleClick} href="#skills">
            Skills
          </a>
        </li>
        <li className="p-5 font-bold text-2xl cursor-pointer">
          <a onClick={handleClick} href="#projects">
            Projects
          </a>
        </li>
      </ul>
    </div>
  );
}
