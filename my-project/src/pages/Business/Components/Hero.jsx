import React from "react";
import heroImg from "../../../assets/business-hero.jpg";

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

        <div className="cl9ye cc8xx cdcfy chlof">
          <div className="c823v c6lgd cmprh">
            {/* Hero content */}
            <div className="cwihz cqmiq clpz0 cyhno c4pup cdcfy hero-content">
              {/* Content */}
              <div className="c13k6">
                {/* Copy */}
                <h1
                  className="c4nhw c1ig3 c7bak hero-heading font-Montserrat"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Unlock New Growth Avenues
                </h1>
                <p
                  className="cxobv c6xyh ceonn font-Montserrat"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Explore fresh opportunities for your business by teaming up
                  with talented creators. Our platform connects you with
                  innovative minds who can help elevate your brand and reach
                  diverse new markets. Experience a boost in visibility and
                  engagement as you collaborate with experts who speak directly
                  to your audience.
                </p>

                {/* Buttons */}
                <div
                  className="c21hj ckig3 c0czj c896x cgkx4 cf5tr cw6hw c5mm2 c5llv cdcfy c8glp"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div>
                    <a
                      target="_blank"
                      className="duration-300 ease-in-out hover:bg-[#B077EE] font-Montserrat hero-atc ctsgt ctopb c2c8i cwa1c ch1vk c4sti cpi22 cogk8 cmjy8 c38qt c98p9 c4nhw co504 cyhno cn4p0 cjkjb"
                      href="https://calendly.com/jackjay"
                    >
                      Get Brand Deals
                    </a>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="c8hvl cwihz c2zer czzq5 czk18 ctp1d c5llv cdcfy c9wuj hero-img-main-div">
                <div className="cyhno ctp3x c29tm cmlc2">
                  {/* Image */}
                  <img
                    src={heroImg}
                    className="hero-img cwihz rounded-tl-[20px] rounded-tr-[20px]"
                    alt="Credit card"
                    data-aos="fade-up"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
