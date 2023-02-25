import React, { useContext, useState } from "react";
import Typed from "react-typed";
import German from "./images/svgs/germany-flag.svg";
import England from "./images/svgs/UK-flag.svg";
import LanguageContext from "./Lng";

function Hero() {
  const { isEnglish, setIsEnglish } = useContext(LanguageContext);
  const [activeImage, setActiveImage] = useState(null);

  const handleClick = (isEnglish) => {
    setIsEnglish(isEnglish);
    setActiveImage(isEnglish ? "EN" : "DE");
  };

  return (
    <div className="pt-16 text-white">
      <div className="flex flex-col justify-center mx-auto text-2xl text-center h-[40rem] md:text-4xl">
        <p className="tracking-widest font-Montserrat">
          {isEnglish ? "HI THERE" : "HALLO"}
          <span className="inline-block p-2 rounded-full animate-wave">👋</span>
          {isEnglish ? "I'M" : "ICH BIN"}
        </p>
        <h1 className="p-4 text-5xl font-extrabold tracking-wide md:text-7xl sm:text-6xl font-Poppins">
          <Typed
            strings={["TOLGA TOPAL ", "TORSOTO", "Tolga Topal", "Torsoto"]}
            typeSpeed={60}
            backSpeed={150}
            loop
          />
        </h1>
        <div>
          <p className="p-2 text-xl font-Montserrat md:text-2xl">
            {isEnglish
              ? "Computer Science and Digital Communications student at FH Campus Wien"
              : "Computer Science and Digital Communications Student auf der FH Campus Wien"}
          </p>
          <div className="flex gap-10 pt-4 place-content-center">
            <img
              src={German}
              alt="flag of germany"
              className={`max-w-[60px] lg:active:translate-y-2 cursor-pointer hover:scale-110 transition-all duration-150 ease-in ${
                activeImage === "DE" ? "opacity-100" : "opacity-40"
              }`}
              onClick={() => handleClick(false)}
              style={{ opacity: isEnglish ? "0.4" : "1" }}
            />
            <img
              src={England}
              alt="flag of england"
              className={`max-w-[60px] lg:active:translate-y-2 cursor-pointer hover:scale-110 transition-all duration-150 ease-in ${
                activeImage === "EN" ? "opacity-100" : "opacity-40"
              }`}
              onClick={() => handleClick(true)}
              style={{ opacity: isEnglish ? "1" : "0.4" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
