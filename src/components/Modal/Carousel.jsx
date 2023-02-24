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
    <div className="relative overflow-hidden bg-white">
      <div
        className="flex transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4 bg-transparent">
        <button
          onClick={prev}
          className="p-[5px] transition-all duration-200 ease-in-out bg-black bg-opacity-70 rounded-full shadow hover:bg-black hover:scale-110"
        >
          <SlArrowLeft className="pr-1 text-white bg-transparent " size={40} />
        </button>
        <button
          onClick={next}
          className="p-[5px] transition-all duration-200 ease-in-out bg-black bg-opacity-70 rounded-full shadow hover:bg-black hover:scale-110"
        >
          <SlArrowRight className="pl-1 text-white bg-transparent" size={40} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
