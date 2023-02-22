import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Expierence from "./components/Expierence";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Expierence />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
