import React from "react";
import { motion } from "framer-motion";

// Announcement text – replace with actual message as needed
const announcementText = "⚡ EV Summit | 22 Aug 2025 | New Delhi – Driving the future of electric mobility!";

export default function AnnounceScroll() {
  return (
    <section
      style={{
        overflow: "hidden",
        backgroundColor: "#e0f7ff", // baby blue background
        color: "#111111",
        textAlign: "center",
        margin: 0,
        padding: "15px 0",
        transform: "translateY(0)",
      }}
    >
      <motion.div
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          fontSize: "20px",
          fontWeight: "bold",
        }}
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {announcementText} &nbsp;&nbsp; {announcementText}
      </motion.div>
    </section>
  );
}
