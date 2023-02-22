import React from "react";
import profile from "./images/profile1.jpg";
import { GrMapLocation } from "react-icons/gr";

export const About = () => {
  return (
    <div id="about" className="w-full px-4 pt-8 pb-24 bg-[#F3F3F3]">
      <h1 className="lg:text-4xl text-3xl font-bold text-center text-black bg-[#F3F3F3] font-Poppins tracking-widest">
        ABOUT ME
      </h1>
      <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 pt-20 lg:grid-col-2 xl:grid-col-2 place-items-center bg-[#F3F3F3]">
        <div className="bg-[#F3F3F3] relative">
          <img
            src={profile}
            alt="ME"
            className="border-t-[20px] border-l-[20px] border-r-[20px] border-b-[40px] border-white shadow-2xl  w-96 rounded-sm"
          ></img>
          <div className="absolute left-0 right-0 z-10 text-center bg-white bottom-3">
            <p className="inline-flex items-center font-mono font-bold text-black bg-white">
              <span className="mr-2 bg-white">
                picture of me in Prague -{">"}{" "}
              </span>
              <a
                href="https://www.google.com/maps/@50.0894573,14.39904,3a,75y,110.28h,82.77t/data=!3m6!1e1!3m4!1sAF1QipMqoJJKVXgNUbTWCqJahUcItL6NCD1VoBzj13rr!2e10!7i7680!8i3840"
                title="location in photo"
              >
                <GrMapLocation
                  size={20}
                  className="justify-center transition-all duration-300 ease-in-out bg-white hover:scale-125"
                  target="_blank"
                />
              </a>
            </p>
          </div>
        </div>
        <p className="bg-[#F3F3F3] lg:text-3xl sm:text-xl md:text-2xl  text-center p-8 md:p-0 md:text-left lg:tracking-widest">
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
          When I'm not working out at the gym, I enjoy coding and creating
          useful & interesting projects.
          <br />
          In my free time, I also love playing video games and watching
          movies/tv-series. As a learning developer with a passion for fitness
          and Tech, I am always seeking new challenges and opportunities to
          improve my craft.
        </p>
      </div>
    </div>
  );
};

export default About;
