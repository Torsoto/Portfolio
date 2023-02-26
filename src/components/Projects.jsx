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
    <div id="projects" className="bg-[#0d2244] pt-20 pb-60 text-white">
      <div className="bg-[#0d2244]">
        <h3 className="font-bold lg:text-4xl text-3xl text-center text-[#fe3e57] bg-[#0d2244] tracking-widest">
          {isEnglish ? "PROJECTS" : "PROJEKTE"}
        </h3>
      </div>
      <div
        ref={ref}
        className={inView ? "fadeLeft bg-[#0d2244]" : "opacity-0  bg-[#0d2244]"}
      >
        <div
          className="max-w-[1600px] mx-auto grid lg:grid-rows-1 lg:grid-cols-3
       grid-col-1 grid-rows-3 pb-24 lg:w-full w-9/12 gap-12 bg-[#0d2244] pt-24"
        >
          <div
            onClick={() => setShowM1(true)}
            className="m-2  transition-all duration-200 ease-in-out cursor-pointer md:hover:scale-105 bg-[#0d2244] active:translate-y-2"
          >
            <p className="md:text-3xl text-xl pb-1 text-center bg-[#0d2244] tracking-wide">
              Configurable Cash Register
            </p>
            <img
              src={P1}
              alt="first Project pic"
              className="shadow-xl rounded-2xl shadow-black "
            ></img>
          </div>
          <div className="grid m-2 text-2xl lg:text-3xl align-middle transition-all duration-200 ease-in-out cursor-pointer rounded-xl place-items-center md:hover:scale-105 bg-[#0d2244] active:translate-y-2">
            <p className="bg-[#0d2244]">
              {isEnglish ? "coming soon!" : "kommt bald!"}
            </p>
          </div>
          <div className="grid  m-2 text-2xl lg:text-3xl align-middle transition-all duration-200 ease-in-out cursor-pointer rounded-xl place-items-center md:hover:scale-105 bg-[#0d2244] active:translate-y-2">
            <p className="bg-[#0d2244]">
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
