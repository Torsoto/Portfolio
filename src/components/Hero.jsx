import React, { useContext } from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

import LanguageContext from "./Lng";
import Design from "./images/svgs/hero.svg";

function Hero() {
  const { isEnglish, isDarkMode } = useContext(LanguageContext);

  return (
    <div
      id="Home"
      className={`pt-32 lg:pt-40  ${
        isDarkMode ? "bg-[#0d1117] text-white" : "text-black bg-[#efefef]"
      }`}
    >
      <div className="grid  lg:grid-cols-2 mx-auto text-2xl  md:text-4xl max-w-[1400px]">
        <div className="order-1 m-auto text-center lg:pl-8 lg:text-left lg:order-none">
          <p className="">
            {isEnglish ? "Hi There" : "Hallo"}
            <span className="inline-block p-2 ronded-full animate-wave">
              👋
            </span>
            {isEnglish ? "I'm" : "Ich bin"}
          </p>
          <h1 className="text-[#fe3e57] py-4 text-5xl font-extrabold tracking-wide md:text-6xl lg:text-7xl font-Poppins whitespace-nowrap ">
            <Typed
              strings={["TOLGA TOPAL ", "TORSOTO", "Tolga Topal", "Torsoto"]}
              typeSpeed={60}
              backSpeed={150}
              loop
            />
          </h1>
          <p className="text-xl md:text-2xl">
            {isEnglish
              ? "Computer Science and Digital Communications student"
              : "Computer Science and Digital Communications Student"}
          </p>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-80}
          >
            <button className="py-3 px-4 shadow-md shadow-black mt-4 text-2xl font-bold text-white transition-all duration-100 ease-in-out bg-[#fe3e57] rounded-lg lg:hover:scale-105 active:translate-y-1">
              {isEnglish ? "Contact Me" : "Kontakt"}
            </button>
          </Link>
        </div>
        <div className="p-8">
          <img src={Design} alt="Hero Design" className="mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
