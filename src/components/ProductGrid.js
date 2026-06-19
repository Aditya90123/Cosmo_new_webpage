import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products } from "../data/products";

const featuredProducts = [
  {
    id: "process-gauges",
    name: "Process Gauges",
    cat: "Gauges",
    image: "/images/air-leak-tester.png",
  },
  {
    id: "air-flow-tester",
    name: "Air Flow Tester",
    cat: "Flow Tester",
    image: "/images/air-flow-tester.png",
  },
  {
    id: "air-leak-tester",
    name: "Air Leak Tester",
    cat: "Leak Tester",
    image: "/images/air-leak-tester.png",
  },
];

export default function ProductGrid() {
  // Flat list of all products for modal navigation
  const productList = products;
  const [selectedIndex, setSelectedIndex] = useState(null);
  // Compute the list of products belonging to the same category as the currently selected product
  const selectedProduct = productList[selectedIndex];
  const categoryProducts = selectedProduct ? products.filter(p => p.cat === selectedProduct.cat) : [];
  // Map category products back to their indices in the full products array for navigation
  const categoryIndices = categoryProducts.map(p => products.findIndex(pl => pl.id === p.id));
  // Determine the index of the selected product within the category list
  const catPos = selectedProduct ? categoryProducts.findIndex(p => p.id === selectedProduct.id) : 0;

  // Handlers for navigating within the same category
  const goPrev = () => {
    if (categoryIndices.length > 1) {
      const prevPos = (catPos - 1 + categoryIndices.length) % categoryIndices.length;
      setSelectedIndex(categoryIndices[prevPos]);
    }
  };
  const goNext = () => {
    if (categoryIndices.length > 1) {
      const nextPos = (catPos + 1) % categoryIndices.length;
      setSelectedIndex(categoryIndices[nextPos]);
    }
  };

  return (
    <>
      <div
        style={{
          maxWidth: 1200,
          margin: "auto",
          display: "grid",
          gap: 14,
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#94a3b8",
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            fontSize: 12,
          }}
        >
          Product Showcase
        </p>
        <h3 style={{ fontSize: 36, lineHeight: 1.1, maxWidth: 760, margin: "auto" }}>
          Explore our precision testing instruments
        </h3>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 32,
          maxWidth: 1200,
          margin: "44px auto 0",
          padding: "0 24px",
        }}
      >
        {featuredProducts.map((cardData, index) => {
          const product = products.find((p) => p.id === cardData.id) || cardData;

          return (
            <motion.button
              key={cardData.id}
              type="button"
              onClick={() => setSelectedIndex(index)}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                all: "unset",
                position: "relative",
                borderRadius: 24,
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: "0 20px 60px rgba(15,23,42,0.15)",
                background: "#fff",
                aspectRatio: "4/5",
              }}
            >
              <div style={{ width: "100%", height: "100%", position: "relative" }}>
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                  style={{ width: "100%", height: "70%", overflow: "hidden" }}
                >
                  <img
                    src={cardData.image}
                    alt={cardData.name}
                    style={{ 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover",
                    }}
                  />
                </motion.div>
                
                <motion.div
                  initial={{ background: "linear-gradient(180deg, transparent 60%, rgba(15,23,42,0.95) 100%)" }}
                  whileHover={{ background: "linear-gradient(180deg, transparent 50%, rgba(15,23,42,0.98) 100%)" }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 60%, rgba(15,23,42,0.95) 100%)",
                  }}
                />
                
                <motion.div
                  style={{
                    position: "absolute",
                    left: 24,
                    right: 24,
                    bottom: 24,
                    color: "#fff",
                  }}
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    style={{ 
                      fontSize: 11, 
                      letterSpacing: "0.2em", 
                      textTransform: "uppercase", 
                      opacity: 0.8, 
                      marginBottom: 8,
                      fontWeight: 600
                    }}
                    whileHover={{ opacity: 1 }}
                  >
                    {cardData.cat}
                  </motion.div>
                  <motion.div 
                    style={{ 
                      fontSize: 24, 
                      fontWeight: 700, 
                      lineHeight: 1.2
                    }}
                    whileHover={{ fontSize: 26 }}
                    transition={{ duration: 0.3 }}
                  >
                    {cardData.name}
                  </motion.div>
                </motion.div>
              </div>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(15,23,42,0.78)",
              zIndex: 160,
              display: "grid",
              placeItems: "center",
              padding: 24,
            }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              style={{
                width: "100%",
                maxWidth: 980,
                background: "#fff",
                borderRadius: 32,
                overflow: "hidden",
                boxShadow: "0 48px 140px rgba(15,23,42,0.24)",
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <div style={{ position: "relative", height: 380 }}>
                <img
                  src={productList[selectedIndex].image}
                  alt={selectedProduct.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <button
                  type="button"
                  onClick={() => setSelectedIndex(null)}
                  style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    border: "none",
                    background: "rgba(255,255,255,0.92)",
                    color: "#111827",
                    fontSize: 28,
                    cursor: "pointer",
                    boxShadow: "0 14px 30px rgba(15,23,42,0.18)",
                    zIndex: 10,
                  }}
                >
                  ×
                </button>
                {categoryIndices.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={goPrev}
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: 20,
                        transform: "translateY(-50%)",
                        background: "rgba(0,0,0,0.5)",
                        border: "none",
                        borderRadius: "50%",
                        width: 48,
                        height: 48,
                        color: "#fff",
                        fontSize: 24,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                      }}
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: 20,
                        transform: "translateY(-50%)",
                        background: "rgba(0,0,0,0.5)",
                        border: "none",
                        borderRadius: "50%",
                        width: 48,
                        height: 48,
                        color: "#fff",
                        fontSize: 24,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                      }}
                    >
                      →
                    </button>
                  </>
                )}
              </div>

              <div style={{ padding: 36, display: "grid", gap: 22 }}>
                <div>
                  <p style={{ color: "#2563eb", fontWeight: 700, marginBottom: 10 }}>
                    {productList[selectedIndex].cat}
                  </p>
                  <h2 style={{ fontSize: 34, marginBottom: 18 }}>
                    {productList[selectedIndex].name}
                  </h2>
                  <p style={{ color: "#475569", lineHeight: 1.8 }}>
                    {productList[selectedIndex].desc}
                  </p>
                </div>

                <div style={{ display: "grid", gap: 20 }}>
                  <div>
                    <h4 style={{ marginBottom: 10 }}>Key information</h4>
                    <ul style={{ color: "#334155", lineHeight: 1.8, paddingLeft: 20 }}>
                      {productList[selectedIndex].features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 style={{ marginBottom: 10 }}>Specifications</h4>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
                        gap: 14,
                      }}
                    >
                      {Object.entries(productList[selectedIndex].specs).map(([label, value]) => (
                        <div
                          key={label}
                          style={{
                            background: "#f8fafc",
                            borderRadius: 18,
                            padding: 18,
                          }}
                        >
                          <small style={{ color: "#64748b", display: "block", marginBottom: 6 }}>
                            {label}
                          </small>
                          <strong style={{ color: "#111827" }}>{value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                  <a href={productList[selectedIndex].pdf} className="btn-outline" download>
                    Download brochure
                  </a>
                  <a href="/contact" className="btn-primary">
                    Contact sales
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
