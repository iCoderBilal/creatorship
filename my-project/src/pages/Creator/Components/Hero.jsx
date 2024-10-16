import React from "react";
import heroImg from "../../../assets/hero-img.png";
import creator1 from "../../../assets/creator-1.jpg";
import creator3 from "../../../assets/creator-3.webp";
import creator4 from "../../../assets/creator-4.jpg";
import creator2 from "../../../assets/kritika-khurana-3.jpg";

const Hero = () => {
  return (
    <main className="c7e8i">
      {/* Hero */}
      <section className="cyhno">
        {/* Bg */}
        <div
          className="chf8c cistn ch1vk c5aqy c43am cx5bd c5llv ctehq cakxp coou2"
          aria-hidden="true"
        ></div>

        <div className="creator-hero relative">
          <img
            src={creator1}
            className="w-[70px] rounded-full absolute left-[30%] md:top-[20%]  top-[13%]"
          />

          <img
            src={creator3}
            className="w-[70px] rounded-full absolute right-[30%] md:top-[18%] top-[11%]"
          />

          <img
            src={creator4}
            className="w-[70px] rounded-full absolute left-[40%] bottom-[8%] hidden lg:block"
          />

          <img
            src={creator2}
            className="w-[70px] rounded-full absolute right-[30%] bottom-[10%] hidden lg:block"
          />
          <div className="hero-content max-w-7xl mx-auto pb-32 sm:pt-[35vw] lg:pt-[15vw] pt-[50vw] px-[8vw]">
            <h1
              className="c4nhw c1ig3 c7bak hero-heading font-Montserrat text-center creator-hero-heading"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Turn Your Followers into Opportunities
            </h1>

            <p
              className="cxobv c6xyh ceonn font-Montserrat text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              At Creatorships, we help creators utilize their social presence by
              connecting them with established businesses or brands. This
              partnership forms a creatorship, enabling both the business and
              the creator to thrive. Our goal is to foster growth and success
              for all parties involved.
            </p>

            <div className="w-fit mx-auto mb-4 md:mb-0">
              <a
                target="_blank"
                className="duration-300 font-bold ease-in-out hover:bg-[#B077EE] font-Montserrat hero-atc ctsgt ctopb c2c8i cwa1c ch1vk c4sti cpi22 cogk8 cmjy8 c38qt c98p9 c4nhw co504 cyhno cn4p0 cjkjb"
                href="https://calendly.com/jackjay"
              >
                Get Brand Deals
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
