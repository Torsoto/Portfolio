import React, { useState, useContext, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../components/images/favicon.png";
import { Link } from "react-scroll";
import LanguageContext from "./Lng";
import German from "./images/svgs/germany-flag.svg";
import England from "./images/svgs/UK-flag.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { isEnglish, setIsEnglish } = useContext(LanguageContext);
  const [activeImage, setActiveImage] = useState(null);
  const [isTop, setIsTop] = useState(true); // add state for top or not

  const handleClick = (isEnglish) => {
    setIsEnglish(isEnglish);
    setActiveImage(isEnglish ? "EN" : "DE");
  };

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0); // check if the user has scrolled to the top
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex items-center justify-between h-24 px-4 max-w-[1600px] mx-auto text-white">
      <img src={logo} alt="Profile Logo" width={40} className="mr-2"></img>
      <h1 className="w-full text-4xl font-bold md:text-5xl text-[#fe3e57] whitespace-nowrap">
        T|T
      </h1>
      <ul
        className={`hidden md:flex whitespace-nowrap ${
          isTop
            ? ""
            : "fixed top-0 right-0 flex place-content-end z-50 shadow-md fadeIn overflow-hidden  shadow-black w-full pr-[2rem] lg:pr-[4rem] xl:pr-[4rem] 2xl:pr-[10rem]"
        }`}
      >
        <li className="p-4 cursor-pointer hover:scale-110 transition-all ease-in-out duration-100 hover:text-[#fe3e57] text-[22px]">
          <Link
            to="Home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-100}
          >
            {isEnglish ? "Home" : "Home"}
          </Link>
        </li>
        <li className="p-4 cursor-pointer hover:scale-110 transition-all ease-in-out duration-100 hover:text-[#fe3e57] text-[22px]">
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-50}
          >
            {isEnglish ? "About Me" : "Über mich"}
          </Link>
        </li>
        <li className="p-4 cursor-pointer hover:scale-110 transition-all ease-in-out duration-100 hover:text-[#fe3e57] text-[22px]">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-50}
          >
            {isEnglish ? "Projects" : "Projekte"}
          </Link>
        </li>
        <li className="p-4 cursor-pointer hover:scale-110 transition-all ease-in-out duration-100 hover:text-[#fe3e57] text-[22px]">
          <Link
            to="Skills"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-150}
          >
            {isEnglish ? "Skills" : "Fähigkeiten"}
          </Link>
        </li>
        <li className="p-4 cursor-pointer hover:scale-110 transition-all ease-in-out duration-100 hover:text-[#fe3e57] text-[22px] hidden">
          <Link
            to="Expierence"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            {isEnglish ? "Expierence" : "Erfahrung"}
          </Link>
        </li>
        <li className="p-4 cursor-pointer hover:scale-110 transition-all ease-in-out duration-100 hover:text-[#fe3e57] text-[22px]">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-50}
          >
            {isEnglish ? "Contact" : "Kontakt"}
          </Link>
        </li>
        <div className="flex gap-4 pl-4">
          <img
            src={German}
            alt="flag of germany"
            className={`max-w-[34px] lg:active:translate-y-2 cursor-pointer hover:scale-110 transition-all duration-150 ease-in ${
              activeImage === "DE" ? "opacity-100" : "opacity-40"
            }`}
            onClick={() => handleClick(false)}
            style={{ opacity: isEnglish ? "0.4" : "1" }}
          />
          <img
            src={England}
            alt="flag of england"
            className={`max-w-[34px] lg:active:translate-y-2 cursor-pointer hover:scale-110 transition-all duration-150 ease-in ${
              activeImage === "EN" ? "opacity-100" : "opacity-40"
            }`}
            onClick={() => handleClick(true)}
            style={{ opacity: isEnglish ? "1" : "0.4" }}
          />
        </div>
      </ul>
      <div
        className="fixed z-50 border-[7px] border-[#17315a] rounded-full cursor-pointer right-4 md:hidden hover:scale-110"
        onClick={handleNav}
      >
        {nav ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[65%] overflow-hidden border-r h-full ease-in-out duration-500 z-50"
            : "invisible left-[-100%] overflow-hidden  z-50"
        }
      >
        <div className="flex ml-4 mt-7">
          <img src={logo} alt="Profile Logo" width={35} className="mr-1"></img>
          <h1 className="w-full text-3xl font-bold whitespace-nowrap text-[#fe3e57]">
            T|T
          </h1>
        </div>
        <ul className="grid gap-1 pt-3 overflow-hidden uppercase">
          <li className="p-4 transition-all duration-100 ease-in-out border-b cursor-pointer hover:text-[#fe3e57] hover:font-bold hover:text-lg">
            <Link
              to="Home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              {isEnglish ? "Home" : "Home"}
            </Link>
          </li>
          <li className="p-4 transition-all duration-100 ease-in-out border-b cursor-pointer hover:text-[#fe3e57] hover:font-bold hover:text-lg">
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              {isEnglish ? "About Me" : "Über mich"}
            </Link>
          </li>
          <li className="p-4 transition-all duration-100 ease-in-out border-b cursor-pointer hover:text-[#fe3e57] hover:font-bold hover:text-lg">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              {isEnglish ? "Projects" : "Projekte"}
            </Link>
          </li>
          <li className="p-4 transition-all duration-100 ease-in-out border-b cursor-pointer hover:text-[#fe3e57] hover:font-bold hover:text-lg">
            {" "}
            <Link
              to="Skills"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              {isEnglish ? "Skills" : "Fähigkeiten"}
            </Link>
          </li>
          <li className="hidden p-4 transition-all duration-100 ease-in-out border-b cursor-pointer hover:text-[#fe3e57] hover:font-bold hover:text-lg">
            <Link
              to="Expierence"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              {isEnglish ? "Expierence" : "Erfahrung"}
            </Link>
          </li>
          <li className="p-4 transition-all duration-100 ease-in-out cursor-pointer hover:text-[#fe3e57] hover:font-bold hover:text-lg">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              {isEnglish ? "Contact" : "Kontakt"}
            </Link>
          </li>
          <div className="flex gap-4 pl-4 place-content-left">
            <img
              src={German}
              alt="flag of germany"
              className={`max-w-[34px] lg:active:translate-y-2 cursor-pointer hover:scale-110 transition-all duration-150 ease-in ${
                activeImage === "DE" ? "opacity-100" : "opacity-40"
              }`}
              onClick={() => handleClick(false)}
              style={{ opacity: isEnglish ? "0.4" : "1" }}
            />
            <img
              src={England}
              alt="flag of england"
              className={`max-w-[34px] lg:active:translate-y-2 cursor-pointer hover:scale-110 transition-all duration-150 ease-in ${
                activeImage === "EN" ? "opacity-100" : "opacity-40"
              }`}
              onClick={() => handleClick(true)}
              style={{ opacity: isEnglish ? "1" : "0.4" }}
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
