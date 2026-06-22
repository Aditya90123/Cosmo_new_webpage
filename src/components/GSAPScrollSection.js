import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./GSAPScrollSection.css";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPScrollSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const imageRef = useRef(null);

  // Image list for hover animation – adjust filenames as needed
  const images = [
    "/images/air leak testers/AF-R221.png",
    "/images/air leak testers/LS-1866.png",
    "/images/air leak testers/LS-R700.png",
    "/images/air leak testers/LS-R902.png",
  ];
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const hoverIntervalRef = useRef(null);

  const handleMouseEnter = () => {
    // Start cycling through images every 400ms
    hoverIntervalRef.current = setInterval(() => {
      setCurrentImgIdx((prev) => (prev + 1) % images.length);
    }, 400);
  };

  const handleMouseLeave = () => {
    // Stop cycling and reset to first image
    clearInterval(hoverIntervalRef.current);
    hoverIntervalRef.current = null;
    setCurrentImgIdx(0);
  };

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const firstText = firstTextRef.current;
    const secondText = secondTextRef.current;
    const image = imageRef.current;

    if (!section || !text || !firstText || !secondText || !image) return;

    // Clean up any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });

    // First, reveal "AIR LEAK" then "TESTER"
    tl.to(secondText, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    })
    // Then fade out both text parts
    .to([firstText, secondText], {
      opacity: 0,
      y: -30,
      scale: 0.9,
      duration: 1,
      ease: "power2.out"
    })
    // Then reveal image
    .to(image, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out"
    }, "<0.3");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      clearInterval(hoverIntervalRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="scroll-section">
      <div className="content-wrapper">
        <div className="text-container">
          <h1 ref={textRef} className="scroll-text">
            <span ref={firstTextRef} className="first-text">AIR LEAK</span>
            <span ref={secondTextRef} className="second-text">TESTER</span>
          </h1>
        </div>
        <div
          ref={imageRef}
          className="image-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={images[currentImgIdx]} alt="Air Leak Tester" />
        </div>
      </div>
    </section>
  );
}
