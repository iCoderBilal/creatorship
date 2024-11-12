import React from "react";
import heroImg from "../../../assets/hero-img.png";
import { MarqueeDemoVertical } from "./HeroSlider";
import { SparklesTextDemo } from "./SparkleText";
import PulsatingButton from "../../../Components/PulseButton.jsx";
import { PulsatingButtonDemo } from "./HeroButton";

const Hero = () => {
  return (
    <>
      <div className="hero-section overflow-x-hidden sm:mb-0 mb-16">
        <div className="hero-section-container max-w-7xl mx-auto flex justify-between pt-28 pb-0 px-4 items-center flex-wrap lg:flex-nowrap">
          <div className="hero-content lg:basis-[46%] basis-[100%]">
            <h3 className="text-[12px] md:text-[16px] lg:text-left text-center lg:mx-0 mx-auto text-white py-[10px] px-[18px] font-bold bg-transparent rounded-[30px] w-fit font-Montserrat border-2 border-white mb-6">
              Leading Platform for Collaborations 🤝
            </h3>
            <h1
              className="c4nhw c1ig3 c7bak hero-heading font-bolder tracking-wider font-Faculty text-[#cb8ff9] lg:text-[4vw] text-[7vw] lg:text-left text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Find Your Perfect
              <span className="cxwmo c38qt c98p9 cyhno text-white ">
                {" "}
                <SparklesTextDemo />
              </span>
            </h1>
            <p
              className="cxobv c6xyh ceonn font-Faculty tracking-wide lg:text-left text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We connect creators with businesses that are a great match.
              Businesses get a boost from talented creators, while creators turn
              their ideas into real impact. Let's work together to make
              something awesome.
            </p>

            <div className="w-full flex  lg:min-w-max lg:items-center justify-center lg:justify-start">
              <a href="https://calendly.com/creatorships/" target="_blank">
                <PulsatingButtonDemo />
              </a>
            </div>
          </div>
          <div className="slider-hero-img lg:basis-[50%] basis-[100%]">
            <MarqueeDemoVertical />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
