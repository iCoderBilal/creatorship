import React from "react";
import webLogo from "../../../assets/web-logo.png";

const Header = () => {
  return (
    <header className="cx5bd cjkjb csam5">
      <div className="cl9ye cc8xx cdcfy chlof">
        <div className="crjhh c38qt coh5t c29n1 cx10f">
          {/* Site branding */}
          <div className="ce0su cpmys">
            {/* Logo */}
            <a className="c4ozt" href="index.html" aria-label="Cruip">
              <img src={webLogo} className="web-logo" alt="Logo" />
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="c29n1 c7e8i header-nav">
            {/* Desktop sign in links */}
            <ul className="c38qt c17z2 cjsl1 c29n1 c7e8i">
              <li className="cy5mp">
                <a
                  className="cv4t9 c9gu4 c38qt cbnx3 c98p9 co504 cn4p0 ck31x font-Montserrat"
                  href="about.html"
                >
                  About Us
                </a>
              </li>
              <li className="cy5mp">
                <a
                  className="cv4t9 c9gu4 c38qt cbnx3 c98p9 co504 cn4p0 ck31x font-Montserrat"
                  href="features.html"
                >
                  Features
                </a>
              </li>
              <li className="cy5mp">
                <a
                  className="cv4t9 c9gu4 c38qt cbnx3 c98p9 co504 cn4p0 ck31x font-Montserrat"
                  href="contact.html"
                >
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