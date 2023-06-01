import React from "react";
import { data } from "../data/data";

function Projects() {
  const project = data;
  //Comment var
  return (
    <div name="projects" className="w-full">
      <div className="max-w-[1000px] mx-auto py-40 px-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="font-bold inline border-b-4 border-pink-500 text-4xl">
            Projects
          </p>
          <p className="py-4">// Check out some of my recent projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-gray-400 group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold tracking-wider">
                  {item.name}
                </span>
                <div className="pt-8 text-center">
                  <a href={item.link} target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      {item.path}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
