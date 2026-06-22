import { motion } from "framer-motion";
import "./StatsSection.css";

const stats = [
  { value: "7", label: "Global Offices" },
  { value: "7", label: "Countries" },
  { value: "5", label: "Continents" },
  { value: "15+", label: "Years" },
];

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-title">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Presence
        </motion.h2>
      </div>
      <div className="stats-grid">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="glass-stat-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <h2 className="stat-value">{s.value}</h2>
            <p className="stat-label">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
