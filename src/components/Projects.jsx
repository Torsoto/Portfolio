import React from "react";
import p1 from "./images/Project1/2.jpg";

const Projects = () => {
  return (
    <div id="projects" className="bg-[#1d1e26] pt-8 pb-12 text-white">
      <h1 className="font-bold font-Poppins text-3xl text-center bg-[#1d1e26]">
        PROJECTS
      </h1>
      <div
        className="max-w-[1600px] mx-auto grid lg:grid-rows-1 lg:grid-cols-3
       grid-col-1 grid-rows-3 pb-24 lg:w-full w-9/12 gap-12 bg-[#1d1e26] pt-24"
      >
        <div className="m-2 transition-all duration-500 ease-in-out cursor-pointer hover:scale-105 bg-[#1d1e26]">
          <p className="text-2xl text-center bg-[#1d1e26]">
            Configurable Cash Register
          </p>
          <img src={p1} alt="first Project pic" className="rounded-xl"></img>
        </div>
        <div className="grid m-2 text-3xl align-middle transition-all duration-500 ease-in-out cursor-pointer rounded-xl place-items-center hover:scale-105 bg-[#1d1e26]">
          <p className="bg-[#1d1e26]">working on it...</p>
        </div>
        <div className="grid m-2 text-3xl align-middle transition-all duration-500 ease-in-out cursor-pointer rounded-xl place-items-center hover:scale-105 bg-[#1d1e26]">
          <p className="bg-[#1d1e26]">working on it...</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
