import React from "react";

const ExclusiveFeatures = () => {
  return (
    <div className="bg-white py-24 sm:pt-24 pt-0 sm:pb-0 lg:pb-8 max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-between px-4 lg:gap-0 gap-6">
        {/* Feature 1 */}
        <div className="lg:basis-[48%] basis-[100%] w-full shadow-lg overflow-hidden bg-[#401F65] p-4 rounded-[15px]">
          <div className="exlusive-feature-1 lg:p-6 p-4 rounded-[15px] h-full">
            <h1
              className="mb-12 text-left text-2xl md:text-[2.3vw] md:leading-[2.5vw] font-Montserrat font-bold text-white"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Success With Equity-Based Partnerships
            </h1>

            <p className="cxobv c6xyh ceonn font-Montserrat text-gray-100 font-medium lg:mt-[75px]">
              Our equity-based partnerships mean you share in the success of the
              collaborations you help build. This model ensures that as the
              business grows, so do your earnings and stake in the outcome. It’s
              not just about sponsorship; it’s about building a lasting legacy
              and wealth.
            </p>
            <div>
              <a
                target="_blank"
                className=" py-3 duration-300 font-bold ease-in-out hover:bg-[#B077EE] font-Montserrat hero-atc ctsgt ctopb c2c8i cwa1c ch1vk c4sti cpi22 cogk8 cmjy8 c38qt c98p9 c4nhw co504 cyhno cn4p0 cjkjb"
                href="https://calendly.com/jackjay"
              >
                Join Our Program
              </a>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="lg:basis-[48%] basis-[100%] w-full shadow-lg overflow-hidden exlusive-feature-1  p-4 rounded-[15px]">
          <div className=" lg:p-6 p-4 rounded-[15px] bg-[#F4F7FA] h-full">
            <h1
              className="mb-12 text-left text-2xl md:text-[2.3vw] md:leading-[2.5vw] font-Montserrat font-bold text-black"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Building Brands from Scratch
            </h1>
            <p className="cxobv c6xyh ceonn font-Montserrat text-gray-600 font-medium">
              Ever dreamed of having your own brand? We make it a reality. At
              Creatorship, we specialize in building brands from scratch,
              tailored to your vision and voice. Our team supports you every
              step of the way, from initial concept to market launch, ensuring
              you have a professional, market-ready brand that stands out.
            </p>
            <div>
              <a
                target="_blank"
                className="bg-[#8649D0] text-white py-3  duration-300 ease-in-out hover:bg-[#643A8F] font-Montserrat hero-atc ctsgt ctopb c2c8i cwa1c ch1vk c4sti cpi22 cogk8 cmjy8 c38qt c98p9 c4nhw co504 cyhno cn4p0 cjkjb"
                href="https://calendly.com/jackjay"
              >
                Join Our Program
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveFeatures;
