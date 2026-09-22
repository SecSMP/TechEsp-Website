import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow"></div>

      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="logo-mark">TE</span>
            <span>TechEsp</span>
          </Link>

          <p>
            Reliable IT infrastructure, cybersecurity, cloud, networking
            and business technology solutions for modern organizations.
          </p>

          <Link to="/contact" className="footer-talk">
            Let's build better IT
            <span>↗</span>
          </Link>
        </div>

        <div className="footer-column">
          <span className="footer-heading">Company</span>

          <Link to="/about">About</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/clients">Clients</Link>
          <Link to="/blog">Blog</Link>
        </div>

        <div className="footer-column">
          <span className="footer-heading">Solutions</span>

          <Link to="/services">IT Infrastructure</Link>
          <Link to="/services">Cybersecurity</Link>
          <Link to="/services">Cloud & Microsoft 365</Link>
          <Link to="/services">Networking</Link>
        </div>

        <div className="footer-column">
          <span className="footer-heading">Contact</span>

          <Link to="/contact">Get in touch</Link>
          <Link to="/contact">IT Health Checkup</Link>
          <Link to="/contact">Support</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} TechEsp. All rights reserved.</span>

        <div className="footer-bottom-links">
          <Link to="/contact">Privacy</Link>
          <Link to="/contact">Terms</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;