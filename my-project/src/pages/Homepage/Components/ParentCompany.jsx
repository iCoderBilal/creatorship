import React from "react";
import AnimatedBeamDemo from "./AnimatedBeamDemo";
import { useEffect, useState, useRef } from "react"; // Import React hooks and useRef
import { useInView } from "react-intersection-observer"; // Import useInView from react-intersection-observer to detect when the component is in the viewport

export default function ParentCompany() {
  // Create state variables for each number that will animate
  const [partnerships, setPartnerships] = useState(0); // Initial value for "Partnerships Made"
  const [creators, setCreators] = useState(0); // Initial value for "Creators & Businesses"
  const [professionals, setProfessionals] = useState(0); // Initial value for "Professionals"

  // Setup intersection observer to trigger animation when the component is in view
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger animation when 50% of the element is visible in the viewport
    triggerOnce: true, // Only trigger animation once when the component enters the viewport
  });

  // Animation function that smoothly increases the number over time
  const animateValue = (start, end, duration, setValue) => {
    const range = end - start; // Calculate the difference between the start and end value
    const increment = range / (duration / 16); // Calculate how much to increase the value each frame (16ms is roughly 60fps)

    let current = start; // Start from the initial value

    // Create a timer that runs every 16ms (for smooth animation)
    const timer = setInterval(() => {
      current += increment; // Increase the current value by the increment

      if (current >= end) {
        // If the current value reaches or exceeds the end value
        setValue(end); // Set the final value (avoid overshooting)
        clearInterval(timer); // Stop the animation (clear the interval)
      } else {
        setValue(Math.floor(current)); // Update the state with the current value (rounded to nearest integer)
      }
    }, 16); // Update every 16ms for smooth animation
  };

  // Use useEffect hook to trigger the animation when the component comes into the viewport
  useEffect(() => {
    if (inView) {
      // If the component is in view (visible in the viewport)
      animateValue(0, 12, 1000, setPartnerships); // Animate "Partnerships Made" from 0 to 12 over 1000ms (1 second)
      animateValue(0, 30, 1500, setCreators); // Animate "Creators & Businesses" from 0 to 30 over 1500ms (1.5 seconds)
      animateValue(0, 500, 2000, setProfessionals); // Animate "Professionals" from 0 to 500 over 2000ms (2 seconds)
    }
  }, [inView]); // The effect will run when `inView` changes (component enters the viewport)

  return (
    <div>
      <div className="parent-company-container max-w-7xl mx-auto px-4 pt-16 pb-12">
        {/* The main container that holds the content */}
        <AnimatedBeamDemo />

        <div className="parent-card w-full bg-[#f8f8f8] rounded-lg mx-auto md:px-12 md:py-12 p-2 py-8">
          {/* The card that holds the text and stats */}

          <h3 className="md:text-[3vw] md:leading-[3.5vw] lg:text-[2vw] font-Montserrat lg:leading-[2.2vw] font-semibold text-center text-white text-[5vw] leading-[6vw]">
            Persist Ventures, the parent company of Creatorship, has built a
            remarkable track record of success by partnering with businesses to
            help them scale and thrive.
          </h3>

          <div
            ref={ref} // Attach the intersection observer to this div, so the animation is triggered when this element is in view
            className="parent-facts flex justify-center md:gap-16 mt-10 flex-wrap gap-4"
          >
            {/* The container for the statistics cards */}

            <div className="card text-center lg:w-[250px]">
              <h2 className="md:text-[50px] text-[36px] font-bold font-Montserrat text-[#b46eff]">
                {partnerships}+{" "}
                {/* Display the dynamically updated value of "partnerships" */}
              </h2>
              <p className="font-Montserrat font-medium text-white m-0">
                Partnerships Made
              </p>
            </div>

            <div className="card text-center lg:w-[250px]">
              <h2 className="md:text-[50px] text-[36px] font-bold font-Montserrat text-[#b46eff]">
                {creators}+{" "}
                {/* Display the dynamically updated value of "creators" */}
              </h2>
              <p className="font-Montserrat font-medium text-white m-0">
                Creators & Businesses
              </p>
            </div>

            <div className="card text-center lg:w-[250px]">
              <h2 className="md:text-[50px] text-[36px] font-bold font-Montserrat text-[#b46eff]">
                {professionals}+{" "}
                {/* Display the dynamically updated value of "professionals" */}
              </h2>
              <p className="font-Montserrat font-medium text-white m-0">
                Professionals
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
