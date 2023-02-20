import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../components/favicon.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex items-center justify-between h-24 px-4 max-w-[1600px] mx-auto text-white ">
      <img src={logo} alt="Profile Logo" width={40} className="mr-1"></img>
      <h1 className="w-full text-4xl font-bold">Tolga Topal</h1>
      <ul className="hidden md:flex whitespace-nowrap">
        <li className="p-4 cursor-pointer hover:font-bold">Home</li>
        <li className="p-4 cursor-pointer hover:font-bold">About Me</li>
        <li className="p-4 cursor-pointer hover:font-bold">Projects</li>
        <li className="p-4 cursor-pointer hover:font-bold">Skills</li>
        <li className="p-4 cursor-pointer hover:font-bold">Expierence</li>
        <li className="p-4 cursor-pointer hover:font-bold">Contact Me</li>
      </ul>
      <div className="block cursor-pointer md:hidden" onClick={handleNav}>
        {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full ease-in-out duration-500 "
            : "fixed left-[-100%] ease-in-out duration-500"
        }
      >
        <div className="flex ml-4 mt-7">
          <img src={logo} alt="Profile Logo" width={40} className="mr-1"></img>
          <h1 className="w-full text-4xl font-bold">Tolga Topal</h1>
        </div>
        <ul className="uppercase ">
          <li className="p-4 border-b cursor-pointer hover:font-bold">Home</li>
          <li className="p-4 border-b cursor-pointer hover:font-bold">
            About Me
          </li>
          <li className="p-4 border-b cursor-pointer hover:font-bold">
            Projects
          </li>
          <li className="p-4 border-b cursor-pointer hover:font-bold">
            Skills
          </li>
          <li className="p-4 border-b cursor-pointer hover:font-bold">
            Expierence
          </li>
          <li className="p-4 cursor-pointer hover:font-bold">Contact Me</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
