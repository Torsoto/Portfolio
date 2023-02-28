import React, { useState, useContext } from "react";
import { useInView } from "react-intersection-observer";
import M1 from "./Modal/M1";
import P1 from "./images/Project1/2.jpg";
import LanguageContext from "./Lng";
import { FaGithubSquare } from "react-icons/fa";

const Projects = ({ p1, p2, p3 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const { isEnglish, isDarkMode } = useContext(LanguageContext);

  const [showM1, setShowM1] = useState(false);

  const closeM1 = () => setShowM1(false);

  return (
    <div id="projects" className="bg-[#161b22] pt-20 pb-60 text-white">
      <div className="bg-[#161b22]">
        <h3 className="font-bold lg:text-4xl text-3xl text-center text-white bg-[#161b22] tracking-widest">
          {isEnglish ? "PROJECTS" : "PROJEKTE"}
        </h3>
      </div>
      <div
        ref={ref}
        className={
          inView
            ? "fadeLeft pt-16 md:pt-32 bg-[#161b22]"
            : "invisible  bg-[#161b22]"
        }
      >
        <div className="max-w-[1600px] mx-auto grid grid-col-1 xl:grid-cols-2 grid-rows-1 pb-24  bg-[#161b22]">
          <div
            onClick={() => setShowM1(true)}
            className="px-2 pb-8 transition-all duration-200 ease-in-out cursor-pointer bg-[#161b22] active:translate-y-2"
          >
            <img
              src={P1}
              alt="first Project pic"
              className="mx-auto w-[95%] xl:w-[85%] transition-all duration-200 ease-in-out rounded-md shadow-lg active:translate-y-2 md:hover:scale-105 shadow-black"
            ></img>
          </div>
          <div className=" my-auto mx-8 text-justify text-white bg-[#161b22] text-lg md:text-2xl font-Montserrat">
            <div className="flex bg-[#161b22]">
              <h1 className="pb-1 text-[#fe3e57] text-xl bg-[#161b22] sm:text-3xl font-Poppins">
                {isEnglish
                  ? "Configurable Cash Register"
                  : "Konfigurierbare Registrierkasse"}
              </h1>
              <a
                href="https://github.com/d3vote/XSolutions-Configurable-Cash-Register"
                alt="Link to Project Repository"
                target={"_blank"}
                rel="noreferrer"
                className="transition-all duration-100 ease-out bg-[#161b22]"
                title="Github-Repo"
              >
                <FaGithubSquare
                  size={30}
                  className="mt-[3px] w-[25px] h-[25px] text-white md:w-[30px] md:h-[30px] ml-2 transition-all duration-300 ease-in-out bg-[#161b22] hover:scale-125"
                />
              </a>
            </div>
            {isEnglish
              ? "In my first FH project, my team and i developed a cash register application that could be customized to suit various needs. Using JavaFX , our team created an application with multiple functionalities, including the ability to retrieve old receipts, user-friendly animations, table + user/admin system. Additionally we used JSON to store all our login and product data. Overall, the project was a fantastic learning experience, and we gained many insights into software development."
              : "Bei meinem ersten Projekt an der FH haben mein Team und ich eine Kassen-Applikation entwickelt, die an verschiedene Anforderungen angepasst werden kann. Mit Hilfe von JavaFX hat unser Team eine Anwendung mit mehreren Funktionen erstellt, inklusive der Möglichkeit, alte Belege abzurufen, benutzerfreundliche Animationen sowie ein Tisch- und Benutzer-/Admin-System. Zusätzlich haben wir JSON verwendet, um alle unsere Login- und Produktinformationen zu speichern. Insgesamt war das Projekt eine fantastische Lernerfahrung, bei der wir viele Einblicke in die Softwareentwicklung gewonnen haben."}
          </div>
        </div>
      </div>
      <M1 onClose={closeM1} visible={showM1} />
    </div>
  );
};

export default Projects;
