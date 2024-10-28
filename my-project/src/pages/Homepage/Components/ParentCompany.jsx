import React from "react";
import AnimatedBeamDemo from "./AnimatedBeamDemo";

const ParentCompany = () => {
  return (
    <div>
      <div className="parent-company-container max-w-7xl mx-auto px-4 pt-16 pb-12">
        <AnimatedBeamDemo />

        <div className="parent-card w-full bg-[#f8f8f8] rounded-lg mx-auto md:px-12 md:py-16 p-2 py-8 border-2">
          <h3 className="md:text-[3vw] md:leading-[3.5vw] lg:text-[2vw] font-Montserrat lg:leading-[2.2vw] font-semibold text-center text-white text-[5vw] leading-[6vw]">
            Persist Ventures, the parent company of Creatorship, has built a
            remarkable track record of success by partnering with businesses to
            help them scale and thrive.
          </h3>

          <div className="parent-facts flex justify-center md:gap-16 mt-10 flex-wrap gap-4">
            <div className="card text-center">
              <h2 className="md:text-[50px] text-[36px] font-bold font-Montserrat text-[#b46eff]">
                12+
              </h2>
              <p className="font-Montserrat font-medium text-white cxobv c6xyh ceonn m-0">
                Partnerships Made
              </p>
            </div>

            <div className="card text-center">
              <h2 className="md:text-[50px] text-[36px] font-bold font-Montserrat text-[#b46eff]">
                30+
              </h2>
              <p className="font-Montserrat font-medium text-white cxobv c6xyh ceonn m-0">
                Creators & Businesses
              </p>
            </div>

            <div className="card text-center">
              <h2 className="md:text-[50px] text-[36px] font-bold font-Montserrat text-[#b46eff]">
                500+
              </h2>
              <p className="font-Montserrat font-medium text-white cxobv c6xyh ceonn m-0">
                Professionals
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentCompany;
