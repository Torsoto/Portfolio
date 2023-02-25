import React, { useContext } from "react";
import profile from "./images/profile1.jpg";
import { GrMapLocation } from "react-icons/gr";
import { useInView } from "react-intersection-observer";
import LanguageContext from "./Lng";

export const About = () => {
  const { isEnglish } = useContext(LanguageContext);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div id="about" className="w-full px-4 pb-60 pt-20 bg-[#F3F3F3] z-0 ">
      <h2 className="lg:text-4xl text-3xl font-bold text-center text-black bg-[#F3F3F3] tracking-widest">
        {isEnglish ? "ABOUT ME" : "ÜBER MICH"}
      </h2>
      <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 pt-20 lg:grid-col-2 xl:grid-col-2 place-items-center bg-[#F3F3F3] ">
        <div
          ref={ref}
          className={
            inView ? " bg-[#F3F3F3] relative fadeIn" : "bg-[#F3F3F3] relative"
          }
        >
          <img
            src={profile}
            alt="ME"
            className="border-t-[20px] border-l-[20px] border-r-[20px] border-b-[40px] border-white shadow-[#1d1e26] shadow-md md:shadow-2xl z-0 w-[400px] fadeLeft rounded-2xl"
          ></img>
          <div ref={ref} className={inView ? "fadeIn" : ""}>
            <div className="absolute left-0 right-0 z-10 pt-4 text-center bg-white bottom-3">
              <p className="inline-flex items-center font-mono font-bold text-black bg-white">
                <span className="pt-1 mr-4 text-xl bg-white lg:text-xl font-Montserrat">
                  {isEnglish ? "ME IN PRAGUE" : "ICH IN PRAGUE"}
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
        </div>
        <div
          ref={ref}
          className={inView ? "fadeDown bg-[#F3F3F3]" : "opacity-0"}
        >
          <p className="bg-[#F3F3F3] font-Poppins text-lg md:text-xl  lg:text-[23px] lg:leading-7 text-justify mx-4 p-8 md:p-0  lg:tracking-widest">
            {isEnglish
              ? "Hello I am Tolga Topal also know as"
              : "Hey, ich bin Tolga Topal und auf den meisten Platformen nenne ich mich "}
            <a
              href="https://github.com/Torsoto"
              className="bg-[#F3F3F3] text-violet-700 font-bold"
              title="My Github"
            >
              {" "}
              Torsoto
            </a>
            {isEnglish
              ? ", a 21-year-old student at FH Campus Wien."
              : ". Ich bin 21 Jahre alt und studiere im Moment and der FH Campus Wien."}
            <br />
            <br />
            {isEnglish
              ? "Apart from being a fitness enthusiast who enjoys working out at the gym, I also have a passion for coding and creating innovative projects that are both useful and fascinating."
              : "Ich gehe gerne ins Fitnessstudio und achte auf meine Gesundheit. Außerdem habe ich auch eine Vorliebe fürs Programmieren. Es macht mir richtig Spaß, innovative Projekte zu entwickeln, die nicht nur interessant, sondern auch nützlich sind."}
            <br />
            <br />
            {isEnglish
              ? "During my leisure time, I indulge in my other hobbies, such as playing video games and watching movies or TV series. As an aspiring developer who is constantly seeking new challenges, I am committed to honing my craft and expanding my skillset. I believe that every opportunity is a chance to improve, and I am always eager to take on new ventures."
              : "In meiner Freizeit spiele ich auch gerne Videospiele oder schaue Filme und TV-Serien. Ich möchte ein richtig guter Entwickler werden und arbeite hart daran, meine Fähigkeiten zu verbessern und neue Herausforderungen anzunehmen. Ich denke, man sollte jede Chance nutzen, um dazuzulernen, und deshalb bin ich immer offen für neue Abenteuer."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
