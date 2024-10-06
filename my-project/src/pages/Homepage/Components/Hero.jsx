import React from "react";
import heroImg from "../../../assets/hero-img.png";

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
                  Get the perfect
                  <span className="cxwmo c38qt c98p9 cyhno"> Partnership</span>
                </h1>
                <p
                  className="cxobv c6xyh ceonn font-Montserrat"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Creatorship connects creators with businesses and startups,
                  turning social influence into successful ventures. Businesses
                  gain brand-aligned creators to boost their growth, while
                  creators get the chance to turn creativity into impact. Let’s
                  build powerful partnerships together. Connect with us today!
                </p>

                {/* Buttons */}
                <div
                  className="c21hj ckig3 c0czj c896x cgkx4 cf5tr cw6hw c5mm2 c5llv cdcfy c8glp"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div>
                    <a
                      className="font-Montserrat hero-atc ctsgt ctopb c2c8i cwa1c ch1vk c4sti cpi22 cogk8 cmjy8 c38qt c98p9 c4nhw co504 cyhno cn4p0 cjkjb"
                      href="support.html"
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
                    className="hero-img cwihz"
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
