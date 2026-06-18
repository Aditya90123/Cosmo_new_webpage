import { motion } from "framer-motion";

const projects = [
  {
    title: "OCR / OCV Inspection",
    image: "/vision/ocr.jpg",
    video: "/vision/ocr.mp4",
    caption: "Batch code and character verification on production line",
    description:
      "Automatic reading and verification of printed text such as batch codes, dates, serial numbers, and logos to ensure correctness and traceability.",
  },
  {
    title: "Assembly Verification",
    image: "/vision/assembly.jpg",
    video: "/vision/assembly.mp4",
    caption: "Assembly sequence and orientation check",
    description:
      "Vision system confirms correct assembly sequence, part orientation, and component presence before allowing next process step.",
  },
  {
    title: "Presence / Absence Detection",
    image: "/vision/presence.jpg",
    video: "/vision/presence.mp4",
    caption: "Missing component detection using vision",
    description:
      "Detects missing, extra, or misplaced components using rule-based and AI-based vision algorithms.",
  },
  {
    title: "Dimensional Measurement",
    image: "/vision/measurement.jpg",
    video: "/vision/measurement.mp4",
    caption: "Non-contact measurement using calibrated vision",
    description:
      "Performs high-accuracy dimensional measurement and gauging without physical contact using calibrated vision systems.",
  },
  {
    title: "Barcode & QR Code Reading",
    image: "/vision/barcode.jpg",
    video: "/vision/barcode.mp4",
    caption: "High-speed barcode and QR code decoding",
    description:
      "Fast and reliable decoding of 1D and 2D codes for traceability, process validation, and data logging.",
  },
];

export default function VisionApplications() {
  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "80px auto",
        padding: "0 60px",
      }}
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={{ fontSize: 44, marginBottom: 20 }}>
          Vision Inspection Applications
        </h1>

        <p style={{ fontSize: 18, color: "#4b5563", maxWidth: 900 }}>
          Real-world vision inspection projects implemented using industrial
          cameras, lighting, and AI-based vision software for automated quality
          control.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div style={{ marginTop: 80 }}>
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
              alignItems: "center",
              marginBottom: 100,
            }}
          >
            {/* IMAGE + CAPTION */}
            <div>
              <img
                src={p.image}
                alt={p.title}
                style={{
                  width: "100%",
                  borderRadius: 16,
                  boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                }}
              />
              <p
                style={{
                  marginTop: 10,
                  fontSize: 14,
                  color: "#6b7280",
                  textAlign: "center",
                }}
              >
                {p.caption}
              </p>
            </div>

            {/* TEXT + VIDEO */}
            <div>
              <h2 style={{ fontSize: 28, marginBottom: 12 }}>
                {p.title}
              </h2>

              <p
                style={{
                  fontSize: 16,
                  color: "#374151",
                  lineHeight: 1.7,
                  marginBottom: 16,
                }}
              >
                {p.description}
              </p>

              {/* VIDEO DEMO */}
              {p.video && (
                <video
                  src={p.video}
                  controls
                  muted
                  style={{
                    width: "100%",
                    borderRadius: 14,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  }}
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
