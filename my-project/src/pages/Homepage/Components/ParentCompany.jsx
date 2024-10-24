import React from "react";
import pvimg from "../../../assets/pvImg.png";
import partnerImg from "../../../assets/partner.png";
import creatorImg from "../../../assets/creator.png";
import professionalImg from "../../../assets/professionals.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ParentCompany = () => {
  const sliderSettings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
  };

  const isMobile = window.innerWidth < 768;
  return (
    <>
      <section className="c2wd7 ca769 parent" data-aos-id-3="">
        <div className="cqx6l cyhno cdcfy">
          {/* Bg */}
          <div
            className="cmgtd cistn cre2j cfl7l cx5bd c5llv ctehq cakxp c5wvp"
            aria-hidden="true"
          ></div>

          <div className="cl9ye cc8xx cdcfy chlof">
            <div className="cip9c c4i6y cpu0s">
              {/* Section content */}
              <div className="cwihz cqmiq c38qt cwegj c17z2 clpz0 cyhno c4pup cklpe cdcfy c29n1 lg:flex-row flex-col">
                {/* Content */}
                <div className="cn3on cduyv cb320 ce0su md:mt-8 lg:mt-0">
                  {/* Copy */}
                  <h2
                    data-aos="fade-up"
                    className="text-black lg:text-left text-center text-[9vw] leading-[9.5vw] md:text-[3.5vw] md:leading-[4vw] font-Montserrat font-bold mb-2"
                  >
                    Parent Company
                  </h2>
                  <p
                    className="c3z20 c6xyh ceonn font-Montserrat text-gray-600 text-center lg:text-left"
                    data-aos="fade-up"
                    data-aos-anchor="[data-aos-id-3]"
                    data-aos-delay="200"
                  >
                    Persist Ventures, the parent company of Creatorship, has
                    built a remarkable track record of success by partnering
                    with businesses to help them scale and thrive. As a
                    full-service venture accelerator, Persist Ventures provides
                    everything from brand design and strategic consulting to
                    introductions to investors, helping companies achieve their
                    next level of growth. Our diverse team offers expertise
                    across multiple sectors, ensuring that no business is left
                    without the support it needs.
                  </p>

                  <div data-aos="fade-up">
                    <a
                      target="_blank"
                      className="bg-[#8649D0] hover:bg-[#643A8F] ease-out duration-300 text-white font-Montserrat hero-atc ctsgt ctopb c2c8i cwa1c ch1vk c4sti cpi22 cogk8 cmjy8 c38qt c98p9 c4nhw co504 cyhno cn4p0 cjkjb py-3"
                      href="https://persistventures.com/"
                    >
                      Visit Website
                    </a>
                  </div>

                  {/* Button */}
                  <div
                    className="c0czj cw6hw cdcfy ceonn"
                    data-aos="fade-up"
                    data-aos-anchor="[data-aos-id-3]"
                    data-aos-delay="300"
                  ></div>

                  {/* Quote */}
                  <div
                    className="cjmb3 chwvs ctp3x cdcfy c29n1"
                    data-aos="fade-up"
                    data-aos-anchor="[data-aos-id-3]"
                    data-aos-delay="300"
                  ></div>
                </div>

                {/* Image */}
                <div className="cwihz ctp1d cogs9 c60si cjkjb c8r7v lg:mr-[70px] mr-0">
                  <div className="cyhno ctp3x cy4vq">
                    <img
                      src={pvimg}
                      className="cwihz mx-auto mb-12 md:w-[340px] w-[200px]"
                      alt="Features 03"
                      data-aos="fade-up"
                      data-aos-anchor="[data-aos-id-3]"
                    />

                    <div
                      className="parent-stats md:gap-0 gap-6 mt-4"
                      data-aos="fade-up"
                    >
                      {isMobile ? (
                        <Slider {...sliderSettings}>
                          <div className="parent-stat md:w-auto w-[280px]">
                            <img
                              src={partnerImg}
                              className="md:w-[60px] w-[70px] mx-auto"
                            />
                            <h2 className="text-center md:text-[26px] text-[28px] font-bold font-Montserrat text-[#8649D0]">
                              12+
                            </h2>
                            <p className="text-center font-Montserrat font-medium text-[18px] md:text-[16px]">
                              Partnerships made
                            </p>
                          </div>
                          <div className="parent-stat md:w-auto w-[280px]">
                            <img
                              src={creatorImg}
                              className="md:w-[60px] w-[70px] mx-auto mb-0"
                            />
                            <h2 className="text-center md:text-[26px] text-[28px] font-bold font-Montserrat text-[#8649D0]">
                              30+
                            </h2>
                            <p className="text-center font-Montserrat font-medium text-[18px] md:text-[16px]">
                              Creators & Businesses
                            </p>
                          </div>
                          <div className="parent-stat md:w-auto w-[280px]">
                            <img
                              src={professionalImg}
                              className="md:w-[45px] w-[60px] mx-auto mb-2 mt-2"
                            />
                            <h2 className="text-center md:text-[26px] text-[28px] font-bold font-Montserrat text-[#8649D0]">
                              500+
                            </h2>
                            <p className="text-center font-Montserrat font-medium text-[18px] md:text-[16px]">
                              Professionals
                            </p>
                          </div>
                        </Slider>
                      ) : (
                        <div className="flex justify-evenly flex-wrap">
                          <div className="parent-stat md:w-auto w-[280px]">
                            <img
                              src={partnerImg}
                              className="md:w-[60px] w-[70px] mx-auto"
                            />
                            <h2 className="text-center md:text-[26px] text-[28px] font-bold font-Montserrat text-[#8649D0]">
                              12+
                            </h2>
                            <p className="text-center font-Montserrat font-medium text-[18px] md:text-[16px]">
                              Partnerships made
                            </p>
                          </div>
                          <div className="parent-stat md:w-auto w-[280px]">
                            <img
                              src={creatorImg}
                              className="md:w-[60px] w-[70px] mx-auto mb-0"
                            />
                            <h2 className="text-center md:text-[26px] text-[28px] font-bold font-Montserrat text-[#8649D0]">
                              30+
                            </h2>
                            <p className="text-center font-Montserrat font-medium text-[18px] md:text-[16px]">
                              Creators & Businesses
                            </p>
                          </div>
                          <div className="parent-stat md:w-auto w-[280px]">
                            <img
                              src={professionalImg}
                              className="md:w-[45px] w-[60px] mx-auto mb-2 mt-2"
                            />
                            <h2 className="text-center md:text-[26px] text-[28px] font-bold font-Montserrat text-[#8649D0]">
                              500+
                            </h2>
                            <p className="text-center font-Montserrat font-medium text-[18px] md:text-[16px]">
                              Professionals
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* <div>
                      <a
                        className="font-Montserrat hero-atc ctsgt ctopb c2c8i cwa1c ch1vk c4sti cpi22 cogk8 cmjy8 c38qt c98p9 c4nhw co504 cyhno cn4p0 cjkjb"
                        href="support.html"
                      >
                        Get Brand Deals
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParentCompany;
