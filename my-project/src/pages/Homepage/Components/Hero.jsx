import React from "react";
import heroImg from "../../../assets/hero-img.png";
import { MarqueeDemoVertical } from "./HeroSlider";
import { SparklesTextDemo } from "./SparkleText";
import PulsatingButton from "../../../Components/PulseButton.jsx";
import { PulsatingButtonDemo } from "./HeroButton";

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-section-container max-w-7xl mx-auto flex justify-between pt-28 pb-0 px-4 items-center">
          <div className="hero-content basis-[46%]">
            <h1
              className="c4nhw c1ig3 c7bak hero-heading font-Montserrat text-[#cb8ff9] lg:text-[3.8vw] tracking-wide"
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
              className="cxobv c6xyh ceonn font-Montserrat"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We connect creators with businesses that are a great match.
              Together, you can build amazing things. Businesses get a boost
              from talented creators, while creators turn their ideas into real
              impact. Let's work together to make something awesome.
            </p>

            <div className="w-full flex sm:w-max lg:min-w-max lg:items-center">
              <PulsatingButtonDemo />
            </div>
          </div>
          <div className="hero-img basis-[50%]">
            <MarqueeDemoVertical />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
