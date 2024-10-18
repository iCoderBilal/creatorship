import React from "react";

const ExclusiveFeatures = () => {
  return (
    <div className="bg-white py-24 max-w-7xl mx-auto">
      <h2 className="text-center text-2xl font-bold mb-6">
        Exclusive features
      </h2>
      <div className="flex flex-wrap justify-between px-4">
        {/* Feature 1 */}
        <div className="basis-[48%] w-full shadow-lg overflow-hidden bg-[#401F65] p-4 rounded-[15px]">
          <div className="exlusive-feature-1 p-6 rounded-[15px]">
            <h1
              className="mb-12 text-left text-[9vw] leading-[9.5vw] md:text-[2.3vw] md:leading-[2.5vw] font-Montserrat font-bold text-white"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Share in Success with Equity-Based Partnerships
            </h1>
            <p className="cxobv c6xyh ceonn font-Montserrat text-gray-200 font-medium">
              Our equity-based partnerships mean you share in the success of the
              collaborations you help build. This model ensures that as the
              business grows, so do your earnings and stake in the outcome. It’s
              not just about sponsorship; it’s about building a lasting legacy
              and wealth.
            </p>
            <button className="bg-white text-brand-purple font-bold py-2 px-4 rounded hover:bg-gray-100">
              Start Building Wealth Now
            </button>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="basis-[48%] w-full shadow-lg overflow-hidden exlusive-feature-1  p-4 rounded-[15px]">
          <div className=" p-6 rounded-[15px] bg-[#F4F7FA]">
            <h1
              className="mb-12 text-left text-[9vw] leading-[9.5vw] md:text-[2.3vw] md:leading-[2.5vw] font-Montserrat font-bold text-black"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Share in Success with Equity-Based Partnerships
            </h1>
            <p className="cxobv c6xyh ceonn font-Montserrat text-gray-600 font-medium">
              Our equity-based partnerships mean you share in the success of the
              collaborations you help build. This model ensures that as the
              business grows, so do your earnings and stake in the outcome. It’s
              not just about sponsorship; it’s about building a lasting legacy
              and wealth.
            </p>
            <button className="bg-white text-brand-purple font-bold py-2 px-4 rounded hover:bg-gray-100">
              Start Building Wealth Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveFeatures;
