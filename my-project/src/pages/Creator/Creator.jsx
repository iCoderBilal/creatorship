import React from "react";
import Header from "../Homepage/Components/Header";
import Hero from "./Components/Hero";
import Join from "./Components/Join";
import Works from "./Components/Works";
import HowItWorks from "./Components/Works";
import MarqueeDemo from "../Homepage/Components/ReviewMarquee";
import FooterBlock from "../Homepage/Components/Footer";
import CreatorReview from "./Components/CreatorReview";
import ExclusiveFeatures from "./Components/ExclusiveFeatures";
import Navbar from "../../Components/NewHeader";

const Creator = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ExclusiveFeatures />
      <Join />
      <MarqueeDemo />
      {/* <CreatorReview /> */}
      <FooterBlock />
      {/* <HowItWorks /> */}
    </div>
  );
};

export default Creator;
