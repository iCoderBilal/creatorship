import React from "react";
import featureImg from "../../../assets/business-feature.jpg";
import shadowImg from "../../../assets/Shadow.png";

const FeaturesSection = () => {
  return (
    <div className="business-featuer-secion max-w-7xl mx-auto md:py-32 md:pb-20 py-0 pb-24 px-4 relative">
      <img
        src={shadowImg}
        className="w-[600px] absolute top-[15%]  md:bottom-[0%] right-[0%] z-[-999]"
      />
      <h1
        className="mb-12 text-center text-[9vw] leading-[9.5vw] md:text-[3.5vw] md:leading-[4vw] font-Montserrat font-bold text-black"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Benefits For Your Business
      </h1>
      <div className="flex flex-col lg:flex-row">
        {/* Image Section - Adjusted for better mobile responsiveness */}

        {/* Text Section */}
        <div className="flex-1 md:p-10 md:order-2 flex items-center">
          <ul className="space-y-0">
            <li className="flex items-start">
              <span className="text-[#8649D0] mt-1 mr-2">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </span>
              <div>
                <h3 className="text-2xl font-bold text-black font-Montserrat">
                  Targeted Exposure
                </h3>
                <p className="cxobv c6xyh ceonn font-Montserrat text-gray-600 font-medium">
                  Gain targeted visibility in specific markets through strategic
                  creator collaborations.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#8649D0] mt-1 mr-2">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </span>
              <div>
                <h3 className="text-2xl font-bold text-black font-Montserrat">
                  Cost-Effective Marketing
                </h3>
                <p className="cxobv c6xyh ceonn font-Montserrat text-gray-600 font-medium">
                  Achieve higher ROI compared to traditional advertising methods
                  through performance-based agreements.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[#8649D0] mt-1 mr-2">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </span>
              <div>
                <h3 className="text-2xl font-bold text-black font-Montserrat">
                  Scalable Opportunities
                </h3>
                <p className="cxobv c6xyh ceonn font-Montserrat text-gray-600 font-medium mb-0">
                  From small projects to large-scale campaigns, scale your
                  efforts to meet business needs without overhead complexities.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="md:flex-1 md:order-1">
          <img
            src={featureImg} // Replace with your actual image URL
            alt="Feature visual"
            className="w-full md:h-auto object-cover shadow-lg rounded-[20px] mt-12 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
