"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <Projects />
      <Skills/>
      <Contact />
      <div className = "max-w-7xl  mx-auto md:px-0 px-10 py-10 border-t border-[#ffffff1a] text-center text-gray-400">
        <p>© Anish Duwal {new Date().getFullYear()} | All Rights Reserved</p>
      </div>
    </>
  )
}