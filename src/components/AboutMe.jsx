import React from "react";
import {
  AiOutlineArrowRight,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { IoIosMail } from "react-icons/io";

function AboutMe() {
  return (
    <div id="about-me" className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-500">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-700">
          Irem Nur Gozudok
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-600">
          I'm a Front-end Developer.
        </h2>
        <p className="text-gray-500 max-w-[700px] py-4">
          I’m passionate about software development and I’m skilled in HTML,
          CSS, JavaScript, and React. I’m now looking for a junior dev position
          as I recently learned how to code by myself.
        </p>
        <div>
          <button className="py-2 my-2 flex items-center">
            <div className="flex justify-center w-full gap-4">
              <div className="bg-gray-100 hover:bg-pink-100 rounded-full p-3">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/irem-nur-gozudok-208b11260/"
                >
                  <AiFillLinkedin size={32} />
                </a>
              </div>
              <div className="bg-gray-100 hover:bg-pink-100 rounded-full p-3">
                <a target="_blank" href="https://github.com/iremgozudok">
                  <AiFillGithub size={32} />
                </a>
              </div>
              <div className="bg-gray-100 hover:bg-pink-100 rounded-full p-3">
                <a target="_blank" href="mailto:iremgozudok99@icloud.com">
                  <IoIosMail size={32} />
                </a>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
