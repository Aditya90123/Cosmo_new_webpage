import React, { useRef, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function ScrollVideoPlayer() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Ensure the video is paused so scroll controls time
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
    }
  }, []);

  // Sync video playback to scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const video = videoRef.current;
    if (video && video.duration) {
      video.currentTime = latest * video.duration;
    }
  });

  return (
    <div
      ref={containerRef}
      className="scroll-video-container"
      style={{ position: "relative", height: "350vh", background: "#000" }}
    >
      <div
        className="scroll-video-sticky"
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <video
          ref={videoRef}
          src="/hero-bg.mp4"
          muted
          loop
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
