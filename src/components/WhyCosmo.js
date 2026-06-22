import { motion } from "framer-motion";
import "./WhyCosmo.css";

const points = [
  { text: "Japanese Engineering Precision", icon: "⚙️" },
  { text: "Repeatable & Stable Results", icon: "📊" },
  { text: "Global Support Network", icon: "🌍" },
  { text: "Industry-Proven Reliability", icon: "✅" },
];

export default function WhyCosmo() {
  return (
    <section className="why-cosmo-section">
      <div className="why-cosmo-container">
        <motion.h2
          className="why-cosmo-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why COSMO
        </motion.h2>

        <div className="why-cosmo-grid">
          {points.map((p, i) => (
            <motion.div
              key={i}
              className="glass-feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="feature-icon">{p.icon}</div>
              <p className="feature-text">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
