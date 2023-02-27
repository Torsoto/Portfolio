import React, { useContext } from "react";
import { FaGithubSquare, FaLinkedin, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import logo from "../components/images/favicon.png";
import LanguageContext from "./Lng";

const Footer = () => {
  const { isEnglish } = useContext(LanguageContext);

  return (
    <div className="flex flex-col shadow-inner shadow-black items-center justify-center w-full px-4 pt-2 pb-4 mx-auto text-white bg-[#0d1117]">
      <div className="flex items-center justify-center gap-6 mt-2 bg-[#0d1117]">
        <a
          href="https://github.com/Torsoto"
          target={"_blank"}
          rel="noreferrer"
          alt="Github icon"
        >
          <FaGithubSquare
            size={36}
            className="transition-all duration-300 ease-in-out bg-[#0d1117] hover:scale-125"
            title="Github"
          />
        </a>
        <div className="flex items-center justify-center gap-2 bg-[#0d1117]">
          <img
            src={logo}
            alt="Profile Logo"
            width={40}
            className="bg-[#0d1117]"
          />
        </div>
        <a
          href="https://www.linkedin.com/in/tolga-topal-6171ab262/"
          target={"_blank"}
          rel="noreferrer"
          alt="LinkedIn icon"
        >
          <FaLinkedin
            size={36}
            className="transition-all duration-300 ease-in-out bg-[bg-[#0d1117] hover:scale-125"
            title="LinkedIn"
          />
        </a>
      </div>
      <div className="pt-1 bg-[#0d1117]">
        <p className="flex gap-2 text-gray-500 bg-[#0d1117] place-content-center">
          {isEnglish ? "Made with " : "Erstellt mit "}
          <FaReact
            size={24}
            className="text-gray-500 bg-[#0d1117]"
            title="React"
          />{" "}
          |
          <SiTailwindcss
            className="text-gray-500 bg-[#0d1117]"
            size={24}
            title="Tailwind CSS"
          />
        </p>
        <p className="tracking-tight text-center text-gray-500 bg-[#0d1117]">
          © 2023 Tolga Topal
        </p>
      </div>
    </div>
  );
};

export default Footer;
