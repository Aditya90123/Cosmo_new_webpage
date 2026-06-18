import { motion } from "framer-motion";

const stats = [
  { value: "15+ Years", label: "Industry Experience" },
  { value: "10,000+", label: "Systems Installed" },
  { value: "30+", label: "Countries Served" },
  { value: "99.9%", label: "Test Accuracy" },
];

export default function StatsSection() {
  return (
    <section
      style={{
        background: "#f8fafc",
        padding: "80px 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 32,
          textAlign: "center",
        }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <h2 style={{ fontSize: 36, fontWeight: 800, color: "#2563eb" }}>
              {s.value}
            </h2>
            <p style={{ color: "#374151" }}>{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
