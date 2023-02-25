import React, { useState, useContext } from "react";
import { useInView } from "react-intersection-observer";
import M1 from "./Modal/M1";
import P1 from "./images/Project1/2.jpg";
import LanguageContext from "./Lng";

const Projects = ({ p1, p2, p3 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const { isEnglish } = useContext(LanguageContext);

  const [showM1, setShowM1] = useState(false);

  const closeM1 = () => setShowM1(false);

  return (
    <div id="projects" className="bg-[#1d1e26] pt-20 pb-60 text-white">
      <div>
        <h3 className="font-bold font-Poppins lg:text-4xl text-3xl text-center bg-[#1d1e26] tracking-widest">
          {isEnglish ? "PROJECTS" : "PROJEKTE"}
        </h3>
      </div>
      <div ref={ref} className={inView ? "fadeLeft" : "opacity-0"}>
        <div
          className="max-w-[1600px] mx-auto grid lg:grid-rows-1 lg:grid-cols-3
       grid-col-1 grid-rows-3 pb-24 lg:w-full w-9/12 gap-12 bg-[#1d1e26] pt-24"
        >
          <div
            onClick={() => setShowM1(true)}
            className="m-2  transition-all duration-200 ease-in-out cursor-pointer md:hover:scale-105 bg-[#1d1e26] active:translate-y-2"
          >
            <p className="text-2xl text-center bg-[#1d1e26] tracking-wide">
              Configurable Cash Register
            </p>
            <img src={P1} alt="first Project pic" className="rounded-xl"></img>
          </div>
          <div className="grid border-2 border-white m-2 text-3xl align-middle transition-all duration-200 ease-in-out cursor-pointer rounded-xl place-items-center md:hover:scale-105 bg-[#1d1e26] active:translate-y-2">
            <p className="bg-[#1d1e26]">
              {isEnglish ? "coming soon!" : "kommt bald!"}
            </p>
          </div>
          <div className="grid border-2 border-white m-2 text-3xl align-middle transition-all duration-200 ease-in-out cursor-pointer rounded-xl place-items-center md:hover:scale-105 bg-[#1d1e26] active:translate-y-2">
            <p className="bg-[#1d1e26]">
              {isEnglish ? "coming soon!" : "kommt bald!"}
            </p>
          </div>
        </div>
      </div>
      <M1 onClose={closeM1} visible={showM1} />
    </div>
  );
};

export default Projects;
