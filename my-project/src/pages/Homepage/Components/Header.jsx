import React from "react";
import webLogo from "../../../assets/web-logo.png";
import { Link } from "react-router-dom";

const Header = ({ aboutlink, featureLink, contactLink }) => {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behaviour: "smooth", block: "start" });
  };
  return (
    <header className="cx5bd cjkjb csam5">
      <div className="cl9ye cc8xx cdcfy chlof">
        <div className="crjhh c38qt coh5t c29n1 cx10f">
          {/* Site branding */}
          <div className="ce0su cpmys">
            {/* Logo */}
            <Link className="c4ozt" aria-label="Cruip" to="/">
              <img src={webLogo} className="web-logo" alt="Logo" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="c29n1 c7e8i header-nav">
            {/* Desktop sign in links */}
            <ul className="c38qt c17z2 cjsl1 c29n1 c7e8i">
              <li
                className="cy5mp cursor-pointer"
                // onClick={() => scrollToSection(aboutlink)}
              >
                <a
                  href="#aboutsection"
                  className="cv4t9 c9gu4 c38qt cbnx3 c98p9 co504 cn4p0 ck31x font-Montserrat"
                >
                  About Us
                </a>
              </li>
              <li
                className="cy5mp cursor-pointer"
                onClick={() => scrollToSection(featureLink)}
              >
                <a className="cv4t9 c9gu4 c38qt cbnx3 c98p9 co504 cn4p0 ck31x font-Montserrat">
                  Features
                </a>
              </li>
              <li
                className="cy5mp cursor-pointer"
                onClick={() => scrollToSection(contactLink)}
              >
                <a className="cv4t9 c9gu4 c38qt cbnx3 c98p9 co504 cn4p0 ck31x font-Montserrat">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
