import { useState } from "react";
import "../App.css";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-glow"></div>

        <div className="contact-hero-content">
          <span className="section-eyebrow">Get In Touch</span>

          <h1>
            Let's talk about
            <span> your technology.</span>
          </h1>

          <p>
            Whether you need reliable IT infrastructure, stronger
            cybersecurity, cloud solutions or ongoing support, let's
            discuss how TechEsp can help your business.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-info">
          <span className="section-eyebrow">Start a Conversation</span>

          <h2>
            Tell us what you
            <span> need.</span>
          </h2>

          <p>
            Share a few details about your business and requirements.
            Our team will get back to you with the right next step.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <span className="contact-detail-label">Email</span>
              <a href="mailto:support.techesp@gmail.com">
                Support.TechEsp@gmail.com
              </a>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-label">Response</span>
              <span>We'll get back to you soon.</span>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-label">Services</span>
              <span>IT • Security • Cloud • Networking</span>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <form onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              <div className="contact-field">
                <label htmlFor="name">Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Company name"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="phone">Phone *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91"
                  required
                />
              </div>

              <div className="contact-field contact-field-full">
                <label htmlFor="service">What can we help with?</label>

                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="IT Infrastructure & Support">
                    IT Infrastructure & Support
                  </option>
                  <option value="Cybersecurity & Protection">
                    Cybersecurity & Protection
                  </option>
                  <option value="Cloud & Microsoft 365">
                    Cloud & Microsoft 365
                  </option>
                  <option value="Networking & Wi-Fi">
                    Networking & Wi-Fi
                  </option>
                  <option value="Servers, Storage & Virtualization">
                    Servers, Storage & Virtualization
                  </option>
                  <option value="Backup & Disaster Recovery">
                    Backup & Disaster Recovery
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="contact-field contact-field-full">
                <label htmlFor="message">Message *</label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows="6"
                  required
                />
              </div>
            </div>

            {status === "success" && (
              <div className="contact-form-status success">
                Thank you. Your enquiry has been sent successfully.
              </div>
            )}

            {status === "error" && (
              <div className="contact-form-status error">
                Something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              className="contact-submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Enquiry"}
              {!loading && <span>↗</span>}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
