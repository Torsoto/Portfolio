import React, { useContext } from "react";
import { useInView } from "react-intersection-observer";
import LanguageContext from "./Lng";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const { isEnglish } = useContext(LanguageContext);

  return (
    <div
      id="contact"
      className="lg:p-8 p-4 bg-[#1d1e26]  grid grid-row-3 w-full"
    >
      <h6 className="text-3xl font-bold text-white lg:text-4xl font-Poppins  text-center bg-[#1d1e26] tracking-widest">
        {isEnglish ? "CONTACT" : "KONTAKT"}
      </h6>
      <div ref={ref} className={inView ? "fadeDown" : ""}>
        <div className="mx-auto text-white grid-col-3 bg-[#1d1e26] xl:w-[35%] lg:w-[45%] md:w-[60%] w-[80%]">
          <div className="bg-[#1d1e26]">
            <form action="https://formspree.io/f/xpzedeeg" method="POST">
              <ul className="grid gap-2 pt-4 bg-[#1d1e26] ">
                <p className="bg-[#1d1e26]">Name</p>
                <li className="bg-[#1d1e26]">
                  <input
                    required
                    type="text"
                    name="Name"
                    placeholder="Name"
                    className="text-white w-full h-[50px] text-xl p-2 appearance-none border outline-none focus:outline-none bg-[#1d1e26] rounded-lg focus:bg-[#16161b] "
                  />
                </li>
                <p className="bg-[#1d1e26]">Email</p>
                <li>
                  <input
                    required
                    type="email"
                    name="Email"
                    placeholder="Email"
                    className="text-white w-full h-[50px] text-xl p-2 appearance-none border outline-none focus:outline-none bg-[#1d1e26] rounded-lg focus:bg-[#16161b]"
                  />
                </li>
                <p className="bg-[#1d1e26]">
                  {isEnglish ? "Subject" : "Betreff"}
                </p>
                <li>
                  <input
                    required
                    type="text"
                    name="Subject"
                    placeholder={isEnglish ? "Subject" : "Betreff"}
                    className="text-white w-full h-[50px] text-xl p-2 appearance-none border outline-none focus:outline-none bg-[#1d1e26] rounded-lg focus:bg-[#16161b]"
                  />
                </li>
                <p className="bg-[#1d1e26]">
                  {isEnglish ? "Message" : "Nachricht"}
                </p>
                <li>
                  <textarea
                    required
                    type="textarea"
                    name="Message"
                    className="text-white w-full p-2 appearance-none border outline-none focus:outline-none bg-[#1d1e26] h-[150px] rounded-lg focus:bg-[#16161b]"
                  />
                </li>
              </ul>
              <div className="grid place-items-center">
                <button
                  type="sumbit"
                  className="w-40 pt-2 pb-4 mt-4 text-2xl text-white transition-all duration-100 ease-in-out bg-transparent border-2 border-white rounded-lg bg-opacity-60 lg:hover:scale-105 active:translate-y-1"
                >
                  {isEnglish ? "SEND" : "SENDEN"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
