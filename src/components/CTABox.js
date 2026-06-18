export default function CTABox() {
  return (
    <div style={{
      marginTop: 40,
      padding: 30,
      background: "#f9fafb",
      border: "1px solid #e5e7eb",
      borderRadius: 12
    }}>
      <h3>Request a Quote</h3>
      <p>Contact COSMO for pricing, demo & technical consultation.</p>
      <a href="/contact" style={{
        display: "inline-block",
        marginTop: 10,
        padding: "10px 18px",
        background: "#2563eb",
        color: "#fff",
        borderRadius: 6
      }}>
        Contact Sales →
      </a>
    </div>
  );
}
