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
    <div className="flex items-center justify-between h-24 px-4 max-w-[1600px] mx-auto text-white">
      <img src={logo} alt="Profile Logo" width={40} className="mr-2"></img>
      <h1 className="w-full text-3xl font-bold tracking-wider md:text-5xl">
        Tolga Topal
      </h1>
      <ul className="hidden md:flex whitespace-nowrap">
        <li className="p-4 cursor-pointer hover:scale-110 transition-all ease-in-out duration-100 hover:text-teal-300 text-[22px]">
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
        <li className="p-4 cursor-pointer hover:scale-110 transition-all ease-in-out duration-100 hover:text-teal-300 text-[22px]">
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
        <li className="p-4 cursor-pointer hover:scale-110 transition-all ease-in-out duration-100 hover:text-teal-300 text-[22px]">
          <Link
            to="Skills"
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-80}
          >
            Skills
          </Link>
        </li>
        <li className="p-4 cursor-pointer hover:scale-110 transition-all ease-in-out duration-100 hover:text-teal-300 text-[22px] hidden">
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
        <li className="p-4 cursor-pointer hover:scale-110 transition-all ease-in-out duration-100 hover:text-teal-300 text-[22px]">
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-80}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div
        className="fixed z-50 border-[7px] border-[#1d1e26] rounded-full cursor-pointer right-4 md:hidden hover:scale-110"
        onClick={handleNav}
      >
        {nav ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[65%] border-r border-r-gray-900 h-full ease-in-out duration-500 z-50"
            : "fixed left-[-100%] z-50"
        }
      >
        <div className="flex ml-4 mt-7">
          <img src={logo} alt="Profile Logo" width={35} className="mr-1"></img>
          <h1 className="w-full text-3xl font-bold whitespace-nowrap">
            Tolga Topal
          </h1>
        </div>
        <ul className="grid gap-1 pt-3 uppercase">
          <li className="p-4 transition-all duration-100 ease-in-out border-b cursor-pointer hover:text-teal-300 hover:font-bold hover:text-lg">
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
          <li className="p-4 transition-all duration-100 ease-in-out border-b cursor-pointer hover:text-teal-300 hover:font-bold hover:text-lg">
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
          <li className="p-4 transition-all duration-100 ease-in-out border-b cursor-pointer hover:text-teal-300 hover:font-bold hover:text-lg">
            {" "}
            <Link
              to="Skills"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              offset={-80}
            >
              Skills
            </Link>
          </li>
          <li className="hidden p-4 transition-all duration-100 ease-in-out border-b cursor-pointer hover:text-teal-300 hover:font-bold hover:text-lg">
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
          <li className="p-4 transition-all duration-100 ease-in-out cursor-pointer hover:text-teal-300 hover:font-bold hover:text-lg">
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              offset={-80}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
