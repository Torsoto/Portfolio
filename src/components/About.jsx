import React, { useState } from "react";
import profile from "./images/profile1.jpg";
import { GrMapLocation } from "react-icons/gr";
import { useInView } from "react-intersection-observer";

export const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div id="about" className="w-full px-4 pb-60 pt-20 bg-[#F3F3F3] z-0">
      <h1 className="fadeUp lg:text-4xl text-3xl font-bold text-center text-black bg-[#F3F3F3] tracking-widest">
        ABOUT ME
      </h1>
      <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 pt-20 lg:grid-col-2 xl:grid-col-2 place-items-center bg-[#F3F3F3]">
        <div
          ref={ref}
          className={
            inView
              ? "lg:fadeLeft fadeUp bg-[#F3F3F3] relative"
              : "bg-[#F3F3F3] relative"
          }
        >
          <img
            src={profile}
            alt="ME"
            className="border-t-[20px] border-l-[20px] border-r-[20px] border-b-[40px] border-white shadow-2xl z-0 w-[420px] fadeLeft rounded-2xl"
          ></img>
          <div className="absolute left-0 right-0 z-10 pt-4 text-center bg-white bottom-3">
            <p className="inline-flex items-center font-mono font-bold text-black bg-white">
              <span className="pt-1 mr-4 text-xl bg-white lg:text-xl font-Montserrat">
                ME IN PRAGUE
              </span>
              <a
                href="https://www.google.com/maps/@50.0894573,14.39904,3a,75y,110.28h,82.77t/data=!3m6!1e1!3m4!1sAF1QipMqoJJKVXgNUbTWCqJahUcItL6NCD1VoBzj13rr!2e10!7i7680!8i3840"
                title="location in photo"
              >
                <GrMapLocation
                  size={25}
                  className="transition-all duration-200 ease-in-out bg-white hover:scale-110 md:w-6 md:h-6"
                  target="_blank"
                />
              </a>
            </p>
          </div>
        </div>
        <div
          ref={ref}
          className={inView ? "lg:fadeRight fadeDown bg-[#F3F3F3]" : ""}
        >
          <p className="bg-[#F3F3F3] font-Poppins text-lg md:text-xl lg:text-2xl text-center mx-4 p-8 md:p-0 md:text-left lg:tracking-widest">
            I'm Tolga Topal aka{" "}
            <a
              href="https://github.com/Torsoto"
              className="bg-[#F3F3F3] text-violet-700 font-bold"
              title="My Github"
            >
              Torsoto
            </a>
            , a 21-year-old student.
            <br />
            <br />
            When I'm not working out at the gym, I enjoy coding and creating
            useful & interesting projects.
            <br />
            <br />
            In my free time, I also love playing video games and watching
            movies/tv-series. As a learning developer with a passion for fitness
            and Tech, I am always seeking new challenges and opportunities to
            improve my craft.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
