"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollScaleComponent() {
  const orangeWrapperRef = useRef(null);
  const orangeRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".orangeWrapper",
        scrub: true,
        pin: true,
        start: "50% 50%",
        end: "+=200%",
      },
    });

    tl.from(".orange", {
      scale: 0.5,
      ease: "none",
    });

    tl.from(
      lineRef.current,
      {
        scaleX: 0,
        ease: "none",
        transformOrigin: "left top",
      },
      0
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="scroll-container">
      <style jsx>{`
        .scroll-container {
          min-height: 100vh;
          overflow-y: auto;
          overflow-x: hidden;
        }
        .panel {
          height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5em;
          font-weight: 600;
          color: white;
        }
        .blue {
          background-color: #3883f7;
        }
        .red {
          background-color: #f73838;
        }
        .orange {
          background-color: #f7a338;
        }
        .purple {
          background-color: #8f38f7;
        }
        .gray {
          background-color: #383838;
        }
        .line {
          width: 100%;
          height: 2px;
          background-color: white;
          display: block;
          margin-bottom: 10px;
        }
        header {
          position: fixed;
          top: 0;
          left: 0;
          padding: 10px;
        }
      `}</style>
      <div className="description panel blue">
        <h2>scroll down</h2>
      </div>

      <section className="panel red">
        <h2>more</h2>
      </section>

      <div className="panel orangeWrapper" ref={orangeWrapperRef}>
        <section className="panel orange" ref={orangeRef}>
          <h2>
            <span className="line line-2" ref={lineRef}></span>
            This panel grows in size
          </h2>
        </section>
      </div>

      <section className="panel purple"></section>

      <section className="panel gray">DONE!</section>

      <header>
        <a href="https://greensock.com/scrolltrigger">
          <img
            className="greensock-icon"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg"
            width="200"
            height="64"
            alt="GreenSock ScrollTrigger Logo"
          />
        </a>
      </header>
    </div>
  );
}
