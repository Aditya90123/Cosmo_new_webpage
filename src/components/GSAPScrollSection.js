import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./GSAPScrollSection.css";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPScrollSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const secondTextContainerRef = useRef(null);
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const thirdTextRef = useRef(null);
  const fourthTextRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const secondTextContainer = secondTextContainerRef.current;
    const firstText = firstTextRef.current;
    const secondText = secondTextRef.current;
    const thirdText = thirdTextRef.current;
    const fourthText = fourthTextRef.current;

    if (!section || !text || !secondTextContainer || !firstText || !secondText || !thirdText || !fourthText) return;

    let scrollTriggerInstance = null;
    let timelineInstance = null;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "center center",
        end: "+=650",
        scrub: 1,
        toggleActions: "play none none reverse",
        pin: true,
        pinSpacing: true,
      },
    });

    // Store references
    scrollTriggerInstance = tl.scrollTrigger;
    timelineInstance = tl;

    // First, reveal "AIR LEAK" then "TESTER"
    tl.to(secondText, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    })
    // Then fade out "AIR LEAK TESTER"
    .to([firstText, secondText], {
      opacity: 0,
      y: -30,
      scale: 0.9,
      duration: 0.8,
      ease: "power2.out"
    })
    // Then reveal "AIR FLOW" then "TESTER"
    .to(secondTextContainer, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out"
    })
    .to(thirdText, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    })
    .to(fourthText, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    })
    // Keep the final state visible
    .set([thirdText, fourthText], {
      opacity: 1
    });

    return () => {
      // Clean up properly
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
      if (timelineInstance) {
        timelineInstance.kill();
      }
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
          <h1 ref={secondTextContainerRef} className="scroll-text second-text-container">
            <span ref={thirdTextRef} className="third-text">AIR FLOW</span>
            <span ref={fourthTextRef} className="fourth-text">TESTER</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
