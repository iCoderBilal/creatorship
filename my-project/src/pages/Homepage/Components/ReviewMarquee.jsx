import { cn } from "../../../lib/utils.js";
import Marquee from "../../../Components/Marquee.Jsx";
import Star from "../../../assets/review-star.png";
import swissLogo from "../../../assets/swiss-mote.png";
import ovaLogo from "../../../assets/ova-drive.png";
import goodLogo from "../../../assets/good-logo.png";
import socialLogo from "../../../assets/social.png";
import systemLogo from "../../../assets/system.png";
import factureLogo from "../../../assets/facture.png";
import nothingLogo from "../../../assets/nothing.png";

const MarqueeDemo = () => {
  return (
    <>
      <h2
        data-aos="fade-up"
        className="px-[10px] text-center text-[9vw] leading-[9.5vw] md:text-[3.5vw] md:leading-[4vw] font-Montserrat font-bold pb-8 md:pb-16 md:pt-16"
      >
        Trusted by <span className="text-[#62398D]">Multiple Businesses </span>
      </h2>
      <div className="bg-white relative flex min-h-[100px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-16 pt-0 md:py-16 md:pt-0">
        <Marquee pauseOnHover className="[--duration:10s]">
          <div className="flex items-center">
            <img
              src={swissLogo}
              className="md:w-[130px] w-[80px] md:mx-[30px] mx-[15px]"
            />
            <img
              src={systemLogo}
              className="md:w-[120px] w-[70px] md:mx-[30px] mx-[15px]"
            />
            <img
              src={ovaLogo}
              className="md:w-[220px] w-[170px] md:mx-[30px] mx-[15px]"
            />
            <img
              src={socialLogo}
              className="md:w-[120px] w-[70px] md:mx-[30px] mx-[15px]"
            />
            <img
              src={goodLogo}
              className="md:w-[240px] w-[180px] md:mx-[30px] mx-[15px]"
            />

            <img
              src={nothingLogo}
              className="md:w-[80px] w-[40px] md:mx-[30px] mx-[15px]"
            />

            <img
              src={factureLogo}
              className="md:w-[110px] w-[60px] md:mx-[30px] mx-[15px]"
            />
          </div>
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </>
  );
};

export default MarqueeDemo;
