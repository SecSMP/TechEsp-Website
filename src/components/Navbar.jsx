import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        <span className="logo-mark">TE</span>
        <span className="logo-text">TechEsp</span>
      </Link>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/industries">Industries</Link>
        <Link to="/products">Products</Link>
        <Link to="/clients">Clients</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Link to="/contact" className="nav-button">
        Let's Talk
        <span>↗</span>
      </Link>

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
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/about" onClick={closeMenu}>
          About
        </Link>

        <Link to="/services" onClick={closeMenu}>
          Services
        </Link>

        <Link to="/industries" onClick={closeMenu}>
          Industries
        </Link>

        <Link to="/products" onClick={closeMenu}>
          Products
        </Link>

        <Link to="/clients" onClick={closeMenu}>
          Clients
        </Link>

        <Link to="/blog" onClick={closeMenu}>
          Blog
        </Link>

        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>

        <Link
          to="/contact"
          className="mobile-menu-cta"
          onClick={closeMenu}
        >
          Let's Talk <span>↗</span>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;