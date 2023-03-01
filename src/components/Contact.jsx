import React, { useContext } from "react";
import { useInView } from "react-intersection-observer";
import LanguageContext from "./Lng";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 200,
    threshold: 0,
  });

  const { isEnglish } = useContext(LanguageContext);

  return (
    <div id="contact" className="w-full mx-auto bg-[#161b22]">
      <div className="grid max-w-[1600px] mx-auto p-4 lg:p-8 bg-[#161b22]   grid-row-3">
        <h6 className="text-3xl font-bold text-white lg:text-4xl font-Poppins  text-center bg-[#161b22] tracking-widest">
          {isEnglish ? "CONTACT" : "KONTAKT"}
        </h6>
        <div
          ref={ref}
          className={
            inView ? "fadeDown bg-[#161b22] " : "invisible bg-[#161b22]"
          }
        >
          <div className="mx-auto text-white grid-col-3 bg-[#161b22] xl:w-[40%] lg:w-[45%] md:w-[60%] w-[95%]">
            <div className="bg-[#161b22]">
              <form action="https://formspree.io/f/xpzedeeg" method="POST">
                <ul className="grid gap-2 pt-4 bg-[#161b22]">
                  <p className="bg-[#161b22]">Name</p>
                  <li className="bg-[#161b22]">
                    <input
                      required
                      type="text"
                      name="Name"
                      placeholder="Name"
                      className="text-white w-full h-[50px] text-lg p-2 appearance-none border-none outline-none focus:outline-none bg-[#0d1117] rounded-md"
                    />
                  </li>
                  <p className="bg-[#161b22]">Email</p>
                  <li>
                    <input
                      required
                      type="email"
                      name="Email"
                      placeholder="Email"
                      className="text-white w-full h-[50px] text-lg p-2 appearance-none border-none outline-none focus:outline-none bg-[#0d1117] rounded-md"
                    />
                  </li>
                  <p className="bg-[#161b22]">
                    {isEnglish ? "Subject" : "Betreff"}
                  </p>
                  <li>
                    <input
                      required
                      type="text"
                      name="Subject"
                      placeholder={isEnglish ? "Subject" : "Betreff"}
                      className="text-white w-full h-[50px] text-lg p-2 appearance-none border-none outline-none focus:outline-none bg-[#0d1117] rounded-md"
                    />
                  </li>
                  <p className="bg-[#161b22]">
                    {isEnglish ? "Message" : "Nachricht"}
                  </p>
                  <li>
                    <textarea
                      required
                      type="textarea"
                      name="Message"
                      placeholder={isEnglish ? "Message" : "Nachricht"}
                      className="text-white w-full p-2 appearance-none text-lg outline-none border-none focus:outline-none bg-[#0d1117] h-[150px] rounded-md"
                    />
                  </li>
                </ul>
                <div className="grid place-items-center bg-[#161b22]">
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
    </div>
  );
};

export default Contact;
