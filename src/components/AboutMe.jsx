import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutMe() {
  return (
    <div name="about-me" className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-500">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-700">
          Irem Nur Gozudok
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-600">
          I'm a Front-end Developer.
        </h2>
        <p className="text-gray-500 max-w-[700px] py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          beatae nesciunt earum! Vel tenetur molestiae sequi, blanditiis ipsam
          expedita harum?
        </p>
        <div>
          <button className="border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-500 hover:text-white">
            View Projects <AiOutlineArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
