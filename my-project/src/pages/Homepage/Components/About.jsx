import React, { useState } from "react";
import creator from "../../../assets/social-media.png";
import { Link } from "react-router-dom";
import businessImg from "../../../assets/business-3d.png";

const About = ({ aboutlink }) => {
  const [isCreator, setIsCreator] = useState(true);

  const changeState = (state) => {
    setIsCreator(state);
  };
  return (
    <>
      {/* <MyComponent /> */}
      <div className="about-section relative">
        {/* <RippleDemo /> */}
        {/* <img src={vector1} className="w-[100px] absolute top-[20%] left-[0]" /> */}
        <div className="about-container max-w-7xl mx-auto py-16 px-4">
          {/* <h2
            data-aos="fade-up"
            className=" text-white mb-4 text-center text-[9vw] leading-[9.5vw] md:text-[3.5vw] md:leading-[4vw] font-Montserrat font-bold"
          >
            Work With Us
          </h2>

          <p className="cxobv c6xyh ceonn font-Montserrat text-center lg:max-w-[800px] lg:mx-auto">
            Creatorship is a platform that serves as a mediator and facilitator
            for business deals and brand collaborations between creators and
            businesses.
          </p> */}

          <div className="z-[999] about-button-container justify-center flex flex-wrap bg-[#654e7f] text-white w-fit rounded-lg p-3 mx-auto">
            <button
              onClick={() => changeState(true)}
              className={`py-2 md:px-16 px-6 md:text-[22px] text-[18px] font-Montserrat font-bold rounded-lg ease-in-out duration-300 ${
                isCreator ? "bg-white text-black" : "bg-transparent text-white"
              }`}
            >
              Creator
            </button>
            <button
              onClick={() => changeState(false)}
              className={`py-2 md:px-16 px-6 md:text-[22px] text-[18px] font-Montserrat font-bold rounded-lg ease-in-out duration-300 ${
                isCreator ? "bg-transparent text-white" : " bg-white text-black"
              }`}
            >
              Business
            </button>
          </div>

          <div className="about-content-div flex justify-between lg:flex-nowrap flex-wrap mt-4 gap-[50px] lg:p-8 pb-0 items-center rounded-lg">
            {isCreator ? (
              <div className="flex-content basis-[100%] ">
                <div className=" rouned-[30px] w-fit rounded-t-[30px] mt-0 mx-auto">
                  <img
                    src={creator}
                    className="lg:w-[18vw] w-[35vw] mx-auto mb-2 z-[999]"
                  />
                </div>
                <h2
                  data-aos="fade-up"
                  className=" text-white mb-4 text-center text-[7vw] leading-[7.5vw] md:text-[3vw] md:leading-[3.5vw] font-Montserrat font-bold"
                >
                  Unlock Your Potential as a Creator
                </h2>
                <p className="cxobv c6xyh ceonn font-Montserrat text-center lg:max-w-[900px] mx-auto">
                  If you have social influence, you can partner with businesses
                  to turn your creativity into valuable opportunities. At
                  Creatorship, we help you convert your social impact into a
                  real asset, giving you the chance to grow and succeed.
                </p>
                <div className="w-[100%] flex justify-center">
                  <div className="w-full flex sm:w-max lg:min-w-max lg:items-center justify-center">
                    <Link to="/creator">
                      <button className="button-hover  font-Montserrat font-bold relative inline-flex h-10 w-full items-center justify-center rounded-md bg-white px-6 text-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 duration-200 ease-in-out transition">
                        <div className="font-bold absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-content basis-[100%] ">
                <div className=" rouned-[30px] w-fit rounded-t-[30px] mt-0 mx-auto">
                  <img
                    src={businessImg}
                    className="lg:w-[20vw] w-[35vw] mx-auto mb-2 z-[999]"
                  />
                </div>
                <h2
                  data-aos="fade-up"
                  className=" text-white mb-4 text-center text-[7vw] leading-[7.5vw] md:text-[3vw] md:leading-[3.5vw] font-Montserrat font-bold"
                >
                  Partner with Passionate Creators
                </h2>
                <p className="cxobv c6xyh ceonn font-Montserrat text-center lg:max-w-[900px] mx-auto">
                  Looking to expand your brand's reach and connect with a wider
                  audience? Our platform brings together talented creators who
                  can help you create engaging content and connect with new
                  markets. Partner with experts who understand your target
                  audience and can help you elevate your brand's visibility.
                </p>
                <div className="w-[100%] flex justify-center">
                  <div className="w-full flex sm:w-max lg:min-w-max lg:items-center justify-center">
                    <Link to="/business">
                      <button className="button-hover  font-Montserrat font-bold relative inline-flex h-10 w-full items-center justify-center rounded-md bg-white px-6 text-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 duration-200 ease-in-out transition">
                        <div className="font-bold absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
