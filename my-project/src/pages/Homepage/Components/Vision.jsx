import React, { useEffect } from "react";

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
      <div className="vision-container">
        <div className="max-w-7xl mx-auto ">
          <div className="flex flex-wrap bg-white px-4 md:px-0 md:py-16 md:pb-2 py-6 rounded-lg justify-between items-center">
            <div className="benefit-content md:basis-[45%] basis-[100%]">
              <h2
                data-aos="fade-up"
                className="text-black text-left text-[9vw] leading-[9.5vw] md:text-[3.5vw] md:leading-[4vw] font-Montserrat font-bold"
              >
                Idea And Vision
              </h2>
              <p className="cxobv c6xyh ceonn font-Montserrat text-gray-700 pt-8 font-medium">
                In today's landscape, many successful creators look to transform
                their social influence into a business, but they often lack the
                expertise in entrepreneurship to fully capitalize on their
                impact.
                <div className="mb-4" />
                On the other hand, businesses, while supported by investors and
                proven models, frequently face stagnation due to limited market
                reach.
                <div className="mb-4" />
                At Creatorship, we unite creators and businesses, leveraging the
                unique strengths of each to foster growth and success. By
                combining the creativity and influence of creators with the
                business acumen of established companies, we create a win-win
                scenario for everyone involved.
              </p>
            </div>
            <div className="benefit-image md:basis-[50%] basis-[100%] flex justify-center items-center">
              <div className="md:w-[90%]">
                <dotlottie-player
                  src="https://lottie.host/7718f3f1-bd70-473d-b805-1de27ab23949/9V1avDzCxB.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;