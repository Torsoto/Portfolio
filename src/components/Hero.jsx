import React from "react";
import Typed from "react-typed";
import Luffy from "../components/images/LUFFYNR1.jpg";

function Hero() {
  return (
    <div className="pt-16 text-white">
      <div className="flex flex-col justify-center mx-auto text-2xl text-center h-[40rem] md:text-4xl">
        <img
          src={Luffy}
          alt="Profile"
          className="mx-auto rounded-full w-[110px] md:w-[150px] mb-8"
          title="My usual Profile-pic"
        ></img>
        <p className="tracking-widest font-Montserrat">
          HI THERE
          <span className="inline-block p-2 rounded-full animate-wave">👋</span>
          I'M
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
            Computer Science and Digitial Communications Student at FH Campus
            Wien
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
