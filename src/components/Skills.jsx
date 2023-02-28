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

  const { isEnglish, isDarkMode } = useContext(LanguageContext);

  return (
    <div className="w-full pb-12  bg-[#161b22]">
      <div className="bg-transparent ">
        <h4 className="text-3xl font-bold tracking-widest text-center text-white bg-transparent lg:text-4xl">
          {isEnglish ? "SKILLS" : "FÄHIGKEITEN"}
        </h4>
      </div>
      <div
        ref={ref}
        id="Skills"
        className={
          inView
            ? "fadeLeft w-full py-24 text-white bg-transparent max-w-[1600px] mx-auto "
            : "w-full py-16 text-white bg-transparent max-w-[1600px] mx-auto invisible"
        }
      >
        <ul className="flex flex-wrap pb-12 bg-transparent justify-evenly">
          <li className="bg-transparent">
            <img
              title="HTML5 Logo"
              src={html}
              alt="html logo"
              className="h-32 bg-transparent"
            />
            <p className="text-2xl tracking-tighter text-center bg-transparent">
              HTML
            </p>
          </li>
          <li className="bg-transparent">
            <img
              src={css}
              title="CSS3 Logo"
              alt="html logo"
              className="h-32 bg-transparent "
            />
            <p className="text-2xl tracking-tighter text-center bg-transparent">
              CSS
            </p>
          </li>
          <li className="bg-transparent w-[8rem]">
            <img
              src={javascript}
              title="Javascript Logo"
              alt="Javascript Logo"
              className="bg-transparent h-[6.5rem] mt-[0.8rem] w-[5.8rem] mx-auto"
            />
            <p className="text-center bg-transparent text-2xl translate-y-[10px]">
              Javascript
            </p>
          </li>
          <li className="bg-transparent">
            <img
              src={java}
              alt="Java Logo"
              title="Java Logo"
              className="h-32 bg-transparent"
            />
            <p className="text-2xl text-center bg-transparent">Java</p>
          </li>
          <li className="bg-transparent">
            <img
              src={python}
              alt="python logo"
              title="Python Logo"
              className="h-32 bg-transparent"
            />
            <p className="text-2xl text-center bg-transparent">Python</p>
          </li>
          <li className="bg-transparent">
            <img
              src={react}
              alt="React Logo"
              title="React Logo"
              className="h-32 bg-transparent"
            />
            <p className="text-2xl text-center bg-transparent">React</p>
          </li>
          <li className="bg-transparent">
            <img
              src={tailwind}
              alt="Tailwind CSS Logo"
              title="Tailwind CSS Logo"
              className="h-32 bg-transparent"
            />
            <p className="text-2xl text-center bg-transparent">Tailwind CSS</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
