"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

export default function Benefits() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = gsap.utils.toArray(".card");

    const cardWidth = 300; // Width of each card
    const cardGap = 50; // Gap between cards
    const totalWidth = (cards.length - 1) * (cardWidth + cardGap);
    const startPosition = window.innerWidth * 0.3; // 30% of the screen width
    const endPosition = window.innerWidth * 0.7; // 70% of the screen width

    gsap.set(cards, {
      x: (i) => i * (cardWidth + cardGap),
      y: (i) => {
        const index = i % transforms.length;
        return gsap.utils.random(
          transforms[index][0][0],
          transforms[index][0][3]
        );
      },
      rotation: (i) => {
        const index = i % transforms.length;
        return gsap.utils.random(
          transforms[index][1][0],
          transforms[index][1][3]
        );
      },
    });

    const pin = gsap.fromTo(
      section,
      {
        translateX: startPosition,
      },
      {
        translateX: `-${totalWidth - endPosition + startPosition}px`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${totalWidth + endPosition - startPosition}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      }
    );

    // Dynamic card transformations
    cards.forEach((card, i) => {
      const index = i % transforms.length;
      const yPos = transforms[index][0];
      const rotations = transforms[index][1];

      gsap.to(card, {
        y: (progress) => {
          const p = (progress * 3) % 1; // Cycle through the 4 y positions
          return gsap.utils.interpolate(yPos, p);
        },
        rotation: (progress) => {
          const p = (progress * 3) % 1; // Cycle through the 4 rotation values
          return gsap.utils.interpolate(rotations, p);
        },
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${totalWidth + endPosition - startPosition}`,
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      pin.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="overflow-hidden bg-white">
      <div ref={triggerRef} className="h-screen">
        <div
          ref={sectionRef}
          className="flex items-center gap-12 px-8 absolute top-1/2 -translate-y-1/2"
        >
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="card bg-[#1E053D] text-white w-[300px] h-96 flex-shrink-0 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Card {num}</h2>
                  <p className="text-gray-300 mb-4">
                    This card scrolls smoothly with dynamic transformations,
                    creating an engaging parallax effect.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/10 text-white px-2 py-1 rounded-full text-sm">
                    Parallax
                  </span>
                  <span className="bg-white/10 text-white px-2 py-1 rounded-full text-sm">
                    ScrollTrigger
                  </span>
                  <span className="bg-white/10 text-white px-2 py-1 rounded-full text-sm">
                    GSAP
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
