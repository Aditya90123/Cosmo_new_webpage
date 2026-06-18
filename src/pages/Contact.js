import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(
        "https://cosmo-backend-wyp4.onrender.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      const data = await res.json();

      if (data.status === "saved" || data.status === "ok") {
        setStatus("✅ Message sent successfully");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("❌ Failed to send message");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Server error. Try again later.");
    }
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "80px auto",
        padding: "0 24px",
      }}
    >
      <h1 style={{ marginBottom: 24 }}>Contact COSMO</h1>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 16 }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          style={{
            padding: 14,
            borderRadius: 8,
            border: "1px solid #d1d5db",
          }}
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          required
          style={{
            padding: 14,
            borderRadius: 8,
            border: "1px solid #d1d5db",
          }}
        />

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          rows={5}
          required
          style={{
            padding: 14,
            borderRadius: 8,
            border: "1px solid #d1d5db",
          }}
        />

        <button
          type="submit"
          className="apple-btn primary"
          style={{ width: "fit-content" }}
        >
          Send Message →
        </button>

        {status && (
          <p style={{ marginTop: 12, fontWeight: 500 }}>{status}</p>
        )}
      </form>
    </div>
  );
}
