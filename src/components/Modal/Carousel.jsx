import React, { useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const Carousel = ({ children: slides }) => {
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="relative overflow-hidden bg-white rounded-md shadow-md shadow-black ">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4 bg-transparent">
        <button
          onClick={prev}
          className="p-[5px] transition-all  duration-200 ease-in-out bg-black bg-opacity-70 rounded-full shadow hover:bg-black hover:scale-110 "
        >
          <SlArrowLeft
            className="pr-1 w-[16px] h-[16px] md:w-[28px] md:h-[28px] lg:w-[40px] lg:h-[40px] text-white bg-transparent"
            size={40}
          />
        </button>
        <button
          onClick={next}
          className="p-[5px] transition-all duration-200 ease-in-out bg-black bg-opacity-70 rounded-full shadow hover:bg-black hover:scale-110"
        >
          <SlArrowRight
            className="pl-1 w-[16px] h-[16px] md:w-[28px] md:h-[28px] lg:w-[40px] lg:h-[40px] text-white bg-transparent"
            size={40}
          />
        </button>
      </div>
      <div className="absolute left-0 right-0 bg-transparent bottom-4">
        {" "}
        <div className="flex items-center justify-center gap-2 bg-transparent">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-[8px] h-[8px] md:w-2 md:h-2 lg:w-3 lg:h-3 bg-black opacity-70 rounded-full
              ${curr === i ? "p-[5px] md:p-2" : "bg-opacity-50 "}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
