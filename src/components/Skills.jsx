import React, { useContext } from "react";
import css from "./images/logos/css.png";
import html from "./images/logos/html.png";
import java from "./images/logos/java.png";
import javascript from "./images/logos/javascript.png";
import python from "./images/logos/python.png";
import react from "./images/logos/react.png";
import tailwind from "./images/logos/tailwind.png";
import { useInView } from "react-intersection-observer";
import LanguageContext from "./Lng";

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const { isEnglish } = useContext(LanguageContext);

  return (
    <div className="w-full bg-[#0d2244] pb-12">
      <div className=" bg-[#0d2244]">
        <h4 className="lg:text-4xl  text-3xl font-bold text-center text-[#fe3e57] bg-[#0d2244] tracking-widest">
          {isEnglish ? "SKILLS" : "FÄHIGKEITEN"}
        </h4>
      </div>
      <div
        ref={ref}
        id="Skills"
        className={
          inView
            ? "fadeLeft w-full py-24 text-white bg-[#0d2244] max-w-[1600px] mx-auto "
            : "w-full py-16 text-white bg-[#0d2244] max-w-[1600px] mx-auto invisible"
        }
      >
        <ul className="flex justify-evenly flex-wrap bg-[#0d2244] pb-12">
          <li className="">
            <img
              title="HTML5 Logo"
              src={html}
              alt="html logo"
              className="bg-[#0d2244] h-32"
            />
            <p className="text-center bg-[#0d2244] tracking-tighter text-2xl">
              HTML
            </p>
          </li>
          <li className="">
            <img
              src={css}
              title="CSS3 Logo"
              alt="html logo"
              className="bg-[#0d2244] h-32 "
            />
            <p className="text-center bg-[#0d2244] tracking-tighter text-2xl">
              CSS
            </p>
          </li>
          <li className="bg-[#0d2244] w-[8rem]">
            <img
              src={javascript}
              title="Javascript Logo"
              alt="Javascript Logo"
              className="bg-[#0d2244] h-[6.5rem] mt-[0.8rem] w-[5.8rem] mx-auto"
            />
            <p className="text-center bg-[#0d2244] text-2xl translate-y-[10px]">
              Javascript
            </p>
          </li>
          <li className="">
            <img
              src={java}
              alt="Java Logo"
              title="Java Logo"
              className="bg-[#0d2244] h-32"
            />
            <p className="text-center bg-[#0d2244] text-2xl">Java</p>
          </li>
          <li className="">
            <img
              src={python}
              alt="python logo"
              title="Python Logo"
              className="bg-[#0d2244] h-32"
            />
            <p className="text-center bg-[#0d2244] text-2xl">Python</p>
          </li>
          <li className="">
            <img
              src={react}
              alt="React Logo"
              title="React Logo"
              className="bg-[#0d2244] h-32"
            />
            <p className="text-center bg-[#0d2244] text-2xl">React</p>
          </li>
          <li className="bg-[#0d2244]">
            <img
              src={tailwind}
              alt="Tailwind CSS Logo"
              title="Tailwind CSS Logo"
              className="bg-[#0d2244] h-32"
            />
            <p className="text-center bg-[#0d2244] text-2xl">Tailwind CSS</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
