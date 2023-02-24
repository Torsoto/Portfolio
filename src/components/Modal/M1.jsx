import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Java from "../images/logos/JavaSmall.png";
import JSON from "../images/logos/JSON.png";
import P1 from "../images/Project1/1.jpg";
import P2 from "../images/Project1/2.jpg";
import P3 from "../images/Project1/3.jpg";
import P4 from "../images/Project1/4.jpg";
import Carousel from "./Carousel";

const slides = [P1, P2, P3, P4];

const M1 = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div
      onClick={() => onClose()}
      className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="px-2 pb-4 text-black bg-white rounded max-w-[1200px] w-[90%] h-[80%] lg:w-full lg:h-full max-h-[800px]"
      >
        <div className="flex justify-end pt-2 mt-0 align-top bg-white">
          <button
            onClick={onClose}
            className="flex justify-end text-4xl text-black align-middle"
          >
            <AiFillCloseCircle size={35} className="bg-white" />
          </button>
        </div>
        <div className="mx-auto bg-white w-[65%]">
          <Carousel>
            {slides.map((s) => (
              <img
                src={s}
                alt="Login Page"
                className="flex-shrink-0 w-full border-2 border-black rounded-x"
              />
            ))}
          </Carousel>
        </div>
        <div className="px-8 pt-8 bg-white md:px-20 md:pt-10">
          <h1 className="pb-2 text-xl bg-white md:text-3xl font-Poppins">
            {" "}
            Configurable Cash Register
          </h1>
          <p className="text-sm bg-white md:text-xl font-Montserrat">
            In my first FH project, I built a cash register app that could be
            customized to suit various needs. Using JavaFX and JSON, our team
            created an application with multiple functionalities, including the
            ability to retrieve old receipts, user-friendly animations, table +
            user/admin system. Overall, the project was a fantastic learning
            experience, and we gained many insights into software development.
          </p>
        </div>
        <div className="mx-auto pt-8 bg-white h-[80px] w-[130px] flex">
          <div className="px-2 bg-white">
            <img src={Java} alt="JavaFX Logo" className="bg-white" />
            <p className="bg-white">JavaFX</p>
          </div>
          <div className="px-2 pt-[4px] bg-white">
            <img src={JSON} alt="JSON Logo" className="bg-white" />
            <p className="bg-white">JSON</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default M1;
