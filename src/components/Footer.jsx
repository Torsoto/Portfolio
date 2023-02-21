import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import logo from "../components/images/favicon.png";

const Footer = () => {
  return (
    <div className="w-full bg-[#0d0e11] py-8 px-4 mx-auto flex flex-col items-center justify-center text-white">
      <div className="flex items-center justify-center gap-2 bg-[#0d0e11]">
        <img
          src={logo}
          alt="Profile Logo"
          width={40}
          className="bg-[#0d0e11]"
        />
      </div>
      <div className="flex items-center justify-center gap-6 mt-2 bg-[#0d0e11]">
        <a
          href="https://github.com/Torsoto"
          target={"_blank"}
          rel="noreferrer"
          alt="Github icon"
        >
          <FaGithubSquare
            size={36}
            className="bg-[#0d0e11] hover:scale-125 transition-all duration-300 ease-in-out"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/tolga-topal-6171ab262/"
          target={"_blank"}
          rel="noreferrer"
          alt="LinkedIn icon"
        >
          <FaLinkedin
            size={36}
            className="bg-[#0d0e11] hover:scale-125 transition-all duration-300 ease-in-out"
          />
        </a>
      </div>
      <div className="bg-[#0d0e11]">
        <p className="bg-[#0d0e11] mt-2">©Torsoto 2023</p>
      </div>
    </div>
  );
};

export default Footer;
