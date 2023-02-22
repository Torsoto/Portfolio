import React from "react";
import p1 from "./images/Project1/2.jpg";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref, inView } = useInView();

  return (
    <div id="projects" className="bg-[#1d1e26] pt-20 pb-60 text-white">
      <div ref={ref} className={inView ? "" : ""}>
        <h1 className="font-bold font-Poppins lg:text-4xl text-3xl text-center bg-[#1d1e26] tracking-widest">
          PROJECTS
        </h1>
      </div>
      <div ref={ref} className={inView ? "fadeLeft" : ""}>
        <div
          className="max-w-[1600px] mx-auto grid lg:grid-rows-1 lg:grid-cols-3
       grid-col-1 grid-rows-3 pb-24 lg:w-full w-9/12 gap-12 bg-[#1d1e26] pt-24"
        >
          <div className="m-2  transition-all duration-200 ease-in-out cursor-pointer hover:scale-105 bg-[#1d1e26] active:translate-y-2">
            <p className="text-2xl text-center bg-[#1d1e26] tracking-wide">
              Configurable Cash Register
            </p>
            <img src={p1} alt="first Project pic" className="rounded-xl"></img>
          </div>
          <div className="grid border-2 border-white m-2 text-3xl align-middle transition-all duration-200 ease-in-out cursor-pointer rounded-xl place-items-center hover:scale-105 bg-[#1d1e26] active:translate-y-2">
            <p className="bg-[#1d1e26]">working on it...</p>
          </div>
          <div className="grid border-2 border-white m-2 text-3xl align-middle transition-all duration-200 ease-in-out cursor-pointer rounded-xl place-items-center hover:scale-105 bg-[#1d1e26] active:translate-y-2">
            <p className="bg-[#1d1e26]">working on it...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
