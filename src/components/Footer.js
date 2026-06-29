import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const productLinks = [
  { name: "Air Leak Testers", path: "/#products" },
  { name: "Air Flow Leak Testers", path: "/#products" },
  { name: "Helium/Hydrogen", path: "/#products" },
  { name: "Pressure", path: "/#products" },
  { name: "Peripherals", path: "/#products" },
  { name: "Sound/Vibrational Analyzer", path: "/#products" },
  { name: "Cosmo Super Gel", path: "/#products" },
  { name: "Coretec", path: "/#products" },
  { name: "Koganei", path: "/#products" },
];

const quickLinks = [
  { name: "Leak Test Machine", path: "/#products" },
  { name: "Leak Test Principles & Type", path: "/applications" },
  { name: "Industrial Application", path: "/applications" },
  { name: "Warranty/Service", path: "/contact" },
  { name: "News/Events", path: "/#news" },
  { name: "FAQ", path: "/#faq" },
  { name: "Contact Us", path: "/contact" },
  { name: "Privacy Policy", path: "/#privacy" },
];

const companyLinks = [
  { name: "Corporate History", path: "/#about" },
  { name: "Message from the director", path: "/#about" },
  { name: "Employment Opportunities", path: "/#careers" },
  { name: "List of Offices in India", path: "/applications/vision" },
  { name: "Worldwide sales & Service network", path: "/applications/vision" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" style={{ position: "relative", backgroundColor: "#040404", color: "#94a3b8", padding: "80px 24px 30px", overflow: "hidden", borderTop: "1px solid #111" }}>

      {/* Animated Glowing Map Background */}
      <motion.div
        className="footer-map-bg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "600px",
          backgroundImage: "url('/images/footer_map_clean.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          opacity: 0.18,
          pointerEvents: "none",
          zIndex: 0,
        }}
        animate={{
          scale: [1, 1.03, 1],
          opacity: [0.15, 0.20, 0.15],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div
          className="footer-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "48px",
            marginBottom: "60px",
          }}
        >
          {/* Logo & Info Column */}
          <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Link to="/" style={{ display: "inline-block" }}>
              <img src="/logo.png" alt="COSMO Logo" style={{ height: "45px", width: "auto", filter: "brightness(0) invert(1)" }} />
            </Link>
            <p style={{ fontSize: "14px", lineHeight: "1.7", color: "#94a3b8" }}>
              Unveiling a new chapter — the grand inauguration of our Head Office is successfully complete. Started a new venture manufacturing plant at Bengaluru.
            </p>

            {/* EV Summit Live Indicator Alert */}
            <motion.div
              style={{
                border: "1px dashed rgba(245, 158, 11, 0.3)",
                borderRadius: "8px",
                padding: "12px",
                background: "rgba(245, 158, 11, 0.03)",
                fontSize: "13px",
                color: "#f59e0b",
                lineHeight: "1.5",
              }}
              animate={{
                boxShadow: ["0 0 0px rgba(245, 158, 11, 0)", "0 0 10px rgba(245, 158, 11, 0.15)", "0 0 0px rgba(245, 158, 11, 0)"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span style={{ fontWeight: 700 }}>⚡ EV Summit</span> | 22 Aug 2025 | New Delhi – Driving the future of electric mobility!
            </motion.div>

            {/* Social Media Links */}
            <div style={{ display: "flex", gap: "12px" }}>
              {[
                { icon: <FaFacebookF />, url: "https://facebook.com", color: "#1877f2" },
                { icon: <FaXTwitter />, url: "https://twitter.com", color: "#000000" },
                { icon: <FaInstagram />, url: "https://instagram.com", color: "#e1306c" },
                { icon: <FaLinkedinIn />, url: "https://linkedin.com", color: "#0077b5" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#f8fafc",
                    fontSize: "16px",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                  whileHover={{
                    scale: 1.15,
                    backgroundColor: social.color,
                    boxShadow: `0 0 15px ${social.color}77`,
                    borderColor: social.color,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Glassmorphic DUNS Badge */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "8px",
                padding: "10px 14px",
                background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                backdropFilter: "blur(6px)",
                maxWidth: "200px",
                marginTop: "6px",
              }}
            >
              <span style={{ fontSize: "10px", fontWeight: "700", color: "#3b82f6", letterSpacing: "1.5px", textTransform: "uppercase" }}>D-U-N-S® REGISTERED</span>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#f1f5f9", marginTop: "2px" }}>Dun & Bradstreet</span>
            </div>
          </motion.div>

          {/* Products Column */}
          <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#fff", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Products</h4>
              <div style={{ width: "36px", height: "2px", backgroundColor: "#2563eb" }} />
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {productLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.path}
                    style={{ fontSize: "14px", color: "#94a3b8", display: "inline-block", textDecoration: "none" }}
                    whileHover={{ x: 6, color: "#3b82f6" }}
                    transition={{ type: "tween", duration: 0.2 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#fff", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Quick Links</h4>
              <div style={{ width: "36px", height: "2px", backgroundColor: "#2563eb" }} />
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.path.startsWith("/#") ? (
                    <motion.a
                      href={link.path}
                      style={{ fontSize: "14px", color: "#94a3b8", display: "inline-block", textDecoration: "none" }}
                      whileHover={{ x: 6, color: "#3b82f6" }}
                      transition={{ type: "tween", duration: 0.2 }}
                    >
                      {link.name}
                    </motion.a>
                  ) : (
                    <Link to={link.path} style={{ textDecoration: "none" }}>
                      <motion.span
                        style={{ fontSize: "14px", color: "#94a3b8", display: "inline-block", cursor: "pointer" }}
                        whileHover={{ x: 6, color: "#3b82f6" }}
                        transition={{ type: "tween", duration: 0.2 }}
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#fff", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Company</h4>
              <div style={{ width: "36px", height: "2px", backgroundColor: "#2563eb" }} />
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {companyLinks.map((link, index) => (
                <li key={index}>
                  {link.path.startsWith("/#") ? (
                    <motion.a
                      href={link.path}
                      style={{ fontSize: "14px", color: "#94a3b8", display: "inline-block", textDecoration: "none" }}
                      whileHover={{ x: 6, color: "#3b82f6" }}
                      transition={{ type: "tween", duration: 0.2 }}
                    >
                      {link.name}
                    </motion.a>
                  ) : (
                    <Link to={link.path} style={{ textDecoration: "none" }}>
                      <motion.span
                        style={{ fontSize: "14px", color: "#94a3b8", display: "inline-block", cursor: "pointer" }}
                        whileHover={{ x: 6, color: "#3b82f6" }}
                        transition={{ type: "tween", duration: 0.2 }}
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "rgba(255, 255, 255, 0.08)", marginBottom: "30px" }} />

        {/* Copyright & Legal */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", fontSize: "13px", color: "#64748b" }}>
          <span>© {currentYear} Cosmo Instruments India Pvt. Ltd. All Rights Reserved.</span>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="/#terms" style={{ color: "#64748b", textDecoration: "none" }}>Terms of Service</a>
            <a href="/#privacy" style={{ color: "#64748b", textDecoration: "none" }}>Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
