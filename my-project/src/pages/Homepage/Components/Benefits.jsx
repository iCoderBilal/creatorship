import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;

    // ScrollTrigger setup
    ScrollTrigger.create({
      trigger: heading, // The element that triggers the animation
      start: "top 80%", // Start when the top of the heading is 80% from the top of the viewport
      end: "top 20%", // End when the top is 20% from the top of the viewport
      scrub: true, // Smooth scroll-based animation
      onUpdate: (self) => {
        // Calculate the progress of scrolling
        const progress = self.progress;

        // Calculate the maximum translation based on viewport width
        const maxTranslate = window.innerWidth; // Move across the entire viewport width

        // Translate heading based on scroll progress
        const translateX = maxTranslate - progress * maxTranslate; // Move from right (100vw) to 0vw

        // Set the new x position of the heading
        gsap.set(heading, { x: translateX });
      },
    });

    // Refresh ScrollTrigger after the layout is rendered
    ScrollTrigger.refresh();
  }, []);

  return (
    <div style={{ height: "200vh", position: "relative" }}>
      {" "}
      {/* Scrollable space */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Center vertically and horizontally
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          ref={headingRef}
          style={{
            fontSize: "3rem",
            transform: "translateX(100vw)", // Start off-screen to the right
            whiteSpace: "nowrap", // Prevent wrapping
          }}
        >
          Moving Heading
        </h1>
      </div>
    </div>
  );
};

export default Benefits;
