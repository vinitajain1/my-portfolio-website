import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar"

function App(){
  return(
    <main className="">
      <Navbar/>
      <About/>
      <Projects/>
      <Experience/>
      <Skills/>
      <Contact/>
    </main>
  )
}

export default App;