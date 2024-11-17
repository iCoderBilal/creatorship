import React, { useRef } from "react";
import Hero from "./Components/Hero";
import "../../App.css";
import MarqueeDemo from "./Components/ReviewMarquee";
import About from "./Components/About";
import Vision from "./Components/Vision";
import ParentCompany from "./Components/ParentCompany";
import Features from "./Components/Features";
import FooterBlock from "./Components/Footer";
import Navbar from "../../Components/NewHeader";
import { MarqueeDemoVertical } from "./Components/HeroSlider";
import ContactForm from "./Components/Contact";
import Benefits from "./Components/Benefits";
import FinalCta from "./Components/FinalCta";
import FAQ from "./Components/FAQ";
import Worrying from "./Components/Worrying";

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

      <Worrying />

      <About aboutlink={aboutlink} />

      <Vision />

      <ParentCompany />
      {/* <Benefits /> */}
      <FAQ />
      <FinalCta />
      <FooterBlock />

      {/* <HeroSection /> */}
    </>
  );
};

export default Homepage;
