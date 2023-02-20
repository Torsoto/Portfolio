import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../components/images/favicon.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex items-center justify-between h-24 px-4 max-w-[1600px] mx-auto text-white ">
      <img src={logo} alt="Profile Logo" width={40} className="mr-1"></img>
      <h1 className="w-full text-3xl font-bold md:text-4xl">Tolga Topal</h1>
      <ul className="hidden md:flex whitespace-nowrap">
        <li className="p-4 cursor-pointer hover:scale-110 transition-all ease-in-out duration-100 hover:text-blue-400 text-[18px]">
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            About Me
          </Link>
        </li>
        <li className="p-4 cursor-pointer hover:scale-110 transition-all ease-in-out duration-100 hover:text-blue-400 text-[18px]">
          <Link
            to="projects"
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={-80}
          >
            Projects
          </Link>
        </li>
        <li className="p-4 cursor-pointer hover:scale-110 transition-all ease-in-out duration-100 hover:text-blue-400 text-[18px]">
          <Link
            to="Expierence"
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-80}
          >
            Expierence
          </Link>
        </li>
        <li className="p-4 cursor-pointer hover:scale-110 transition-all ease-in-out duration-100 hover:text-blue-400 text-[18px]">
          Contact Me
        </li>
      </ul>
      <div className="block cursor-pointer md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full ease-in-out duration-500 z-50"
            : "fixed left-[-100%]"
        }
      >
        <div className="flex ml-4 mt-7">
          <img src={logo} alt="Profile Logo" width={35} className="mr-1"></img>
          <h1 className="w-full text-3xl font-bold whitespace-nowrap">
            Tolga Topal
          </h1>
        </div>
        <ul className="grid gap-1 uppercase">
          <li className="p-4 transition-all duration-100 ease-in-out border-b cursor-pointer hover:text-blue-400 hover:font-bold">
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              About Me
            </Link>
          </li>
          <li className="p-4 transition-all duration-100 ease-in-out border-b cursor-pointer hover:text-blue-400 hover:font-bold">
            <Link
              to="projects"
              smooth={true}
              duration={700}
              spy={true}
              exact="true"
              offset={-80}
            >
              Projects
            </Link>
          </li>
          <li className="p-4 transition-all duration-100 ease-in-out border-b cursor-pointer hover:text-blue-400 hover:font-bold">
            <Link
              to="Expierence"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              offset={-80}
            >
              Expierence
            </Link>
          </li>
          <li className="p-4 transition-all duration-100 ease-in-out cursor-pointer hover:text-blue-400 hover:font-bold">
            Contact Me
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
