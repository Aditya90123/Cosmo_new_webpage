import { motion } from "framer-motion";

const points = [
  { text: "Japanese Engineering Precision", icon: "⚙️" },
  { text: "Repeatable & Stable Results", icon: "📊" },
  { text: "Global Support Network", icon: "🌍" },
  { text: "Industry-Proven Reliability", icon: "✅" },
];

export default function WhyCosmo() {
  return (
    <section
      style={{
        background: "#ffffff",
        color: "#000000",
        padding: "120px 32px",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "auto" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            color: "#000000",
            marginBottom: "64px",
            letterSpacing: "-0.02em",
            textAlign: "center"
          }}
        >
          Why COSMO
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 32,
          }}
        >
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{
                background: "#f5f5f7",
                padding: "48px",
                borderRadius: "18px",
                transition: "all 0.3s ease",
              }}
            >
              <div style={{
                fontSize: "2.5rem",
                marginBottom: "20px",
              }}>
                {p.icon}
              </div>
              <p style={{
                fontSize: "1.15rem",
                fontWeight: "600",
                color: "#000000",
                lineHeight: "1.5",
                letterSpacing: "-0.01em"
              }}>
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
