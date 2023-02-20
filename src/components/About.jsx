import React from "react";
import profile from "./images/profile1.jpg";

export const About = () => {
  return (
    <div className="w-full px-4 pt-8 pb-16 bg-[#B9E2F4]">
      <h1 className="text-2xl font-bold text-center text-black bg-[#B9E2F4]">
        ABOUT ME
      </h1>
      <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 place-items-center bg-[#B9E2F4]">
        <div className="bg-[#B9E2F4] relative">
          <img
            src={profile}
            alt="ME"
            className="border-t-[20px] border-l-[20px] border-r-[20px] border-b-[40px] border-white shadow-2xl  w-96"
          ></img>
          <div className="absolute left-0 right-0 z-10 text-center bottom-3">
            <p className="font-mono font-bold text-black bg-white">
              picture of me in Prague :)
            </p>
          </div>
        </div>
        <p className="bg-[#B9E2F4] text-3xl font-mono">
          Hi :), I'm Tolga Topal aka{" "}
          <a
            href="https://github.com/Torsoto"
            className="bg-[#B9E2F4] text-violet-500"
            title="My Github"
          >
            Torsoto
          </a>
          , a 21-year-old student. When I'm not working out at the gym, I enjoy
          coding and creating useful & interesting projects. In my free time, I
          also love playing video games and watching movies/tv-series. As a
          learning developer with a passion for fitness and Tech, I am always
          seeking new challenges and opportunities to improve my craft.
        </p>
      </div>
    </div>
  );
};

export default About;
