import React from "react";
import HTML from "../asset/html.png";
import CSS from "../asset/css.png";
import JavaScript from "../asset/javascript.png";
import ReactImg from "../asset/react.png";
import TailwindImg from "../asset/tailwind.png";
import Github from "../asset/github.png";
import Bootstrap from "../asset/bootstrap.png";

function Skills() {
  return (
    <div id="skills" className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="font-bold inline border-b-4 border-pink-500 text-4xl">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-lg shadow-gray-200 hover:scale-110 duration-500 rounded-xl">
            <img className="mx-auto h-28 py-4" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-lg shadow-gray-200 hover:scale-110 duration-500 rounded-xl">
            <img className="mx-auto h-28 py-4" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-lg shadow-gray-200 hover:scale-110 duration-500 rounded-xl ">
            <img
              className="mx-auto h-28 py-4"
              src={JavaScript}
              alt="HTML icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-lg shadow-gray-200 hover:scale-110 duration-500 rounded-xl">
            <img className="mx-auto h-28 py-4" src={ReactImg} alt="HTML icon" />
            <p className="my-4">React.js</p>
          </div>
          <div className="shadow-lg shadow-gray-200 hover:scale-110 duration-500 rounded-xl">
            <img className="mx-auto h-28 py-4" src={Github} alt="HTML icon" />
            <p className="my-4">Github</p>
          </div>
          <div className="shadow-lg shadow-gray-200 hover:scale-110 duration-500 rounded-xl">
            <img
              className="mx-auto h-28 py-4"
              src={TailwindImg}
              alt="HTML icon"
            />
            <p className="my-4">Tailwindcss</p>
          </div>
          <div className="shadow-lg shadow-gray-200 hover:scale-110 duration-500 rounded-xl">
            <img
              className="mx-auto h-28 py-4"
              src={Bootstrap}
              alt="HTML icon"
            />
            <p className="my-4">Bootstrap</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
