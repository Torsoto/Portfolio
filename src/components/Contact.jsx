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
      className="lg:p-8 p-4 bg-[#17315a]  grid grid-row-3 w-full"
    >
      <h6 className="text-3xl font-bold text-white lg:text-4xl font-Poppins  text-center bg-[#17315a] tracking-widest">
        {isEnglish ? "CONTACT" : "KONTAKT"}
      </h6>
      <div ref={ref} className={inView ? "fadeDown" : "invisible"}>
        <div className="mx-auto text-white grid-col-3 bg-[#17315a] xl:w-[35%] lg:w-[45%] md:w-[60%] w-[80%]">
          <div className="bg-[#17315a]">
            <form action="https://formspree.io/f/xpzedeeg" method="POST">
              <ul className="grid gap-2 pt-4 bg-[#17315a] ">
                <p className="bg-[#17315a]">Name</p>
                <li className="bg-[#17315a]">
                  <input
                    required
                    type="text"
                    name="Name"
                    placeholder="Name"
                    className="text-white w-full h-[50px] text-lg p-2 appearance-none border-none outline-none focus:outline-none bg-[#294572] rounded-md"
                  />
                </li>
                <p className="bg-[#17315a]">Email</p>
                <li>
                  <input
                    required
                    type="email"
                    name="Email"
                    placeholder="Email"
                    className="text-white w-full h-[50px] text-lg p-2 appearance-none border-none outline-none focus:outline-none bg-[#294572] rounded-md"
                  />
                </li>
                <p className="bg-[#17315a]">
                  {isEnglish ? "Subject" : "Betreff"}
                </p>
                <li>
                  <input
                    required
                    type="text"
                    name="Subject"
                    placeholder={isEnglish ? "Subject" : "Betreff"}
                    className="text-white w-full h-[50px] text-lg p-2 appearance-none border-none outline-none focus:outline-none bg-[#294572] rounded-md"
                  />
                </li>
                <p className="bg-[#17315a]">
                  {isEnglish ? "Message" : "Nachricht"}
                </p>
                <li>
                  <textarea
                    required
                    type="textarea"
                    name="Message"
                    placeholder={isEnglish ? "Message" : "Nachricht"}
                    className="text-white w-full p-2 appearance-none text-lg outline-none border-none focus:outline-none bg-[#294572] h-[150px] rounded-md"
                  />
                </li>
              </ul>
              <div className="grid place-items-center">
                <button
                  type="sumbit"
                  className="py-3 px-8 shadow-md shadow-black mt-4 text-2xl font-bold text-white transition-all duration-100 ease-in-out bg-[#fe3e57] rounded-lg lg:hover:scale-105 active:translate-y-1"
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
