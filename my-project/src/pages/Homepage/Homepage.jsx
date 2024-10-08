import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import "../../App.css";
import MarqueeDemo from "./Components/ReviewMarquee";
import About from "./Components/About";
import HeroSection from "./Testing";
import Vision from "./Components/Vision";

const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <MarqueeDemo />
      <About />
      <Vision />
      {/* <HeroSection /> */}
    </>
  );
};

export default Homepage;
