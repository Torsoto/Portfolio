import React from "react";
import css from "./images/logos/css.png";
import html from "./images/logos/html.png";
import java from "./images/logos/java.png";
import javascript from "./images/logos/javascript.png";
import python from "./images/logos/python.png";
import react from "./images/logos/react.png";
import tailwind from "./images/logos/tailwind.png";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref, inView } = useInView();
  return (
    <div className="w-full bg-[#F3F3F3]">
      <div ref={ref} className={inView ? "animate-fadeIn" : ""}>
        <h1 className="pt-8 pb-4 lg:text-4xl text-3xl tracking-widest font-bold text-center text-black bg-[#F3F3F3] font-Poppins">
          SKILLS
        </h1>
      </div>
      <div></div>
      <div
        ref={ref}
        id="Skills"
        className={
          inView
            ? "fadeLeft w-full py-16 text-black bg-[#F3F3F3] max-w-[1600px] mx-auto"
            : "w-full py-16 text-black bg-[#F3F3F3] max-w-[1600px] mx-auto"
        }
      >
        <ul className="flex justify-evenly bg-[#F3F3F3] pb-12">
          <li className="bg-[#F3F3F3]">
            <img src={html} alt="html logo" className="bg-[#F3F3F3] h-32" />
          </li>
          <li className="bg-[#F3F3F3]">
            <img src={css} alt="html logo" className="bg-[#F3F3F3] h-32" />
          </li>
          <li className="bg-[#F3F3F3] w-[8rem]">
            <img
              src={javascript}
              alt="javascript logo"
              className="bg-[#F3F3F3] h-[6.5rem] mt-[0.8rem] w-[4.8rem] md:w-[5.9rem] lg:w-[5.9rem] mx-auto"
            />
          </li>
          <li className="bg-[#F3F3F3]">
            <img src={java} alt="html logo" className="bg-[#F3F3F3] h-32" />
          </li>
          <li className="bg-[#F3F3F3]">
            <img src={python} alt="html logo" className="bg-[#F3F3F3] h-32" />
          </li>
          <li className="bg-[#F3F3F3]">
            <img src={react} alt="html logo" className="bg-[#F3F3F3] h-32" />
          </li>
          <li className="bg-[#F3F3F3]">
            <img src={tailwind} alt="html logo" className="bg-[#F3F3F3] h-32" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
