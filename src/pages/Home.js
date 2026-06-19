import HeroSlider from "../components/HeroSlider";
import GSAPScrollSection from "../components/GSAPScrollSection";
import StatsSection from "../components/StatsSection";
import WhyCosmo from "../components/WhyCosmo";
import ProductGrid from "../components/ProductGrid";
import WorldMap from "../components/WorldMap";
import AnnounceScroll from "../components/AnnounceScroll";
import { motion } from "framer-motion";

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
        }}
      >
        <h2 style={{ fontSize: 34, marginBottom: 36 }}>Our Products</h2>
        <ProductGrid />
      </motion.section>

      {/* WORLD MAP */}
      <WorldMap />

      {/* ANNOUNCEMENT SCROLL */}
      <AnnounceScroll />
    </>
  );
}
