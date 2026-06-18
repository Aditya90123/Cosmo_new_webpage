import { FaCar, FaBatteryFull, FaIndustry, FaWater, FaCamera } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const apps = [
  { icon: <FaCar />, title: "Automotive Components" },
  { icon: <FaBatteryFull />, title: "EV Battery Packs" },
  { icon: <FaIndustry />, title: "Valves & Regulators" },
  { icon: <FaWater />, title: "Pumps & Compressors" },

  // ✅ NEW APPLICATION (VISION)
  {
    icon: <FaCamera />,
    title: "Vision Applications",
    link: "/applications/vision",
  },
];

export default function Applications() {
  return (
    <div style={{ maxWidth: 1100, margin: "80px auto", padding: "0 60px" }}>
      <h1>Applications</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 30,
          marginTop: 40,
        }}
      >
        {apps.map((a, i) => {
          const Card = (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              style={{
                padding: 30,
                border: "1px solid #e5e7eb",
                borderRadius: 12,
                textAlign: "center",
                cursor: a.link ? "pointer" : "default",
              }}
            >
              <div style={{ fontSize: 34, marginBottom: 12 }}>{a.icon}</div>
              <h3>{a.title}</h3>

              {a.link && (
                <p style={{ color: "#2563eb", marginTop: 8 }}>
                  View Details →
                </p>
              )}
            </motion.div>
          );

          // ✅ ONLY Vision Applications is clickable
          return a.link ? (
            <Link key={a.title} to={a.link} style={{ textDecoration: "none", color: "inherit" }}>
              {Card}
            </Link>
          ) : (
            Card
          );
        })}
      </div>
    </div>
  );
}
