"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollScaleComponent() {
  const componentRef = useRef(null);
  const pathRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const path = pathRef.current;
      if (!path) return;

      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 1,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 10,
        ease: "power1",
        scrollTrigger: {
          trigger: componentRef.current,
          start: "center center",
          end: "bottom center",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(path, {
              strokeDashoffset: length - length * progress,
            });
          },
        },
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={componentRef}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8"
    >
      <h1 className="text-3xl font-bold mb-8 text-center">
        SVG Line Drawing Animation on Scroll
      </h1>
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <svg
          className="w-full h-auto"
          viewBox="0 0 500 300"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            ref={pathRef}
            d="M50,250 Q125,100 250,250 T450,250"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
        <p className="mt-8 text-lg text-gray-700">
          Scroll down to see the line being drawn. This animation uses GSAP and
          ScrollTrigger to create a smooth drawing effect as you scroll through
          the page.
        </p>
      </div>
    </div>
  );
}
