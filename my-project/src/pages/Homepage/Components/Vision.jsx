import React, { useEffect } from "react";
import { NeonGradientCardDemo } from "./NeonBackground";

const Vision = () => {
  useEffect(() => {
    // Dynamically load the dotlottie-player component script
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <div className="vision w-full lg:pb-0 pb-16 pt-4">
        <div className="flex-wrap lg:flex-nowrap vision-container max-w-7xl md:mx-auto h-full bg-[#1E053D]/30 backdrop-blur-md rounded-lg flex justify-between items-center md:px-16 py-0 px-4 mx-4">
          {/* <NeonGradientCardDemo /> */}
          <div className="content lg:basis-[50%] basis-[100%] lg:order-1 order-2">
            <h2
              data-aos="fade-up"
              className="text-white text-center hidden lg:block text-[9vw] leading-[9.5vw] md:text-[3.5vw] md:leading-[4vw] font-Montserrat font-bold"
            >
              Idea And Vision
            </h2>
            <p
              className="cxobv c6xyh ceonn font-Montserrat text-gray-200 pt-8 font-medium mt-[-60px] lg:mt-0 text-center"
              data-aos="fade-up"
            >
              Creatorship bridges the gap.{" "}
              <span className="text-[#fff] font-extrabold tracking-wider">
                We connect creators with their ideal business partners,
              </span>{" "}
              leveraging their combined strengths for mutual growth. Imagine
              creators' influence fuels brand reach, while business expertise
              fosters creator success. It's a win-win for creators and
              businesses alike.
              <div className="mb-4"></div>
              Together, we unlock limitless possibilities, propelling both
              creators and businesses towards unprecedented success.
            </p>

            <div className="w-fit mx-auto">
              <a href="https://calendly.com/creatorships/" target="_blank">
                <button className="button-hover  font-Montserrat font-bold relative inline-flex h-10 w-full items-center justify-center rounded-md bg-white px-6 text-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 duration-200 ease-in-out transition">
                  <div className="font-bold absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
                  Book a Meeting
                </button>
              </a>
            </div>
          </div>

          <div className="vision-img lg:basis-[50%] basis-[100%] lg:order-2 order-1">
            <h2
              data-aos="fade-up"
              className="text-white mt-8 mb-[-20px] text-center lg:hidden  text-[9vw] leading-[9.5vw] md:text-[3.5vw] md:leading-[4vw] font-Montserrat font-bold"
            >
              Idea And Vision
            </h2>
            <div className="md:w-[100%]">
              <dotlottie-player
                src="https://lottie.host/87e9fabd-c4c6-49ac-8443-2ca3679a46b3/XqN61y43od.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
