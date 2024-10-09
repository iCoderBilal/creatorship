import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import "../../App.css";
import MarqueeDemo from "./Components/ReviewMarquee";
import About from "./Components/About";
import HeroSection from "./Testing";
import Vision from "./Components/Vision";
import ParentCompany from "./Components/ParentCompany";
import Features from "./Components/Features";
import Contact from "./Components/Contact";

const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <MarqueeDemo />
      <About />
      <Vision />
      <ParentCompany />
      <Features />
      <Contact />

      {/* <HeroSection /> */}
    </>
  );
};

export default Homepage;
