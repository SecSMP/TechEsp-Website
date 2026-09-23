import { useEffect } from "react";
import "../App.css";

const industries = [
  {
    number: "01",
    image: "/images/services/manufacturing.jpg",
    title: "Manufacturing",
    description:
      "Reliable IT infrastructure, networking, cybersecurity and systems support for modern manufacturing operations.",
  },
  {
    number: "02",
    image: "/images/services/Trading & Distribution.jpg",
    title: "Trading & Distribution",
    description:
      "Secure and connected technology solutions for warehouses, distribution networks, inventory and business operations.",
  },
  {
    number: "03",
    image: "/images/services/Professional Services.jpg",
    title: "Professional Services",
    description:
      "Secure digital infrastructure that helps professional teams stay productive, connected and protected.",
  },
  {
    number: "04",
    image: "/images/services/Healthcare.jpg",
    title: "Healthcare",
    description:
      "Secure and dependable IT environments designed to support healthcare teams, systems and critical data.",
  },
  {
    number: "05",
    image: "/images/services/Education.jpg",
    title: "Education",
    description:
      "Connected and manageable technology infrastructure for schools, institutions, campuses and learning environments.",
  },
  {
    number: "06",
    image: "/images/services/Retail & Multi-Location.jpg",
    title: "Retail & Multi-Location",
    description:
      "Centralized IT, networking and security solutions for retail businesses operating across multiple locations.",
  },
  {
    number: "07",
    image: "/images/services/Real Estate & Construction.jpg",
    title: "Real Estate & Construction",
    description:
      "Technology infrastructure that keeps project teams, offices, sites and business systems connected.",
  },
  {
    number: "08",
    image: "/images/services/Modern business_team environment.jpg",
    title: "SMEs & Growing Businesses",
    description:
      "Scalable IT solutions that help growing businesses build a secure, reliable and future-ready technology foundation.",
  },
];

function Industries() {
  useEffect(() => {
    const cards = document.querySelectorAll(".industry-card");

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
        threshold: 0.12,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="industries-page">
      <section className="industries-hero">
        <div className="industries-hero-glow"></div>

        <div className="industries-hero-content">
          <span className="section-eyebrow">Industries We Serve</span>

          <h1>
            Technology built for
            <span> real business.</span>
          </h1>

          <p>
            Every industry has different technology challenges. TechEsp
            delivers reliable IT infrastructure, cybersecurity, cloud,
            networking and business technology solutions designed around
            the way your organization works.
          </p>
        </div>
      </section>

      <section className="industries-section">
        <div className="industries-section-header">
          <div>
            <span className="section-eyebrow">Our Expertise</span>

            <h2>
              IT solutions across
              <span> industries.</span>
            </h2>
          </div>

          <p>
            From growing businesses to complex multi-location operations,
            we build technology environments that are secure, reliable
            and ready to scale.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry) => (
            <article className="industry-card" key={industry.number}>
              <div className="industry-image">
                <img src={industry.image} alt={industry.title} />
              </div>

              <div className="industry-card-content">
                <span className="industry-number">
                  {industry.number}
                </span>

                <h3>{industry.title}</h3>

                <p>{industry.description}</p>

                <span className="industry-arrow">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="industries-cta">
        <div className="industries-cta-glow"></div>

        <div className="industries-cta-content">
          <span className="section-eyebrow">Build With TechEsp</span>

          <h2>
            Your business is unique.
            <span> Your technology should be too.</span>
          </h2>

          <p>
            Let's build an IT environment that supports your people,
            protects your business and grows with you.
          </p>

          <a href="/contact" className="industries-cta-button">
            Let's Talk
            <span>↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Industries;