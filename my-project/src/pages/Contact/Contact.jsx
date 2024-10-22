import React from "react";
import Navbar from "../../Components/NewHeader";

import ContactForm from "../Homepage/Components/Contact";
import FooterBlock from "../Homepage/Components/Footer";
import MarqueeDemo from "../Homepage/Components/ReviewMarquee";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 md:mb-[-50px]">
        <ContactForm />
      </div>

      <MarqueeDemo />
      <FooterBlock />
    </>
  );
};

export default Contact;
