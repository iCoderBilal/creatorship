import { useState, useEffect } from "react";
import webLogo from "../assets/web-logo.png";
import { Link } from "react-router-dom";
import downArrow from "../assets/down-arrow.png";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const toggleNavbar = () => {
    setOpenNavbar((prev) => !prev);
  };

  const toggleSubMenu = () => {
    setOpenSubMenu((prev) => !prev);
  };

  // Check if the screen size is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Run on mount to check the initial size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 min-h-24 flex items-center bg-[#1E053D] max-w-[100vw]">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 h-full items-center">
        <nav className="flex justify-between items-center h-full">
          <div className="flex min-w-max items-center">
            <Link className="c4ozt" aria-label="Cruip" to="/">
              <img src={webLogo} className="web-logo mt-0" alt="Logo" />
            </Link>
          </div>
          <div
            className={`flex flex-col space-y-10 inset-0 fixed top-0 h-[100dvh] bg-[#1E053D] dark:bg-gray-950 lg:!bg-transparent py-20 px-5 sm:px-10 md:px-14
            transition-all ease-linear duration-300 lg:flex-row  lg:py-0 lg:px-0 lg:space-y-0 lg:gap-x-10 lg:relative lg:top-0 lg:h-full lg:items-center lg:justify-between lg:w-max
            ${
              openNavbar
                ? "visible opacity-100 translate-y-0"
                : "-translate-y-9 opacity-0 invisible lg:translate-y-0 lg:visible lg:opacity-100"
            }`}
          >
            <ul className="flex flex-col gap-y-5 text-gray-700 dark:text-gray-300 lg:items-center lg:flex-row lg:gap-x-5 lg:h-full lg:justify-center lg:flex-1">
              <li className="relative group">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={isMobile ? toggleSubMenu : undefined} // Toggle submenu on click for mobile
                >
                  <a className="pr-[5px] cv4t9 c9gu4 c38qt cbnx3 c98p9 co504 cn4p0 ck31x font-Montserrat bg-transparent cursor-pointer hover:bg-transparent">
                    Products
                  </a>
                  <img src={downArrow} className="w-[18px] h-[18px]" />
                </div>
                {/* Submenu */}
                <ul
                  className={`border-white border-[2px] absolute left-0 min-w-48 bg-[#1E053D] dark:bg-gray-800 shadow-lg rounded-md transition-opacity duration-300
                  ${
                    isMobile
                      ? openSubMenu
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                      : "opacity-0 group-hover:opacity-100 group-hover:visible"
                  }`}
                >
                  <Link to="/creator">
                    <li className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-200 hover:text-black duration-300 ease-in-out">
                      <a
                        href="#"
                        className="text-[14px]  font-semibold font-Montserrat bg-transparent"
                      >
                        Creators
                      </a>
                    </li>
                  </Link>

                  <Link to="/business">
                    <li className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-200 hover:text-black duration-300 ease-in-out">
                      <a
                        href="#"
                        className="text-[14px]  font-semibold font-Montserrat bg-transparent"
                      >
                        Businesses
                      </a>
                    </li>
                  </Link>
                </ul>
              </li>

              <li>
                <a
                  href="#aboutsection"
                  className="cv4t9 c9gu4 c38qt cbnx3 c98p9 co504 cn4p0 ck31x font-Montserrat bg-transparent"
                >
                  About Us
                </a>
              </li>

              <li className="relative group">
                <div className="flex items-center cursor-pointer">
                  <a className="pr-[5px] cv4t9 c9gu4 c38qt cbnx3 c98p9 co504 cn4p0 ck31x font-Montserrat bg-transparent cursor-pointer hover:bg-transparent">
                    Resources
                  </a>
                  <img src={downArrow} className="w-[18px] h-[18px]" />
                </div>
                {/* Submenu */}
                <ul className="border-white border-[2px] absolute left-0 min-w-48 bg-[#1E053D] dark:bg-gray-800 shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 invisible">
                  <Link to="/">
                    <li className="py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-200 hover:text-black duration-300 ease-in-out">
                      <a
                        href="#"
                        className="text-[14px]  font-semibold font-Montserrat bg-transparent"
                      >
                        Blogs
                      </a>
                    </li>
                  </Link>
                </ul>
              </li>
              <li>
                <a
                  href="#aboutsection"
                  className="cv4t9 c9gu4 c38qt cbnx3 c98p9 co504 cn4p0 ck31x font-Montserrat bg-transparent"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="w-full flex sm:w-max lg:min-w-max lg:items-center">
              <button className="  font-Montserrat font-semibold relative inline-flex h-10 w-full items-center justify-center rounded-md bg-white px-6 text-gray-950 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
                <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
                Book a Meeting
              </button>
            </div>
          </div>
          <div className="flex items-center justify-end relative z-60 lg:hidden">
            <button
              onClick={() => {
                toggleNavbar();
              }}
              className="p-3 rounded-full bg-[#8649D0] outline-none w-12 aspect-square flex flex-col relative justify-center items-center"
            >
              <span className="sr-only">toggle navbar</span>
              <span
                className={`w-6 h-0.5 rounded-full bg-gray-300 transition-transform duration-300 ease-linear ${
                  openNavbar ? "translate-y-1.5 rotate-[40deg]" : ""
                }`}
              />
              <span
                className={`w-6 origin-center mt-1 h-0.5 rounded-full bg-gray-300 transition-all duration-300 ease-linear ${
                  openNavbar ? "scale-x-0 opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 mt-1 h-0.5 rounded-full bg-gray-300 transition-all duration-300 ease-linear ${
                  openNavbar ? "-translate-y-1.5 -rotate-[40deg]" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
