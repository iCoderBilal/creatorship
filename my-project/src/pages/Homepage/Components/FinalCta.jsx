import React from "react";
import { Link } from "react-router-dom";
import ctaFinal from "../../../assets/creator-img-about.png";

const FinalCta = () => {
  return (
    <div>
      <div className="final-cta mx-4 mb-20">
        <div className="max-w-7xl mx-auto bg-purple-500 rounded-lg  md:pt-16 pt-8 pb-0 mb-12 final-cta-container">
          <h2
            data-aos="fade-up"
            className="text-white text-center text-[7vw] leading-[7.5vw] md:text-[3vw] md:leading-[3.5vw] font-Montserrat font-bold px-4 lg:mb-2 mb-4"
          >
            Connect. Collaborate. Succeed.
          </h2>
          <p className="cxobv c6xyh ceonn font-Montserrat text-center px-4 mb-4">
            Build strong partnerships to reach new heights.
          </p>

          <div className="w-[100%] flex justify-center md:mb-0 mb-4">
            <div className="w-full flex sm:w-max lg:min-w-max lg:items-center justify-center">
              <a href="https://calendly.com/creatorships/" target="_blank">
                <button className="button-hover  font-Montserrat font-bold relative inline-flex h-10 w-full items-center justify-center rounded-md bg-white px-6 text-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 duration-200 ease-in-out transition">
                  <div className="font-bold absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
                  Get Started
                </button>
              </a>
            </div>
          </div>
          <img src={ctaFinal} alt="Final Cta Image" className="opacity-[0.7]" />
        </div>
      </div>
    </div>
  );
};

export default FinalCta;
