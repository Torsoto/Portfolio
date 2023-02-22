import React from "react";
const Contact = () => {
  return (
    <div
      id="contact"
      className="lg:p-8 p-4 bg-[#1d1e26]  grid grid-row-3 w-full"
    >
      <h1 className="sm:text-2xl font-bold text-white lg:text-4xl font-Poppins  text-center bg-[#1d1e26] tracking-widest">
        CONTACT
      </h1>
      <div className="grid text-white grid-col-3 bg-[#1d1e26] place-content-center">
        <div className="bg-[#1d1e26]  ">
          <p className="text-white lg:text-xl md:text-xl sm:text-[16px] font-mono pt-6 lg:whitespace-nowrap md:whitespace-nowrap bg-[#1d1e26]">
            Write me a message and i will get in touch with you as soon as i can
            👍
          </p>
          <ul className="grid gap-2 pt-4 bg-[#1d1e26] ">
            <p className="bg-[#1d1e26]">Name</p>
            <li className="bg-[#1d1e26]">
              <input
                required
                type="text"
                name="name"
                placeholder="Name"
                className="text-white w-full h-[50px] text-xl p-2 appearance-none border outline-none focus:outline-none bg-[#1d1e26] rounded-lg focus:bg-[#16161b] "
              />
            </li>
            <p className="bg-[#1d1e26]">Email</p>
            <li>
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                className="text-white w-full h-[50px] text-xl p-2 appearance-none border outline-none focus:outline-none bg-[#1d1e26] rounded-lg focus:bg-[#16161b]"
              />
            </li>
            <p className="bg-[#1d1e26]">Subject</p>
            <li>
              <input
                required
                type="text"
                name="Subject"
                placeholder="Subject"
                className="text-white w-full h-[50px] text-xl p-2 appearance-none border outline-none focus:outline-none bg-[#1d1e26] rounded-lg focus:bg-[#16161b]"
              />
            </li>
            <p className="bg-[#1d1e26]">Message</p>
            <li>
              <textarea
                required
                type="textarea"
                name="Subject"
                className="text-white w-full p-2 appearance-none border outline-none focus:outline-none bg-[#1d1e26] h-[150px] rounded-lg focus:bg-[#16161b]"
              />
            </li>
          </ul>
          <div className="grid place-items-center">
            <button className="w-40 p-3 mt-4 text-3xl text-black transition-all duration-100 ease-in-out bg-teal-300 border-b-[10px] border-teal-900 rounded hover:border-teal-900 lg:hover:scale-105 active:translate-y-1">
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
