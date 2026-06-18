export default function SpecTable({ specs }) {
  return (
    <table style={{ width: "100%", marginTop: 30, borderCollapse: "collapse" }}>
      {Object.entries(specs).map(([k, v]) => (
        <tr key={k}>
          <td style={{
            padding: 12,
            fontWeight: 600,
            borderBottom: "1px solid #e5e7eb"
          }}>
            {k}
          </td>
          <td style={{
            padding: 12,
            borderBottom: "1px solid #e5e7eb"
          }}>
            {v}
          </td>
        </tr>
      ))}
    </table>
  );
}
