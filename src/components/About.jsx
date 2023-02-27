import React, { useContext } from "react";
import profile from "./images/profile2.jpg";
import { useInView } from "react-intersection-observer";
import LanguageContext from "./Lng";

export const About = () => {
  const { isEnglish } = useContext(LanguageContext);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div id="about" className="w-full px-4 pb-60 pt-20 bg-[#0d2244] z-0 ">
      <div className=" bg-[#0d2244]">
        <h2 className="lg:text-4xl text-3xl font-bold text-center text-[#fe3e57] bg-[#0d2244] tracking-widest">
          {isEnglish ? "ABOUT ME" : "ÜBER MICH"}
        </h2>
      </div>
      <div
        ref={ref}
        className={
          inView
            ? "max-w-[1600px] mx-auto grid md:grid-cols-2 pt-20 lg:grid-col-2 xl:grid-col-2 place-items-center bg-[#0d2244] fadeIn"
            : "max-w-[1600px] mx-auto grid md:grid-cols-2 pt-20 lg:grid-col-2 xl:grid-col-2 place-items-center bg-[#0d2244]"
        }
      >
        <div className="bg-[#0d2244]">
          <img
            src={profile}
            alt="ME"
            className="shadow-lg rounded-xl bg-transparent shadow-black z-0 w-[400px]"
          ></img>
        </div>
        <div className="bg-[#0d2244]">
          <p className="bg-[#0d2244] text-white font-Montserrat text-lg md:text-xl  lg:text-2xl text-justify mx-4 p-8 md:p-0 tracking-wide">
            {isEnglish ? "Hello I am Tolga Topal" : "Hey, ich bin Tolga Topal,"}
            {isEnglish
              ? ", a 21-year-old student at FH Campus Wien."
              : " bin 21 Jahre alt und studiere im Moment and der FH Campus Wien."}
            <br />
            <br />
            {isEnglish
              ? "Apart from being a fitness enthusiast who enjoys working out at the gym, I also have a passion for coding and creating innovative and valuable projects."
              : "Ich gehe gerne ins Fitnessstudio und achte auf meine Gesundheit. Außerdem habe ich auch eine Vorliebe fürs Programmieren. Es macht mir richtig Spaß, innovative und nützliche Projekte zu entwickeln"}
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
