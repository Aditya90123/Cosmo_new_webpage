import AnimatedIcon from "./AnimatedIcon";

const points = [
  { text: "Japanese Engineering Precision", icon: "M3 3h18v18H3z" },
  { text: "Repeatable & Stable Results", icon: "M12 2v20" },
  { text: "Global Support Network", icon: "M2 12h20" },
  { text: "Industry-Proven Reliability", icon: "M4 4l16 16" },
];

export default function WhyCosmo() {
  return (
    <section
      style={{
        background: "#0f172a",
        color: "white",
        padding: "120px 32px",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "auto" }}>
        <h2 style={{ fontSize: 36, marginBottom: 48 }}>
          Why COSMO
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 32,
          }}
        >
          {points.map((p, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.08)",
                padding: 28,
                borderRadius: 20,
              }}
            >
              <AnimatedIcon path={p.icon} />
              <p style={{ marginTop: 16 }}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
