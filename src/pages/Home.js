import HeroSlider from "../components/HeroSlider";
import GSAPScrollSection from "../components/GSAPScrollSection";
import StatsSection from "../components/StatsSection";
import WhyCosmo from "../components/WhyCosmo";
import ProductCards3D from "../components/ProductCards3D";
import WorldMap from "../components/WorldMap";
import AnnounceScroll from "../components/AnnounceScroll";
import { motion } from "framer-motion";
import ClientLogos from "../components/ClientLogos";
import GlowButton from "../components/GlowButton";
export default function Home() {
  return (
    <>
      {/* HERO */}
      <HeroSlider />

      <GSAPScrollSection />

      {/* OUR PRESENCE (STATS) */}
      <StatsSection />

      {/* WHY COSMO */}
      <WhyCosmo />

      {/* PRODUCTS */}
      <motion.section
        id="products"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: 1400,
          margin: "auto",
          padding: "100px 32px",
          textAlign: "center"
        }}
      >
        <h2 style={{ fontSize: 34, marginBottom: 16 }}>Our Products</h2>
        <p style={{ fontSize: 16, color: "#64748b", marginBottom: 40 }}>Featured leak testing and flow measurement solutions</p>
        <ProductCards3D />
        <div style={{ marginTop: "60px" }}>
          <GlowButton to="/all-products">Explore More Products</GlowButton>
        </div>
      </motion.section>

      {/* WORLD MAP */}
      <WorldMap />
      <ClientLogos />

      {/* ANNOUNCEMENT SCROLL */}
      <AnnounceScroll />
    </>
  );
}
