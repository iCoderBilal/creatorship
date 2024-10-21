import React from "react";
import aboutImg from "../../../assets/about-img.jpg";
import creator from "../../../assets/creator.jpg";
import aboutBusiness from "../../../assets/aboutBusiness.jpg";
import { Link } from "react-router-dom";

const About = ({ aboutlink }) => {
  return (
    <section data-aos-id-2="" ref={aboutlink} id="aboutsection">
      <div className="cqx6l cyhno cdcfy">
        {/* Background */}
        <div
          className="clmcm cistn cbnx3 cx5bd c5llv ctehq cakxp c5wvp about-section"
          aria-hidden="true"
        ></div>

        <section className="min-h-max ">
          {/* <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-br from-purple-800 opacity-90 blur-lg dark:from-purple-800 dark:blur-xl dark:opacity-40" /> */}
          <div className="w-full flex items-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2/5 aspect-[2/0.5] bg-gradient-to-br from-purple-600 to-pink-400 rounded-full opacity-50 blur-2xl" />
            <div className="min-h-max relative mx-auto pt-16 md:pt-0 lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 text-center ">
              <h2
                data-aos="fade-up"
                className="text-white px-[10px] text-center text-[9vw] leading-[9.5vw] md:text-[3.5vw] md:leading-[4vw] font-Montserrat font-bold pb-8 md:pb-8 md:pt-16"
              >
                Work With Us
              </h2>
              <p
                className="cxobv c6xyh ceonn font-Montserrat md:px-[10vw] pb-[10px]"
                data-aos="fade-up"
              >
                Creatorship is a platform that serves as a mediator and
                facilitator for business deals and brand collaborations between
                creators and businesses.
              </p>

              <div className="mx-auto max-w-6xl rounded-t-2xl overflow-hidden px-2 pt-2 bg-transparent">
                <div className="h-[250px] md:h-auto">
                  <img
                    src={aboutImg}
                    alt="product image"
                    className="rounded-lg w-full dark:hidden h-full object-cover"
                    data-aos="fade-up"
                  />
                </div>
              </div>

              <div className="mt-12 mb-12 text-left grid lg:grid-cols-2 p-6 rounded-2xl bg-[#1E053D] max-w-2xl lg:max-w-6xl mx-auto lg:divide-x divide-y lg:divide-y-0 divide-gray-300 dark:divide-gray-800">
                <div>
                  <div
                    className="flex-wrap flex items-start gap-6 lg:pr-6 pb-0 "
                    data-aos="fade-up"
                  >
                    <div className="w-28 mx-auto">
                      <img src={creator} className="rounded-lg mx-auto" />
                    </div>
                    <div className="md:flex-1 basis-[100%] space-y-1">
                      <h2 className="text-gray-200 dark:text-white font-semibold md:text-2xl text-xl font-Montserrat md:text-left text-center">
                        Creator
                      </h2>
                      <p className="text-gray-300 dark:text-gray-300 md:text-[16px] text-[16px] font-Montserrat  md:text-left text-center">
                        Anyone with social influence can partner with a
                        business, converting their social impact into an asset.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-[96%] w-[100%] mt-4 lg:mb-0 mb-4">
                    <Link to="/creator">
                      <a
                        target="_blank"
                        className="duration-300 ease-in-out hover:bg-[#B077EE] font-Montserrat hero-atc ctsgt ctopb c2c8i cwa1c ch1vk c4sti cpi22 cogk8 cmjy8 c38qt c98p9 c4nhw co504 cyhno cn4p0 cjkjb"
                      >
                        Learn More
                      </a>
                    </Link>
                  </div>
                </div>

                <div>
                  <div
                    className="flex-wrap flex items-start gap-6 lg:px-6 pt-6 lg:py-0"
                    data-aos="fade-up"
                  >
                    <div className="w-28 mx-auto">
                      <img src={aboutBusiness} className="rounded-lg" />
                    </div>
                    <div className="md:flex-1 basis-[100%] space-y-1">
                      <h2 className="text-gray-200 dark:text-white font-semibold md:text-2xl text-xl font-Montserrat text-center md:text-left">
                        Business
                      </h2>
                      <p className="text-gray-300 dark:text-gray-300 md:text-[16px] text-[16px] font-Montserrat text-center md:text-left">
                        Every business, small or big, needs market reach to grow
                        and generate business.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-[96%] w-[100%] lg:ml-5 mt-4">
                    <Link to="/business">
                      <a
                        target="_blank"
                        className="duration-300 ease-in-out hover:bg-[#B077EE] font-Montserrat hero-atc ctsgt ctopb c2c8i cwa1c ch1vk c4sti cpi22 cogk8 cmjy8 c38qt c98p9 c4nhw co504 cyhno cn4p0 cjkjb"
                      >
                        Learn More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
