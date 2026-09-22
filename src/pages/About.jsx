import "../App.css";

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-glow about-glow-one"></div>
        <div className="about-glow about-glow-two"></div>
        <div className="about-grid"></div>

        <div className="about-hero-content">
          <span className="section-eyebrow">ABOUT TECHESP</span>

          <h1>
            Technology built
            <span> around your business.</span>
          </h1>

          <p>
            TechEsp helps businesses build, secure and manage reliable
            technology environments through infrastructure, cybersecurity,
            cloud, networking and IT support.
          </p>
        </div>

        <div className="about-orbit">
          <div className="about-orbit-ring ring-one"></div>
          <div className="about-orbit-ring ring-two"></div>
          <div className="about-orbit-ring ring-three"></div>

          <div className="about-orbit-core">
            <strong>TE</strong>
            <small>TECHESP</small>
          </div>

          <span className="about-orbit-dot dot-one"></span>
          <span className="about-orbit-dot dot-two"></span>
          <span className="about-orbit-dot dot-three"></span>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story-heading">
          <span className="section-eyebrow">OUR APPROACH</span>

          <h2>
            IT should make business
            <span> simpler, safer and stronger.</span>
          </h2>
        </div>

        <div className="about-story-content">
          <p>
            Modern businesses depend on technology for almost every part of
            their operation. From servers and networks to cloud platforms,
            security and data, every system needs to work together.
          </p>

          <p>
            TechEsp takes a complete approach to IT. We understand the
            environment, identify the requirements and build solutions that
            are practical, secure and ready to scale.
          </p>

          <p>
            Our goal is not simply to install technology. It is to create an
            IT environment that people can depend on every day.
          </p>
        </div>
      </section>

      <section className="about-pillars">
        <div className="about-section-heading">
          <span className="section-eyebrow">WHAT WE FOCUS ON</span>

          <h2>
            Built for the way
            <span> businesses work.</span>
          </h2>
        </div>

        <div className="about-pillar-grid">
          <article className="about-pillar">
            <span>01</span>
            <div className="about-pillar-icon">⌘</div>
            <h3>Reliable Infrastructure</h3>
            <p>
              Stable servers, networks, endpoints and systems designed for
              dependable daily operations.
            </p>
          </article>

          <article className="about-pillar">
            <span>02</span>
            <div className="about-pillar-icon">◈</div>
            <h3>Security First</h3>
            <p>
              Security-focused infrastructure that protects users, systems
              and business data.
            </p>
          </article>

          <article className="about-pillar">
            <span>03</span>
            <div className="about-pillar-icon">◎</div>
            <h3>Scalable Technology</h3>
            <p>
              Technology solutions that can evolve as teams, applications
              and business requirements grow.
            </p>
          </article>

          <article className="about-pillar">
            <span>04</span>
            <div className="about-pillar-icon">↗</div>
            <h3>Long-Term Partnership</h3>
            <p>
              Ongoing support and technology guidance instead of one-time
              installation and handover.
            </p>
          </article>
        </div>
      </section>

      <section className="about-cta">
        <div>
          <span className="section-eyebrow">LET'S BUILD BETTER IT</span>

          <h2>
            Ready to strengthen
            <span> your IT environment?</span>
          </h2>

          <p>
            Let's understand your current infrastructure and identify where
            TechEsp can help.
          </p>
        </div>

        <a href="/contact" className="primary-button">
          Talk to TechEsp
          <span>↗</span>
        </a>
      </section>
    </main>
  );
}

export default About;