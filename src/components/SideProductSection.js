import { motion } from "framer-motion";

export default function SideProductSection({
  title,
  subtitle,
  description,
  image,
  reverse = false,
}) {
  return (
    <section
      style={{
        padding: "100px 60px",
        background: "#f9fafb",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "auto",
          display: "flex",
          flexDirection: reverse ? "row-reverse" : "row",
          alignItems: "center",
          gap: 80,
        }}
      >
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ flex: 1 }}
        >
          <h2 style={{ fontSize: 36, marginBottom: 10 }}>{title}</h2>
          <h4 style={{ color: "#2563eb", marginBottom: 20 }}>{subtitle}</h4>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "#374151" }}>
            {description}
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ flex: 1 }}
        >
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              borderRadius: 20,
              boxShadow: "0 30px 80px rgba(0,0,0,0.15)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
