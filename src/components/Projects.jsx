import React from "react";
import p1 from "./images/Project1/1.jpg";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full bg-[#242424] px-4 pt-8 pb-16 text-white"
    >
      <h1 className="pb-2 text-2xl font-bold text-center">PROJECTS</h1>
      <div
        className="max-w-[1600px] mx-auto grid lg:grid-rows-1 lg:grid-cols-3
       grid-col-1 grid-rows-3 p-6"
      >
        <div className="m-2 transition-all duration-500 ease-in-out cursor-pointer hover:scale-105">
          <p className="text-2xl text-center">Configurable Cash Register</p>
          <img src={p1} alt="first Project pic" className="rounded-xl"></img>
        </div>
        <div className="grid m-2 text-3xl align-middle transition-all duration-500 ease-in-out cursor-pointer place-items-center hover:scale-105">
          <p>working on it...</p>
        </div>
        <div className="grid m-2 text-3xl align-middle transition-all duration-500 ease-in-out cursor-pointer place-items-center hover:scale-105">
          <p>working on it...</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
