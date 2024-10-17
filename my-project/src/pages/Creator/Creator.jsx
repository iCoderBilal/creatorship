import React from "react";
import Header from "../Homepage/Components/Header";
import Hero from "./Components/Hero";
import Join from "./Components/Join";
import Works from "./Components/Works";
import HowItWorks from "./Components/Works";
import MarqueeDemo from "../Homepage/Components/ReviewMarquee";
import FooterBlock from "../Homepage/Components/Footer";

const Creator = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Join />
      <MarqueeDemo />
      <FooterBlock />
      {/* <HowItWorks /> */}
    </div>
  );
};

export default Creator;
