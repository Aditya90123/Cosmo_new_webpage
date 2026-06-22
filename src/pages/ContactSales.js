import { useState } from "react";
import "./ContactSales.css";

export default function ContactSales() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    interestedIn: "Vision AI Inspection",
    projectDetails: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            message: `Company: ${formData.company}\nPhone: ${formData.phone}\nInterested In: ${formData.interestedIn}\n\nProject Details:\n${formData.projectDetails}`,
          }),
        }
      );

      const data = await res.json();

      if (data.status === "saved" || data.status === "ok") {
        setStatus("✅ Message sent successfully");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          interestedIn: "Vision AI Inspection",
          projectDetails: "",
        });
      } else {
        setStatus("❌ Failed to send message");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Server error. Try again later.");
    }
  };

  return (
    <div className="contact-sales-container">
      <div className="glow-1"></div>
      <div className="glow-2"></div>

      <div className="india-map">
        <img src="/images/india map.png" alt="India Map" />
      </div>

      <div className="form-card">
        <div className="badge">COSMO INDIA • ENTERPRISE SALES</div>

        <h1>Contact Sales</h1>
        <p className="subtitle">
          Speak with our experts about Vision AI, Leak Testing, Automation
          Solutions and Industrial Inspection Systems.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                required
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
              />
            </div>

            <div className="form-group full">
              <label>Company Name</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Cosmo Instruments India Pvt Ltd"
              />
            </div>

            <div className="form-group full">
              <label>Interested In</label>
              <select
                name="interestedIn"
                value={formData.interestedIn}
                onChange={handleChange}
              >
                <option>Vision AI Inspection</option>
                <option>Leak Testing Solutions</option>
                <option>Industrial Automation</option>
                <option>Machine Vision Systems</option>
                <option>Custom Solution</option>
              </select>
            </div>

            <div className="form-group full">
              <label>Project Details</label>
              <textarea
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                placeholder="Describe your application, production line, inspection requirements, annual volume, etc."
              />
            </div>
          </div>

          <button type="submit">Contact Sales →</button>

          {status && <div className="status-message">{status}</div>}

          <div className="footer">
            Our team typically responds within 24 hours.
          </div>
        </form>
      </div>
    </div>
  );
}
