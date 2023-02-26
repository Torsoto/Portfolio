import React, { useContext } from "react";
import profile from "./images/Photo.png";
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
          className={inView ? " bg-[#F3F3F3] fadeUp" : "bg-[#F3F3F3]"}
        >
          <img
            src={profile}
            alt="ME"
            className="border-2 border-[#1d1e26] shadow-lg bg-transparent shadow-black z-0 w-[400px]"
          ></img>
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
              ? "Apart from being a fitness enthusiast who enjoys working out at the gym, I also have a passion for coding and creating innovative and valuable projects."
              : "Ich gehe gerne ins Fitnessstudio und achte auf meine Gesundheit. Außerdem habe ich auch eine Vorliebe fürs Programmieren. Es macht mir richtig Spaß, innovative und nützliche Projekte zu entwickeln"}
            <br />
            <br />
            {isEnglish
              ? "During my leisure time, I indulge in my other hobbies, such as playing video games, going to the gym and watching movies or TV series. As an aspiring developer who is constantly seeking new challenges, I am committed to honing my craft and expanding my skillset. I believe that every opportunity is a chance to improve, and I am always eager to take on new ventures."
              : "In meiner Freizeit spiele ich auch gerne Videospiele, gehe ins Fitnessstudio oder schaue Filme und TV-Serien. Ich möchte ein richtig guter Entwickler werden und arbeite hart daran, meine Fähigkeiten zu verbessern und neue Herausforderungen anzunehmen. Ich denke, man sollte jede Chance nutzen, um dazuzulernen, und deshalb bin ich immer offen für neue Abenteuer."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
