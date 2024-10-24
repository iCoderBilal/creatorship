import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import "./Benefits.css";
import cardImg from "../../../assets/creator-1.jpg";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const stickyRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const stickySection = stickyRef.current;
    const stickyHeader = headerRef.current;
    const cards = cardsRef.current;

    const stickyHeight = window.innerHeight * 2;

    const transforms = [
      [
        [10, 50, -10, 10],
        [20, -10, -45, 20],
      ],
      [
        [0, 47.5, -10, 15],
        [-25, 15, -45, 30],
      ],
      [
        [0, 52.5, -10, 5],
        [15, -5, -40, 60],
      ],
      [
        [0, 50, 30, -80],
        [20, -10, 60, 5],
      ],
      [
        [0, 55, -15, 30],
        [25, -15, 60, 95],
      ],
    ];

    // Ensure initial styles are set correctly
    gsap.set(cards, { xPercent: 0, yPercent: 0, rotation: 0, opacity: 1 });

    // Re-enable ScrollTrigger and pinning for proper layout and animation
    ScrollTrigger.create({
      trigger: stickySection,
      start: "top top",
      end: `+=${stickyHeight}px`,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const maxTranslate = stickyHeader.offsetWidth - window.innerWidth;
        const translateX = -progress * maxTranslate;
        gsap.set(stickyHeader, { x: translateX });

        cards.forEach((card, index) => {
          const delay = index * 0.1125;
          const cardProgress = Math.max(0, Math.min(progress - delay * 2, 1));

          if (cardProgress > 0) {
            const cardStartX = 25;
            const cardEndX = -650;
            const yPos = transforms[index][0];
            const rotations = transforms[index][1];

            const cardX = gsap.utils.interpolate(
              cardStartX,
              cardEndX,
              cardProgress
            );
            const yProgress = cardProgress * 3;
            const yIndex = Math.min(Math.floor(yProgress), yPos.length - 2);
            const yInterpolation = yProgress - yIndex;
            const cardY = gsap.utils.interpolate(
              yPos[yIndex],
              yPos[yIndex + 1],
              yInterpolation
            );
            const cardRotation = gsap.utils.interpolate(
              rotations[yIndex],
              rotations[yIndex + 1],
              yInterpolation
            );

            gsap.set(card, {
              xPercent: cardX,
              yPercent: cardY,
              rotation: cardRotation,
              opacity: 1,
            });
          } else {
            gsap.set(card, { opacity: 0 });
          }
        });
      },
    });

    // Force a refresh of ScrollTrigger on component mount to avoid incorrect measurements
    ScrollTrigger.refresh();
  }, []);

  return (
    <div>
      <section className="sticky" ref={stickyRef}>
        <div className="sticky-header" ref={headerRef}>
          <h1>It's Creators</h1>
        </div>
        {[1, 2, 3, 4].map((_, index) => (
          <div
            className="card"
            ref={(el) => (cardsRef.current[index] = el)}
            key={index}
          >
            <div className="card-img">
              <img src="./assets/card-img.png" alt={`Card ${index + 1}`} />
            </div>
            <div className="card-content">
              <div className="card-title">Card Title {index + 1}</div>
              <div className="card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                nihil, itaque veritatis fugit in dolorum iste saepe officiis
                sequi aut.
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Benefits;
