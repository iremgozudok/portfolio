import React from "react";
import Logo from "../asset/ing.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-700">
      <div>
        <img src={Logo} alt="logo image" className="w-28" />
      </div>

      <ul className="hidden md:flex text-xl">
        <li className="p-10 cursor-pointer">About Me</li>
        <li className="p-10 cursor-pointer">Skills</li>
        <li className="p-10 cursor-pointer">Projects</li>
        <li className="p-10 cursor-pointer">Contact</li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center"
        }
      >
        <li className="p-10 cursor-pointer">About Me</li>
        <li className="p-10 cursor-pointer">Skills</li>
        <li className="p-10 cursor-pointer">Projects</li>
        <li className="p-10 cursor-pointer">Contact</li>
      </ul>
    </div>
  );
}
