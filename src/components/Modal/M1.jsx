import React, { useContext } from "react";

//Icons
import { AiFillCloseCircle } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

//Images and Videos
import Java from "../images/logos/JavaSmall.png";
import JSON from "../images/logos/JSON.png";
import V1 from "../videos/1.mp4";
import V2 from "../videos/2.mp4";
import V3 from "../videos/3.mp4";
import V4 from "../videos/4.mp4";
import V5 from "../videos/5.mp4";
import V6 from "../videos/6.mp4";
import V7 from "../videos/7.mp4";
import V8 from "../videos/8.mp4";
import V9 from "../videos/9.mp4";

import Carousel from "./Carousel";

import LanguageContext from "../Lng";

const slides = [];

const M1 = ({ visible, onClose }) => {
  const { isEnglish } = useContext(LanguageContext);

  if (!visible) return null;

  return (
    <div
      onClick={() => onClose()}
      className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" p-2 text-black bg-white rounded-3xl overflow-hidden max-w-[1200px] w-[90%]  fadeIn"
      >
        <div className="flex justify-end pt-1 pb-2 mt-0 align-top bg-white">
          <button
            onClick={onClose}
            className="flex justify-end w-[18px] text-4xl md:w-[35px]  text-black align-middle"
          >
            <AiFillCloseCircle size={35} className="bg-white" />
          </button>
        </div>
        <div className="mx-auto bg-white md:w-[75%]">
          <Carousel>
            {[
              ...slides.map((s) => (
                <img
                  src={s}
                  alt="Login Page"
                  className="flex-shrink-0 w-full border-black rounded-xl"
                />
              )),
              <video src={V1} autoPlay muted loop playsInline />,
              <video src={V2} autoPlay muted loop playsInline />,
              <video src={V3} autoPlay muted loop playsInline />,
              <video src={V4} autoPlay muted loop playsInline />,
              <video src={V5} autoPlay muted loop playsInline />,
              <video src={V6} autoPlay muted loop playsInline />,
              <video src={V7} autoPlay muted loop playsInline />,
              <video src={V8} autoPlay muted loop playsInline />,
              <video src={V9} autoPlay muted loop playsInline />,
            ]}
          </Carousel>
        </div>
        <div className="px-0 pt-8 bg-white md:px-10 md:pt-10">
          <div className="flex bg-white">
            <h1 className="pb-1 text-base bg-white md:text-2xl font-Poppins">
              {" "}
              Configurable Cash Register
            </h1>
            <a
              href="https://github.com/d3vote/XSolutions-Configurable-Cash-Register"
              alt="Link to Project Repository"
              target={"_blank"}
              rel="noreferrer"
              className="transition-all duration-100 ease-out bg-white"
              title="Github-Repo"
            >
              <FaGithubSquare
                size={30}
                className="mt-[3px] w-[18px] h-[18px] md:w-[30px] md:h-[30px] ml-2 transition-all duration-300 ease-in-out bg-white hover:scale-125"
              />
            </a>
          </div>
          <p className="text-justify bg-white text-[10px] sm:text-sm md:text-lg lg:text-lg font-Montserrat">
            {isEnglish
              ? "In my first FH project, I built a cash register app that could be customized to suit various needs. Using JavaFX and JSON, our team created an application with multiple functionalities, including the ability to retrieve old receipts, user-friendly animations, table + user/admin system. Overall, the project was a fantastic learning experience, and we gained many insights into software development."
              : "Bei meinem ersten Projekt an der FH haben mein Team und ich eine Kassen-Applikation entwickelt, die an verschiedene Anforderungen bzw. Restauraunts angepasst werden kann. Mit Hilfe von JavaFX hat unser Team eine Anwendung mit mehreren Funktionen erstellt, inklusive der Möglichkeit, alte Belege abzurufen (werden in einer JSON Datei gespeichert), benutzerfreundliche Animationen sowie ein Tisch- und Benutzer-/Admin-System. Insgesamt war das Projekt eine fantastische Lernerfahrung, bei der wir viele Einblicke in die Softwareentwicklung gewonnen haben."}
          </p>
        </div>
        <div className="flex gap-4 pt-4 text-center bg-white place-content-center lg:pt-6">
          <div className="bg-white ">
            <img
              src={Java}
              alt="JavaFX Logo"
              className="mx-auto bg-white w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]"
            />
            <p className="text-xs lg:text-[16px] bg-white md:text-base">
              JavaFX
            </p>
          </div>
          <div className="bg-white">
            <img
              src={JSON}
              alt="JSON Logo"
              className="bg-white w-[32px] h-[32px] lg:w-[48px] lg:h-[48px]"
            />
            <p className="text-xs lg:text-[16px] bg-white md:text-base">JSON</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default M1;