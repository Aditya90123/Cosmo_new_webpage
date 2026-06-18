import { motion } from "framer-motion";
import AnimatedIcon from "./AnimatedIcon";

const apps = [
  {
    title: "Automotive",
    desc: "Engine, gearbox, fuel & brake systems",
    icon: "M3 12h18M12 3v18",
  },
  {
    title: "EV & Battery",
    desc: "Battery packs, cooling plates",
    icon: "M7 2v20M17 2v20",
  },
  {
    title: "Valves & Pumps",
    desc: "Hydraulic and pneumatic systems",
    icon: "M12 2l4 8H8l4-8z",
  },
  {
    title: "Medical Devices",
    desc: "High-precision safety testing",
    icon: "M2 12h20",
  },
];

export default function ApplicationsSection() {
  return (
    <section style={{ padding: "120px 32px", background: "#f9fafb" }}>
      <div style={{ maxWidth: 1400, margin: "auto" }}>
        <h2 style={{ fontSize: 36, marginBottom: 12 }}>
          Applications
        </h2>
        <p style={{ color: "#4b5563", marginBottom: 48 }}>
          Trusted across industries where accuracy and safety are critical.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 32,
          }}
        >
          {apps.map((a, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{
                background: "#fff",
                padding: 32,
                borderRadius: 20,
                border: "1px solid #e5e7eb",
                boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
              }}
            >
              <AnimatedIcon path={a.icon} />
              <h3 style={{ marginTop: 20 }}>{a.title}</h3>
              <p style={{ color: "#374151" }}>{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
