import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { motion } from "framer-motion";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) return <p>Product not found</p>;

  return (
    <section style={{ padding: "120px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "auto" }}>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {product.name}
        </motion.h1>

        <p style={{ color: "#4b5563", marginBottom: 40 }}>
          {product.desc}
        </p>

        {/* SPEC TABLE */}
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: 40,
          }}
        >
          <tbody>
            {Object.entries(product.specs).map(([k, v]) => (
              <tr key={k}>
                <td style={{ padding: 12, borderBottom: "1px solid #e5e7eb" }}>
                  <strong>{k}</strong>
                </td>
                <td style={{ padding: 12, borderBottom: "1px solid #e5e7eb" }}>
                  {v}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* CTA */}
        <div style={{ display: "flex", gap: 16 }}>
          <a href={product.pdf} className="btn-outline" download>
            Download Brochure
          </a>
          <a href="/contact" className="btn-primary">
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
}
