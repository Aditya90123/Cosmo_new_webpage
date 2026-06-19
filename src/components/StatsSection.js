import { motion } from "framer-motion";

const stats = [
  { value: "7", label: "Global Offices" },
  { value: "7", label: "Countries" },
  { value: "5", label: "Continents" },
  { value: "15+", label: "Years" },
];

export default function StatsSection() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "100px 32px",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "auto", textAlign: "center", marginBottom: "60px" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            color: "#000000",
            letterSpacing: "-0.02em",
          }}
        >
          Our Presence
        </motion.h2>
      </div>
      <div
        style={{
          maxWidth: 1400,
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: 40,
          textAlign: "center",
        }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            style={{
              padding: "40px 24px",
              background: "#f5f5f7",
              borderRadius: "18px",
            }}
          >
            <h2 style={{
              fontSize: "3.5rem",
              fontWeight: "600",
              color: "#000000",
              marginBottom: "8px",
              letterSpacing: "-0.03em",
            }}>
              {s.value}
            </h2>
            <p style={{
              color: "#000000",
              fontSize: "1rem",
              fontWeight: "500",
              letterSpacing: "-0.01em",
            }}>
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
