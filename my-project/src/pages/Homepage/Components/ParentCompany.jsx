import React from "react";
import pvimg from "../../../assets/pvImg.webp";
import partnerImg from "../../../assets/partner.png";
import creatorImg from "../../../assets/creator.png";
import professionalImg from "../../../assets/professionals.png";

const ParentCompany = () => {
  return (
    <>
      <section className="c2wd7 ca769" data-aos-id-3="">
        <div className="cqx6l cyhno cdcfy">
          {/* Bg */}
          <div
            className="cmgtd cistn cre2j cfl7l cx5bd c5llv ctehq cakxp c5wvp"
            aria-hidden="true"
          ></div>

          <div className="cl9ye cc8xx cdcfy chlof">
            <div className="cip9c c4i6y cpu0s">
              {/* Section content */}
              <div className="cwihz cqmiq c38qt cwegj c17z2 clpz0 cyhno c4pup cklpe cdcfy c29n1">
                {/* Content */}
                <div className="cn3on cduyv cb320 ce0su">
                  {/* Copy */}
                  <h2
                    data-aos="fade-up"
                    className="text-black text-left text-[9vw] leading-[9.5vw] md:text-[3.5vw] md:leading-[4vw] font-Montserrat font-bold mb-2"
                  >
                    Parent Company
                  </h2>
                  <p
                    className="c3z20 c6xyh ceonn font-Montserrat"
                    data-aos="fade-up"
                    data-aos-anchor="[data-aos-id-3]"
                    data-aos-delay="200"
                  >
                    Persist Ventures, the parent company of Creatorship, helps
                    businesses grow and succeed. As a full-service venture
                    accelerator, we offer brand design, strategy consulting, and
                    investor connections to help companies reach their next
                    level. Our team has expertise across many sectors, ensuring
                    every business gets the support it needs.
                  </p>

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
                <div className="cwihz ctp1d cogs9 c60si cjkjb c8r7v">
                  <div className="cyhno ctp3x cy4vq">
                    <img
                      src={pvimg}
                      className="cwihz"
                      width="496"
                      height="496"
                      alt="Features 03"
                      data-aos="fade-up"
                      data-aos-anchor="[data-aos-id-3]"
                    />

                    <div className="parent-stats flex justify-evenly mt-4">
                      <div className="parent-stat">
                        <img src={partnerImg} className="w-[90px] mx-auto" />
                        <h2 className="text-center text-[26px] font-bold font-Montserrat">
                          12+
                        </h2>
                        <p className="text-center font-Montserrat">
                          Partnerships made
                        </p>
                      </div>
                      <div className="parent-stat">
                        <img
                          src={creatorImg}
                          className="w-[80px] mx-auto mb-2"
                        />
                        <h2 className="text-center text-[26px] font-bold font-Montserrat">
                          30+
                        </h2>
                        <p className="text-center font-Montserrat">
                          Creators & Businesses
                        </p>
                      </div>
                      <div className="parent-stat">
                        <img
                          src={professionalImg}
                          className="w-[65px] mx-auto mb-4 mt-2"
                        />
                        <h2 className="text-center text-[26px] font-bold font-Montserrat">
                          500+
                        </h2>
                        <p className="text-center font-Montserrat">
                          Professionals
                        </p>
                      </div>
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