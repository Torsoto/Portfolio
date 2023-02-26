import React, { useContext } from "react";
import { FaGithubSquare, FaLinkedin, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import logo from "../components/images/favicon.png";
import LanguageContext from "./Lng";

const Footer = () => {
  const { isEnglish } = useContext(LanguageContext);

  return (
    <div className="w-full bg-[#061022] pb-4 pt-2 px-4 mx-auto flex flex-col items-center justify-center text-white">
      <div className="flex items-center justify-center gap-6 mt-2 bg-[#061022]">
        <a
          href="https://github.com/Torsoto"
          target={"_blank"}
          rel="noreferrer"
          alt="Github icon"
        >
          <FaGithubSquare
            size={36}
            className="bg-[#061022] hover:scale-125 transition-all duration-300 ease-in-out"
          />
        </a>
        <div className="flex items-center justify-center gap-2 bg-[#061022]">
          <img
            src={logo}
            alt="Profile Logo"
            width={40}
            className="bg-[#061022]"
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
            className="bg-[#061022] hover:scale-125 transition-all duration-300 ease-in-out"
          />
        </a>
      </div>
      <div className="bg-[#061022]">
        <p className="bg-[#061022]  mt-2 text-center">
          Copryright © Tolga Topal
        </p>
        <p className="bg-[#061022] text-gray-500 flex gap-2 place-content-center">
          {isEnglish ? "created with " : "erstellt mit "}
          <FaReact
            size={24}
            className="text-gray-500 bg-[#061022]"
            title="React"
          />{" "}
          <SiTailwindcss
            className="text-gray-500 bg-[#061022]"
            size={24}
            title="Tailwind CSS"
          />
        </p>
      </div>
    </div>
  );
};

export default Footer;
