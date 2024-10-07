import React from "react";
import aboutImg from "../../../assets/about-img.jpg";
import creator from "../../../assets/creator.jpg";
import aboutBusiness from "../../../assets/aboutBusiness.jpg";

const About = () => {
  return (
    <section data-aos-id-2="">
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
              <p className="cxobv c6xyh ceonn font-Montserrat md:px-[10vw] pb-[10px]">
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
                  />
                </div>
              </div>

              <div className="mt-12 mb-12 text-left grid lg:grid-cols-2 p-6 rounded-2xl bg-[#1E053D] max-w-2xl lg:max-w-6xl mx-auto lg:divide-x divide-y lg:divide-y-0 divide-gray-300 dark:divide-gray-800">
                <div className="flex items-start gap-6 lg:pr-6 pb-6 lg:pb-0">
                  <div className="w-28">
                    <img src={creator} className="rounded-lg" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h2 className="text-gray-200 dark:text-white font-semibold text-2xl font-Montserrat">
                      Creator
                    </h2>
                    <p className="text-gray-300 dark:text-gray-300 text-md font-Montserrat">
                      Anyone with social influence can partner with a business,
                      converting their social impact into an asset.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 lg:px-6 py-6 lg:py-0">
                  <div className="w-28">
                    <img src={aboutBusiness} className="rounded-lg" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h2 className="text-gray-200 dark:text-white font-semibold text-2xl font-Montserrat">
                      High Quality
                    </h2>
                    <p className="text-gray-300 dark:text-gray-300 text-md font-Montserrat">
                      Every business, small or big, needs market reach to grow
                      and generate business.
                    </p>
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