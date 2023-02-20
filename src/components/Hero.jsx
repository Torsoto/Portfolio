import React from "react";
import Typed from "react-typed";
import Luffy from "../components/images/LUFFYNR1.jpg";

function Hero() {
  return (
    <div className="text-white">
      <div className="flex flex-col justify-center mx-auto text-2xl text-center h-[40rem] md:text-4xl">
        <img
          src={Luffy}
          alt="Profile"
          className="mx-auto rounded-full w-[70px] md:w-[100px] "
          title="My usual Profile-pic"
        ></img>
        <p className="">
          HI THERE
          <span className="inline-block p-2 rounded-full animate-wave">👋</span>
          I'M
        </p>
        <h1 className="p-4 text-5xl font-bold md:text-7xl sm:text-5xl ">
          <Typed
            strings={["Tolga Topal ", "Torsoto"]}
            typeSpeed={60}
            backSpeed={150}
            loop
          />
        </h1>
        <div>
          <p className="p-2 font-mono text-xl md:text-2xl">
            Computer Science and Digitial Communications Student at FH Campus
            Wien
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
