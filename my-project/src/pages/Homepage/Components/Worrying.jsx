import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Worrying() {
  const componentRef = useRef(null);
  const pathRef1 = useRef(null);
  const pathRef2 = useRef(null);
  const pathRef4 = useRef(null);
  const headingRef1 = useRef(null);
  const headingRef2 = useRef(null);
  const headingRef3 = useRef(null);
  const headingRef4 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Line drawing animation for the path
      const path = pathRef1.current;
      const path2 = pathRef2.current;
      const path4 = pathRef4.current;

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

      // Scaling animation for the h1 element
      const h1 = headingRef1.current;
      const h2 = headingRef2.current;
      const h3 = headingRef3.current;
      const h4 = headingRef4.current;
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
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={componentRef}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 relative"
    >
      <div className="right-partners transform rotate-[-5deg] absolute top-[10%] left-[10%]">
        <h2
          ref={headingRef1}
          className="text-[40px] mb-[-200px] text-center font-Montserrat font-bold"
        >
          Partner Matching
        </h2>
        <svg
          className="w-[500px] h-[500px]"
          preserveAspectRatio="xMidYMid meet"
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

      <div className="right-partners transform rotate-[12deg] absolute top-[17%] right-[20%]">
        <h2
          ref={headingRef3}
          className="text-[40px] mb-[-270px] text-center font-Montserrat font-bold"
        >
          Handling Contracts
        </h2>
      </div>

      {/* _____________________________________________ */}
      <div className="right-partners transform rotate-[24deg] absolute top-[40%] right-[10%]">
        <h2
          ref={headingRef2}
          className="text-[40px] mb-[-270px] text-center font-Montserrat font-bold"
        >
          Creative Strategy
        </h2>

        <svg
          width="500"
          height="500"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-[10deg]"
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

      <div className="right-partners transform rotate-[-12deg] absolute top-[30%] left-[23%]">
        <h2
          ref={headingRef4}
          className="text-[40px] mb-[-270px] text-center font-Montserrat font-bold"
        >
          Content Creation
        </h2>

        <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
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
    </div>
  );
}
