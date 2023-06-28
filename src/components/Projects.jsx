import React, { useState, useContext } from "react";
import M1 from "./Modal/M1";
import M2 from "./Modal/M2";
import P1 from "./images/Project1/2.jpg";
import P2 from "./images/Project2/1.mp4";
import P3 from "./images/Project3/1.jpg"
import LanguageContext from "./Lng";
import { FaGithubSquare } from "react-icons/fa";

const Projects = () => {
  const { isEnglish } = useContext(LanguageContext);

  const [showM1, setShowM1] = useState(false);
  const [showM2, setShowM2] = useState(false);

  const closeM1 = () => setShowM1(false);
  const closeM2 = () => setShowM2(false);

  return (
    <div id="projects" className="bg-[#161b22] pt-20 pb-60 text-white">
      <div className="bg-[#161b22]">
        <h3 className="font-bold lg:text-4xl text-3xl text-center text-white bg-[#161b22] tracking-widest">
          {isEnglish ? "PROJECTS" : "PROJEKTE"}
        </h3>
      </div>
      <div className="pt-16 md:pt-32 max-w-[1400px] mx-auto bg-[#161b22]">
        <div className="md:w-full mx-auto grid grid-col-1 lg:grid-cols-2 grid-rows-1  bg-[#161b22]">
          <div
            onClick={() => setShowM1(true)}
            className="pb-8 transition-all duration-200 my-auto ease-in-out cursor-pointer bg-[#161b22] active:translate-y-2"
          >
            <img
              src={P1}
              alt="first Project pic"
              className="mx-auto w-[90%]  transition-all duration-200 ease-in-out rounded-md shadow-lg active:translate-y-2 md:hover:scale-105 shadow-black"
            ></img>
          </div>
          <div className="mx-4 text-justify text-white  bg-[#161b22] text-lg md:text-xl font-Montserrat">
            <div className="flex bg-[#161b22]">
              <div className="flex mx-auto bg-transparent">
                <h1 className="pb-1 text-[#fe3e57] text-xl  bg-[#161b22] sm:text-3xl font-Poppins">
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
            </div>
            {isEnglish
              ? "In my first FH project, my team and i used JavaFX to develop cash register application that could be customized to suit various needs. We implemented multiple functionalities, including the ability to retrieve old receipts, user-friendly animations, table + user/admin system. Additionally we used JSON to store all our login and product data. Overall, the project was a fantastic learning experience, and we gained many insights into software development."
              : "Bei meinem ersten FH-Projekt haben mein Team und ich JavaFX verwendet, um eine Kassen Applikation zu entwickeln, die an verschiedene Anforderungen angepasst werden kann.Wir haben mehrere Funktionen implementiert, inklusive der Möglichkeit, alte Belege abzurufen, benutzerfreundliche Animationen sowie ein Tisch- und Benutzer-/Admin-System. Zusätzlich haben wir JSON verwendet, um alle unsere Login- und Produktinformationen zu speichern. Insgesamt war das Projekt eine fantastische Lernerfahrung, bei der wir viele Einblicke in die Softwareentwicklung gewonnen haben."}
          </div>
        </div>
      </div>
      <div className="pt-16 md:pt-32 max-w-[1400px] mx-auto bg-[#161b22]">
        <div className="mx-auto grid grid-col-1 lg:grid-cols-2 grid-rows-1 pb-24  bg-[#161b22]">
          <div
            onClick={() => setShowM1(false)}
            className="pb-8 lg:order-1 transition-all duration-200 my-auto ease-in-out bg-[#161b22]"
          >
            <video
              src={P2}
              alt="first Project pic"
              className="mx-auto w-[90%]  transition-all duration-200 ease-in-out rounded-md shadow-lg  shadow-black"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
          <div className="mx-4 text-justify text-white bg-[#161b22] text-lg md:text-xl font-Montserrat">
            <div className="flex bg-[#161b22]">
              <div className="flex mx-auto bg-transparent">
                <h1 className="pb-1 text-[#fe3e57] text-xl bg-[#161b22] sm:text-3xl font-Poppins">
                  Portfolio
                </h1>
                <a
                  href="https://github.com/Torsoto/Portfolio"
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
            </div>
            {isEnglish
              ? "For my portfolio, I worked with new technologies and expanded my knowledge in web development. I used React and Tailwind CSS, which allowed me to create a more dynamic and visually appealing website. Because of that i also refined my skills Javascript, HTML and CSS. Overall, working on my portfolio was a fantastic learning experience that allowed me to gain valuable insights on web development."
              : "Für mein Portfolio habe ich mit neuen Technologien gearbeitet und mein Wissen in der Webentwicklung erweitert. Ich habe React und Tailwind CSS verwendet, was mir ermöglicht hat, eine dynamischere und visuell ansprechendere Website zu erstellen. Dadurch konnte ich auch meine Fähigkeiten in JavaScript, HTML und CSS verfeinern. Alles in allem war das Arbeiten an meinem Portfolio eine fantastische Lernerfahrung, die es mir ermöglichte, wertvolle Einblicke in die Webentwicklung zu gewinnen."}
          </div>
        </div>
      </div>
      <div className="pt-16 md:pt-32 max-w-[1400px] mx-auto bg-[#161b22]">
        <div className="mx-auto grid grid-col-1 lg:grid-cols-2 grid-rows-1 pb-24  bg-[#161b22]">
          <div
            onClick={() => setShowM2(true)}
            className="pb-8 transition-all duration-200 my-auto ease-in-out bg-[#161b22]"
          >
            <img
              src={P3}
              alt="Second Web Project"
              className="mx-auto w-[90%]  transition-all cursor-pointer duration-200 ease-in-out rounded-md shadow-lg active:translate-y-2 md:hover:scale-105 shadow-black"
            ></img>
          </div>
          <div className="mx-4 text-justify text-white bg-[#161b22] text-lg md:text-xl font-Montserrat">
            <div className="flex bg-[#161b22]">
              <div className="flex mx-auto bg-transparent">
                <h1 className="pb-1 text-[#fe3e57] text-xl bg-[#161b22] sm:text-3xl font-Poppins">
                  Typeflix
                </h1>
                <a
                  href="https://github.com/Torsoto/typeflix"
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
            </div>
            {isEnglish
              ? "For my second and officially first Web-Development project at the FH, we created Typeflix. Together with my team from the FH, we used React and Tailwind CSS to create a theme-based typewriting game that tests users’ typing speed and displays them on the respective leaderboards. We also deepened our knowledge of backend development by integrating Firebase (a BaaS) and its features and implementing several REST web services/APIs.In addition, I expanded my knowledge of many important topics related to web development. For more information about the project, you can read the ReadMe on the GitHub repo."
              : "Mein zweites und erstes offizieles Web-Development Projekt in der FH heißt, Typeflix. Zusammen mit meinem Team von der Fachhochschule haben wir mit React ein themenbasiertes Typewriting-Spiel erstellt, das die Tippgeschwindigkeit der Benutzer testet und sie in den jeweiligen Leaderboards anzeigt. Wir haben auch unsere Kenntnisse im Bereich Backend-Entwicklung vertieft, indem wir Firebase (einen BaaS) und dessen Features integriert und mehrere REST-Web-Services bzw. RESTful APIs implementiert haben. Außerdem habe ich durch dieses Projekt mein Wissen über viele Web-Development Themen/Technologien erweitert. Für weitere Informationen über das Projekt können Sie die ReadMe auf der GitHub-Repo lesen"}
          </div>
        </div>
      </div>
      <M1 onClose={closeM1} visible={showM1} />
      <M2 onClose={closeM2} visible={showM2} />
    </div>
  );
};

export default Projects;
