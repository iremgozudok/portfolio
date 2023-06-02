import React from "react";
import { data } from "../data/data";
import { HiOutlineExternalLink } from "react-icons/hi";

function Projects() {
  const project = data;
  //Comment var
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1000px] mx-auto py-40 px-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="font-bold inline border-b-4 border-pink-500 text-4xl">
            Projects
          </p>
          <p className="py-4">
            // Check out some of my recent projects, click for details.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
          {project.map((item, index) => (
            <a
              target="_blank"
              href={item.link}
              key={index}
              // style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-gray-200 group container rounded-md content-div border border-gray-200 hover:scale-110 duration-200 transition-all"
            >
              <img
                className="object-cover aspect-video rounded-t-lg"
                src={item.image}
                alt=""
              />
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <HiOutlineExternalLink color="black" />
                  <div className="text-sm font-semibold">{item.name}</div>
                </div>
                <div className="flex items-center flex-wrap space-y-1 text-xs mt-2">
                  {item.techs.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="py-1 px-2 bg-gray-200 text-black text-xs mr-1 rounded-full"
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
                {/* <div className="mt-4 py-1 border border-gray-100 rounded-full text-center">
                  {item.path}
                </div> */}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
