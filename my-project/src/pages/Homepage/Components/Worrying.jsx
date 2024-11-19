import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Worrying() {
  const componentRef = useRef(null);
  const pathRef1 = useRef(null);
  const pathRef1Mobile = useRef(null);
  const pathRef2 = useRef(null);
  const pathRef2Mobile = useRef(null);
  const pathRef4 = useRef(null);
  const pathRef4Mobile = useRef(null);
  const pathRef5 = useRef(null);
  const pathRef5Mobile = useRef(null);
  const headingRef1 = useRef(null);
  const headingRef2 = useRef(null);
  const headingRef3 = useRef(null);
  const headingRef4 = useRef(null);
  const headingRef5 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Line drawing animation for the path
      const path = pathRef1.current;
      const pathMobile = pathRef1Mobile.current;
      const path2 = pathRef2.current;
      const path2Mobile = pathRef2Mobile.current;
      const path4 = pathRef4.current;
      const path4Mobile = pathRef4Mobile.current;
      const path5 = pathRef5.current;
      const path5Mobile = pathRef5Mobile.current;

      // ___________________________________Path-1_______________________________
      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        visibility: "hidden", // Initially hide the element
        display: "block",
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        visibility: "visible",
        ease: "power1",
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top 30%",
          end: "bottom 110%",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(path, {
              strokeDashoffset: length - length * progress,
            });
          },
        },
      });

      // ___________________________________Path-1 Mobile_______________________________
      const lengthMobile = pathMobile.getTotalLength();

      gsap.set(path, {
        strokeDasharray: lengthMobile,
        strokeDashoffset: lengthMobile,
        visibility: "hidden", // Initially hide the element
        display: "block",
      });

      gsap.to(pathMobile, {
        strokeDashoffset: 0,
        visibility: "visible",
        ease: "power1",
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top 30%",
          end: "bottom 110%",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(path, {
              strokeDashoffset: length - length * progress,
            });
          },
        },
      });

      // _____________________________________Path - 2 _____________________________

      const length2 = path2.getTotalLength();

      gsap.set(path2, {
        strokeDasharray: length2,
        strokeDashoffset: length2,
        visibility: "hidden", // Initially hide the element
        display: "block",
      });

      gsap.to(path2, {
        strokeDashoffset: 0,
        visibility: "visible",
        ease: "power1",

        scrollTrigger: {
          trigger: componentRef.current,
          start: "top 20%",
          end: "bottom 110%",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(path, {
              strokeDashoffset: length - length * progress,
            });
          },
        },
      });

      // _____________________________________Path - 2 Mobile _____________________________

      const length2Mobile = path2Mobile.getTotalLength();

      gsap.set(path2Mobile, {
        strokeDasharray: length2Mobile,
        strokeDashoffset: length2Mobile,
        visibility: "hidden", // Initially hide the element
        display: "block",
      });

      gsap.to(path2Mobile, {
        strokeDashoffset: 0,
        visibility: "visible",
        ease: "power1",

        scrollTrigger: {
          trigger: componentRef.current,
          start: "top 20%",
          end: "bottom 110%",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(path, {
              strokeDashoffset: length - length * progress,
            });
          },
        },
      });

      // _____________________________________Path - 4 _____________________________

      const length4 = path4.getTotalLength();

      gsap.set(path4, {
        strokeDasharray: length4,
        strokeDashoffset: length4,
        visibility: "hidden", // Initially hide the element
        display: "block",
      });

      gsap.to(path4, {
        strokeDashoffset: 0,
        visibility: "visible",
        ease: "power1",

        scrollTrigger: {
          trigger: componentRef.current,
          start: "top 23%",
          end: "bottom 110%",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(path, {
              strokeDashoffset: length - length * progress,
            });
          },
        },
      });

      // _____________________________________Path - 4 Mobile_____________________________

      const length4Mobile = path4Mobile.getTotalLength();

      gsap.set(path4Mobile, {
        strokeDasharray: length4Mobile,
        strokeDashoffset: length4Mobile,
        visibility: "hidden", // Initially hide the element
        display: "block",
      });

      gsap.to(path4Mobile, {
        strokeDashoffset: 0,
        visibility: "visible",
        ease: "power1",

        scrollTrigger: {
          trigger: componentRef.current,
          start: "top 23%",
          end: "bottom 110%",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(path, {
              strokeDashoffset: length - length * progress,
            });
          },
        },
      });

      // _____________________________________Path - 5 _____________________________

      const length5 = path5.getTotalLength();

      gsap.set(path5, {
        strokeDasharray: length5,
        strokeDashoffset: length5,
        visibility: "hidden", // Initially hide the element
        display: "block",
      });

      gsap.to(path5, {
        strokeDashoffset: 0,
        visibility: "visible",
        ease: "power1",

        scrollTrigger: {
          trigger: componentRef.current,
          start: "top 10%",
          end: "bottom 110%",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(path, {
              strokeDashoffset: length - length * progress,
            });
          },
        },
      });

      // _____________________________________Path - 5 Mobile _____________________________

      const length5Mobile = path5Mobile.getTotalLength();

      gsap.set(path5Mobile, {
        strokeDasharray: length5Mobile,
        strokeDashoffset: length5Mobile,
        visibility: "hidden", // Initially hide the element
        display: "block",
      });

      gsap.to(path5Mobile, {
        strokeDashoffset: 0,
        visibility: "visible",
        ease: "power1",

        scrollTrigger: {
          trigger: componentRef.current,
          start: "top 10%",
          end: "bottom 110%",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(path, {
              strokeDashoffset: length - length * progress,
            });
          },
        },
      });

      // Scaling animation for the h1 element
      const h1 = headingRef1.current;
      const h2 = headingRef2.current;
      const h3 = headingRef3.current;
      const h4 = headingRef4.current;
      const h5 = headingRef5.current;
      gsap.fromTo(
        h1,
        { scale: 0 }, // Start at original scale
        {
          scale: 1, // Scale up to 1.5x
          duration: 1, // Make the animation quicker by setting a small duration
          scrollTrigger: {
            trigger: componentRef.current,
            start: "top 50%", // Start scaling as the component enters the viewport
            end: "bottom 120%", // End scaling as the component leaves the viewport
            scrub: 1, // Smooth scrolling
          },
        }
      );

      gsap.fromTo(
        h2,
        { scale: 0 }, // Start at original scale
        {
          scale: 1, // Scale up to 1.5x
          duration: 1, // Make the animation quicker by setting a small duration
          scrollTrigger: {
            trigger: componentRef.current,
            start: "top 28%", // Start scaling as the component enters the viewport
            end: "bottom 120%", // End scaling as the component leaves the viewport
            scrub: 1, // Smooth scrolling
          },
        }
      );

      gsap.fromTo(
        h3,
        { scale: 0 }, // Start at original scale
        {
          scale: 1, // Scale up to 1.5x
          duration: 1, // Make the animation quicker by setting a small duration
          scrollTrigger: {
            trigger: componentRef.current,
            start: "top 35%", // Start scaling as the component enters the viewport
            end: "bottom 120%", // End scaling as the component leaves the viewport
            scrub: 1, // Smooth scrolling
          },
        }
      );

      gsap.fromTo(
        h4,
        { scale: 0 }, // Start at original scale
        {
          scale: 1, // Scale up to 1.5x
          duration: 1, // Make the animation quicker by setting a small duration
          scrollTrigger: {
            trigger: componentRef.current,
            start: "top 30%", // Start scaling as the component enters the viewport
            end: "bottom 120%", // End scaling as the component leaves the viewport
            scrub: 1, // Smooth scrolling
          },
        }
      );

      gsap.fromTo(
        h5,
        { scale: 0 }, // Start at original scale
        {
          scale: 1, // Scale up to 1.5x
          duration: 1, // Make the animation quicker by setting a small duration
          scrollTrigger: {
            trigger: componentRef.current,
            start: "top 14%", // Start scaling as the component enters the viewport
            end: "bottom 120%", // End scaling as the component leaves the viewport
            scrub: 1, // Smooth scrolling
          },
        }
      );
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={componentRef}
      className="h-[650px] md:h-[500px] lg:h-[700px] bg-white p-8 relative overflow-hidden"
    >
      <h2 className="px-[10px] text-center text-[9vw] leading-[9.5vw] md:text-[3.5vw] md:leading-[4vw] font-Montserrat font-bold pb-8 md:pb-16 md:pt-0">
        <span className="text-[#62398D]">No More</span> Worrying About
      </h2>
      <div className="right-partner-1 transform rotate-[-5deg] absolute">
        <h2
          ref={headingRef1}
          className="text-[22px] md:text-[20px] lg:text-[40px] lg:mb-[-200px] mb-[-120px] text-center font-Montserrat font-bold"
        >
          Partner Matching
        </h2>
        <svg
          className="md:w-[32vw] md:h-[32vw] hidden lg:block"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            ref={pathRef1Mobile}
            d="M50,200 Q250,250 450,200"
            fill="none"
            stroke="#000"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 300"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto lg:hidden"
        >
          <path
            ref={pathRef1}
            d="M50,200 Q250,250 450,200"
            fill="none"
            stroke="#000"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* ___________________________________________________ */}

      <div className="right-partner-2 transform md:rotate-[12deg] rotate-[6deg] absolute ">
        <h2
          ref={headingRef3}
          className="text-[22px] md:text-[20px] lg:text-[40px] mb-[-270px] text-center font-Montserrat font-bold"
        >
          Handling Contracts
        </h2>
      </div>

      {/* _____________________________________________ */}
      <div className="right-partner-3 transform md:rotate-[24deg] rotate-[6deg] absolute">
        <h2
          ref={headingRef2}
          className="text-[22px] md:text-[20px] lg:text-[40px] mb-[-70px] lg:mb-[-270px] text-center font-Montserrat font-bold"
        >
          Creative Strategy
        </h2>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 600"
          preserveAspectRatio="xMidYMid meet"
          className="rotate-[10deg] w-full h-auto md:w-[32vw] md:h-[32vw] lg:hidden"
        >
          <g transform="matrix(1,0,0,1,440,210)" opacity="1">
            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
              <path
                ref={pathRef2Mobile}
                strokeLinecap="butt"
                strokeLinejoin="miter"
                fillOpacity="0"
                strokeMiterlimit="4"
                stroke="#000"
                strokeOpacity="1"
                strokeWidth="6"
                d="M-85.5,-189 C87.5,-205.5 150.5,-82 -160.5,-30 C-467.0119934082031,21.25 -457.3949890136719,-99.53600311279297 -252,-146.5 C-70.5,-188 2.5,-163 2.5,-163"
              />
            </g>
          </g>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-[10deg] md:w-[32vw] md:h-[32vw] hidden lg:block"
        >
          <g transform="matrix(1,0,0,1,420,340)" opacity="1">
            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
              <path
                ref={pathRef2}
                strokeLinecap="butt"
                strokeLinejoin="miter"
                fillOpacity="0"
                strokeMiterlimit="4"
                stroke="#000"
                strokeOpacity="1"
                strokeWidth="6"
                d="M-85.5,-189 C87.5,-205.5 150.5,-82 -160.5,-30 C-467.0119934082031,21.25 -457.3949890136719,-99.53600311279297 -252,-146.5 C-70.5,-188 2.5,-163 2.5,-163"
              />
            </g>
          </g>
        </svg>
      </div>

      {/* _________________________________________________ */}

      <div className="right-partner-4 transform rotate-[-3deg] md:rotate-[-12deg] absolute">
        <h2
          ref={headingRef4}
          className="text-[22px] lg:text-[40px] mb-[-170px] lg:mb-[-270px] text-center font-Montserrat font-bold"
        >
          Content Creation
        </h2>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto lg:hidden"
        >
          <g transform="matrix(1,0,0,1,80,470)" opacity="1">
            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
              <path
                ref={pathRef4Mobile}
                strokeLinecap="butt"
                strokeLinejoin="miter"
                fillOpacity="0"
                strokeMiterlimit="4"
                stroke="#000"
                strokeOpacity="1"
                strokeWidth="6"
                d="M158.25,-323 C225.5,-303.25 202.5,-275 251.5,-259 C289.32000732421875,-246.6510009765625 343.5,-295.5 372.75,-252.75 C407.0530090332031,-202.61500549316406 345,-174 345,-174"
              />
            </g>
          </g>
        </svg>

        <svg
          width="500"
          height="500"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden lg:block"
        >
          <g transform="matrix(1,0,0,1,80,470)" opacity="1">
            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
              <path
                ref={pathRef4}
                strokeLinecap="butt"
                strokeLinejoin="miter"
                fillOpacity="0"
                strokeMiterlimit="4"
                stroke="#000"
                strokeOpacity="1"
                strokeWidth="6"
                d=" M158.25,-323 C225.5,-303.25 202.5,-275 251.5,-259 C289.32000732421875,-246.6510009765625 343.5,-295.5 372.75,-252.75 C407.0530090332031,-202.61500549316406 345,-174 345,-174"
              />
            </g>
          </g>
        </svg>
      </div>
      {/* _________________________________________________________ */}

      <div className="right-partners-5 transform rotate-[10deg] absolute top-[68%] md:top-[69%] left-[8%]">
        <h2
          ref={headingRef5}
          className="text-[22px] lg:text-[40px] mb-[-270px] text-center font-Montserrat font-bold"
        >
          Missed Opportunities
        </h2>
      </div>

      {/* _________________________________________________________ */}

      <div className="right-partner-6 transform rotate-[14deg] absolute ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-350 0 500 500"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto lg:hidden"
        >
          <g transform="matrix(1,0,0,1,200,70)" opacity="1">
            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
              <path
                ref={pathRef5Mobile}
                strokeLinecap="butt"
                strokeLinejoin="miter"
                fillOpacity="0"
                strokeMiterlimit="4"
                stroke="#000"
                strokeOpacity="1"
                strokeWidth="6"
                d="M-334.5,162.5 C-141.5,177.5 -159,13 -213.5,33.5 C-268,54 -167,155 -117.5,68"
              />
            </g>
          </g>
        </svg>

        <svg
          width="500"
          height="500"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden lg:block"
        >
          <g transform="matrix(1,0,0,1,500,100)" opacity="1">
            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
              <path
                ref={pathRef5}
                strokeLinecap="butt"
                strokeLinejoin="miter"
                fillOpacity="0"
                strokeMiterlimit="4"
                stroke="#000"
                strokeOpacity="1"
                strokeWidth="6"
                d="M-334.5,162.5 C-141.5,177.5 -159,13 -213.5,33.5 C-268,54 -167,155 -117.5,68"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
