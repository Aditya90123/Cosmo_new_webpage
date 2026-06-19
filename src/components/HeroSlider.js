import { motion } from "framer-motion";
import { useEffect } from "react";



export default function HeroSlider() {
  useEffect(() => {
    const t = setInterval(() => {
      // Sliding functionality if needed later
    }, 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "86vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0",
      }}
    >
      {/* ✅ BACKGROUND VIDEO (BEHIND EVERYTHING) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "blur(5px)",
          opacity: 0.30,
          zIndex: 0,                 // ✅ BEHIND
        }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* ✅ YOUR EXISTING CONTENT (ON TOP, CENTERED) */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            maxWidth: 900,
            margin: "auto",
            padding: "40px 32px 0",
            display: "grid",
            justifyItems: "center",
            textAlign: "center",
            fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"SF Pro Display\", \"Segoe UI\", sans-serif",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            style={{ width: "100%" }}
          >
            <h1
              style={{
                fontSize: 56,
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: 24,
              }}
            >
              Precision Leak Testing
              <br />
              Solutions
            </h1>

            <p
              style={{
                fontSize: 18,
                color: "#4b5563",
                maxWidth: 680,
                margin: "0 auto",
              }}
            >
              COSMO delivers high-accuracy leak testing systems for
              automotive, EV, and industrial manufacturing — engineered
              for reliability, repeatability, and productivity.
            </p>

            <div
              style={{
                marginTop: 32,
                display: "flex",
                gap: 16,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="#products"
                style={{
                  padding: "12px 22px",
                  background: "#2563eb",
                  color: "#fff",
                  borderRadius: 8,
                  fontWeight: 500,
                }}
              >
                View Products →
              </a>

              <a
                href="/contact"
                style={{
                  padding: "12px 22px",
                  border: "1px solid #d1d5db",
                  borderRadius: 8,
                  fontWeight: 500,
                }}
              >
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
