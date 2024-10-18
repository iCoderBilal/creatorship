import React from "react";
import Header from "../Homepage/Components/Header";
import Hero from "../Business/Components/Hero.jsx";
import FeaturesSection from "./Components/Features.jsx";
import MarqueeDemo from "../Homepage/Components/ReviewMarquee.jsx";
import FooterBlock from "../Homepage/Components/Footer.jsx";

const Business = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeaturesSection />
      <MarqueeDemo />
      <FooterBlock />
    </>
  );
};

export default Business;
