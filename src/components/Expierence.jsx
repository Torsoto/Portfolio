import React, { useContext } from "react";
import LanguageContext from "./Lng";

const Expierence = () => {
  const { isEnglish } = useContext(LanguageContext);

  return (
    <div id="experience" className="w-full py-20 bg-[#161b22] text-white">
      <div className="max-w-[1400px] mx-auto bg-transparent">
        <h3 className="font-bold lg:text-4xl text-3xl text-center bg-transparent text-white tracking-widest mb-16">
          {isEnglish ? "EXPERIENCE" : "BERUFSERFAHRUNG"}
        </h3>
        
        <div className="mx-8 md:mx-16 lg:mx-32 bg-transparent p-8 rounded-lg">
          <div className="flex flex-col md:flex-row justify-between bg-transparent items-start md:items-center mb-4">
            <h4 className="text-2xl font-bold text-[#fe3e57] bg-transparent">
              {isEnglish ? "Software Developer Internship" : "Software Developer Praktikum"}
            </h4>
            <div className="mt-2 md:mt-0 text-lg bg-transparent flex items-center">
              <a 
                href="https://phactum.at/" 
                target="_blank" 
                rel="noreferrer" 
                className="font-semibold bg-transparent hover:text-[#fe3e57] transition-colors duration-300"
              >
                Phactum
              </a>
              <span className="ml-4 text-gray-400 bg-transparent">02.2025 – 04.2025</span>
            </div>
          </div>
          
          <ul className="list-disc pl-5 space-y-3 text-lg bg-transparent">
            {isEnglish ? (
              <>
                <li className="bg-transparent">Microservices with Java (Spring Boot), Spring Security, REST APIs, MongoDB</li>
                <li className="bg-transparent">Frontend development with React and Angular, API integration, authentication flows, Module Federation</li>
                <li className="bg-transparent">BPMN workflows with Camunda 7 & 8, modeling, user tasks, process control</li>
                <li className="bg-transparent">CI/CD with GitHub Actions, Maven, Git, Docker, Bash</li>
              </>
            ) : (
              <>
                <li className="bg-transparent">Microservices mit Java (Spring Boot), Spring Security, REST-APIs, MongoDB</li>
                <li className="bg-transparent">Frontend-Entwicklung mit React und Angular, API-Anbindung, Authentifizierungs-Flows, Module Federation</li>
                <li className="bg-transparent">BPMN-Workflows mit Camunda 7 & 8, Modellierung, Benutzeraufgaben, Prozesssteuerung</li>
                <li className="bg-transparent">CI/CD mit GitHub Actions, Maven, Git, Docker, Bash</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Expierence;
