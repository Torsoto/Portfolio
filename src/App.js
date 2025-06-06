import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Expierence from "./components/Expierence";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import LanguageContext from "./components/Lng";

function App() {
  const [isEnglish, setIsEnglish] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div>
      <LanguageContext.Provider
        value={{ isEnglish, setIsEnglish, isDarkMode, setIsDarkMode }}
      >
        <div className="z-20 fadeIn">
          <Navbar />
        </div>
        <div className="fadeIn pb-96">
          <Hero />
        </div>
        <About />
        <Expierence />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
