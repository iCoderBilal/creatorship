import React, { useRef } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import "../../App.css";
import MarqueeDemo from "./Components/ReviewMarquee";
import About from "./Components/About";
import HeroSection from "./Testing";
import Vision from "./Components/Vision";
import ParentCompany from "./Components/ParentCompany";
import Features from "./Components/Features";

import FooterBlock from "./Components/Footer";
import Navbar from "../../Components/NewHeader";
import { MarqueeDemoVertical } from "./Components/HeroSlider";
import ContactForm from "./Components/Contact";
import Benefits from "./Components/Benefits";
import FinalCta from "./Components/FinalCta";

const Homepage = () => {
  const aboutlink = useRef(null);
  const featureLink = useRef(null);
  const contactLink = useRef(null);
  return (
    <>
      <Navbar />
      {/* <Header
        aboutlink={aboutlink}
        featureLink={featureLink}
        contactLink={contactLink}
      /> */}

      <Hero />
      <MarqueeDemo />

      <About aboutlink={aboutlink} />

      <Vision />
      <ParentCompany />
      {/* <Benefits /> */}
      <Features featureLink={featureLink} />
      <ContactForm contactLink={contactLink} />
      <FinalCta />
      <FooterBlock />

      {/* <HeroSection /> */}
    </>
  );
};

export default Homepage;
