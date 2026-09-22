import { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";

function App() {
const visualRef = useRef(null);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

useEffect(() => {
  const visual = visualRef.current;

  if (!visual) return;

  const handleMouseMove = (event) => {
    const rect = visual.getBoundingClientRect();

    const x = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
    const y = (event.clientY - (rect.top + rect.height / 2)) / rect.height;

    visual.style.setProperty("--mouse-x", `${x}`);
    visual.style.setProperty("--mouse-y", `${y}`);
  };

  const handleMouseLeave = () => {
    visual.style.setProperty("--mouse-x", "0");
    visual.style.setProperty("--mouse-y", "0");
  };

  visual.addEventListener("mousemove", handleMouseMove);
  visual.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    visual.removeEventListener("mousemove", handleMouseMove);
    visual.removeEventListener("mouseleave", handleMouseLeave);
  };
}, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".reveal-card");

    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="site">
      <header className="navbar">
  <a href="#" className="logo">
    <span className="logo-mark">TE</span>
    <span className="logo-text">TechEsp</span>
  </a>

  <nav className="nav-links">
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/services">Services</a>
  <a href="/industries">Industries</a>
  <a href="/products">Products</a>
  <a href="/clients">Clients</a>
  <a href="/blog">Blog</a>
  <a href="/contact">Contact</a>
</nav>

  <a href="#contact" className="nav-button">
    Let's Talk
    <span>↗</span>
  </a>

  <button
  className={`mobile-menu-button ${
    mobileMenuOpen ? "menu-open" : ""
  }`}
  type="button"
  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
>
  <span></span>
  <span></span>
  <span></span>
</button>
<div className={`mobile-menu ${mobileMenuOpen ? "is-open" : ""}`}>
  <a href="/" onClick={() => setMobileMenuOpen(false)}>
    Home
  </a>

  <a href="/about" onClick={() => setMobileMenuOpen(false)}>
    About
  </a>

  <a href="/services" onClick={() => setMobileMenuOpen(false)}>
    Services
  </a>

  <a href="/industries" onClick={() => setMobileMenuOpen(false)}>
    Industries
  </a>

  <a href="/products" onClick={() => setMobileMenuOpen(false)}>
    Products
  </a>

  <a href="/clients" onClick={() => setMobileMenuOpen(false)}>
    Clients
  </a>

  <a href="/blog" onClick={() => setMobileMenuOpen(false)}>
    Blog
  </a>

  <a href="/contact" onClick={() => setMobileMenuOpen(false)}>
    Contact
  </a>
  <a
  href="/contact"
  className="mobile-menu-cta"
  onClick={() => setMobileMenuOpen(false)}
>
  Let's Talk <span>↗</span>
</a>
</div>
</header>
      <main>
        <section className="hero">
          <div className="hero-grid"></div>

          <div className="hero-glow hero-glow-one"></div>
          <div className="hero-glow hero-glow-two"></div>

          <div className="hero-content">
            <div className="hero-badge">
              <span className="status-dot"></span>
              IT Infrastructure & Digital Solutions
            </div>
            
            <a href="/contact" className="health-checkup-cta">
              Book Your Free IT Health Checkup
            <span>↗</span>
            </a>

            <h1>
              Technology that
              <span> moves business forward.</span>
            </h1>

            <p>
              We design, deploy and manage reliable IT infrastructure,
              cybersecurity, cloud, networking and business technology
              solutions for growing organizations.
            </p>

            <div className="hero-actions">
              <a href="#services" className="primary-button">
                Explore Services
                <span>↗</span>
              </a>

              <a href="#about" className="secondary-button">
                Discover TechEsp
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>24/7</strong>
                <span>IT Support</span>
              </div>

              <div>
                <strong>360°</strong>
                <span>IT Solutions</span>
              </div>

              <div>
                <strong>Secure</strong>
                <span>By Design</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" ref={visualRef}>
            <div className="network-orbit orbit-one"></div>
            <div className="network-orbit orbit-two"></div>
            <div className="network-orbit orbit-three"></div>

            <div className="network-node node-one"></div>
            <div className="network-node node-two"></div>
            <div className="network-node node-three"></div>
            <div className="network-node node-four"></div>
            <div className="network-node node-five"></div>

            <div className="connection connection-one"></div>
            <div className="connection connection-two"></div>
            <div className="connection connection-three"></div>
            <div className="connection connection-four"></div>
            <div className="connection connection-five"></div>

            <div className="visual-core">
              <div className="core-ring"></div>
              <span>TE</span>
              <small>TECHESP</small>
            </div>

            <div className="floating-card card-top">
              <span className="card-icon">01</span>

              <div>
                <strong>Infrastructure</strong>
                <small>Built to scale</small>
              </div>
            </div>

            <div className="floating-card card-bottom">
              <span className="card-icon">02</span>

              <div>
                <strong>Security</strong>
                <small>Protected by design</small>
              </div>
            </div>

            <div className="floating-card card-side">
              <span className="card-icon">03</span>

              <div>
                <strong>Cloud</strong>
                <small>Ready for growth</small>
              </div>
            </div>
          </div>
        </section>
        <section className="services-section" id="services">
  <div className="section-heading">
    <div>
      <span className="section-eyebrow">WHAT WE DO</span>

      <h2>
        Complete IT services
        <span> for modern businesses.</span>
      </h2>
    </div>

    <p>
      From daily IT support and infrastructure to cybersecurity, cloud,
      networking and data protection, TechEsp helps businesses build and
      maintain a reliable technology environment.
    </p>
  </div>

  <div className="services-grid">

    <article className="service-card reveal-card">
      <span className="service-number">01</span>

      <div className="service-icon">⌁</div>

      <h3>IT Infrastructure & Support</h3>

      <p>
        Complete IT infrastructure management and day-to-day technical
        support for reliable business operations.
      </p>

      <ul className="service-details">
        <li>IT Outsourcing & AMC Support</li>
        <li>Windows & Linux Server Installation</li>
        <li>Active Directory Setup & Management</li>
        <li>Server & Endpoint Monitoring</li>
        <li>IT Asset & Software Management</li>
        <li>Licensed Software Compliance</li>
      </ul>

      <span className="service-arrow">↗</span>
    </article>

    <article className="service-card reveal-card">
      <span className="service-number">02</span>

      <div className="service-icon">◈</div>

      <h3>Cybersecurity & Protection</h3>

      <p>
        Multi-layer security designed to protect users, systems, networks
        and business data from modern threats.
      </p>

      <ul className="service-details">
        <li>Firewall Deployment & Management</li>
        <li>Endpoint & Antivirus Protection</li>
        <li>Ransomware Protection</li>
        <li>Access Control & Security Policies</li>
        <li>Internet & User Activity Monitoring</li>
        <li>Data Loss Prevention</li>
      </ul>

      <span className="service-arrow">↗</span>
    </article>

    <article className="service-card reveal-card">
      <span className="service-number">03</span>

      <div className="service-icon">◉</div>

      <h3>Cloud & Microsoft 365</h3>

      <p>
        Modern cloud and digital workplace solutions that keep teams
        connected, productive and secure from anywhere.
      </p>

      <ul className="service-details">
        <li>Microsoft 365 Setup & Administration</li>
        <li>Business Email & Collaboration</li>
        <li>Cloud Migration & Management</li>
        <li>OneDrive & SharePoint Solutions</li>
        <li>Secure Remote Access</li>
        <li>Hybrid Cloud Infrastructure</li>
      </ul>

      <span className="service-arrow">↗</span>
    </article>

    <article className="service-card reveal-card">
      <span className="service-number">04</span>

      <div className="service-icon">⌘</div>

      <h3>Networking & Wi-Fi</h3>

      <p>
        Secure and reliable network infrastructure designed for offices,
        branches and growing organizations.
      </p>

      <ul className="service-details">
        <li>LAN & WAN Infrastructure</li>
        <li>Managed Switch Configuration</li>
        <li>Enterprise Wi-Fi Deployment</li>
        <li>VLAN & Network Segmentation</li>
        <li>Structured Cabling</li>
        <li>Network Monitoring & Troubleshooting</li>
      </ul>

      <span className="service-arrow">↗</span>
    </article>

    <article className="service-card reveal-card">
      <span className="service-number">05</span>

      <div className="service-icon">▣</div>

      <h3>Servers, Storage & Virtualization</h3>

      <p>
        Scalable computing and storage infrastructure for applications,
        databases, file sharing and business workloads.
      </p>

      <ul className="service-details">
        <li>Windows & Linux Server Solutions</li>
        <li>Server Hardware Deployment</li>
        <li>NAS & Centralized Storage</li>
        <li>VMware & Hypervisor Solutions</li>
        <li>Server Consolidation</li>
        <li>Storage Planning & Expansion</li>
      </ul>

      <span className="service-arrow">↗</span>
    </article>

    <article className="service-card reveal-card">
      <span className="service-number">06</span>

      <div className="service-icon">↻</div>

      <h3>Backup & Disaster Recovery</h3>

      <p>
        Business continuity solutions that help organizations protect
        critical data and recover quickly from unexpected incidents.
      </p>

      <ul className="service-details">
        <li>Automated Data Backup</li>
        <li>On-Site & Off-Site Backup</li>
        <li>NAS Backup Solutions</li>
        <li>Disaster Recovery Planning</li>
        <li>Backup Monitoring & Verification</li>
        <li>Business Continuity Solutions</li>
      </ul>

      <span className="service-arrow">↗</span>
    </article>

  </div>
</section>
      </main>
    </div>
  );
}

export default App;