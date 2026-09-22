function Services() {
  const services = [
  {
    number: "01",
    icon: "⌁",
    image: "/images/services/IT_technician_1.jpg",
    title: "IT Infrastructure & Support",
    description:
      "Reliable IT infrastructure and ongoing technical support designed to keep everyday business operations running smoothly.",
    items: [
      "IT Outsourcing & AMC Support",
      "Windows & Linux Server Installation",
      "Active Directory Setup & Management",
      "Server & Endpoint Monitoring",
      "IT Asset & Software Management",
      "Software Licensing & Compliance",
    ],
  },
  {
    number: "02",
    icon: "◈",
    image: "/images/services/Technology2.jpg",
    title: "Cybersecurity & Protection",
    description:
      "Multi-layer security solutions designed to protect users, devices, networks and critical business information.",
    items: [
      "Firewall Deployment & Management",
      "Endpoint & Antivirus Protection",
      "Ransomware Protection",
      "Access Control & Security Policies",
      "Internet & User Activity Monitoring",
      "Data Loss Prevention",
    ],
  },
  {
    number: "03",
    icon: "◎",
    image: "/images/services/Technology3.jpg",
    title: "Cloud & Microsoft 365",
    description:
      "Modern cloud and digital workplace solutions that help teams work securely from anywhere.",
    items: [
      "Microsoft 365 Setup & Administration",
      "Business Email & Collaboration",
      "Cloud Migration & Management",
      "OneDrive & SharePoint Solutions",
      "Secure Remote Access",
      "Hybrid Cloud Infrastructure",
    ],
  },
  {
    number: "04",
    icon: "⌘",
    image: "/images/services/Technology1.jpg",
    title: "Networking & Wi-Fi",
    description:
      "Secure and reliable network infrastructure for offices, branches and growing organizations.",
    items: [
      "LAN & WAN Infrastructure",
      "Managed Switch Configuration",
      "Enterprise Wi-Fi Deployment",
      "VLAN & Network Segmentation",
      "Structured Cabling",
      "Network Monitoring & Troubleshooting",
    ],
  },
  {
    number: "05",
    icon: "▣",
    image: "/images/services/ServerRepair1.jpg",
    title: "Servers, Storage & Virtualization",
    description:
      "Scalable computing and storage infrastructure for applications, databases, file sharing and business workloads.",
    items: [
      "Windows & Linux Server Solutions",
      "Server Hardware Deployment",
      "NAS & Centralized Storage",
      "VMware & Hypervisor Solutions",
      "Server Consolidation",
      "Storage Planning & Expansion",
    ],
  },
  {
    number: "06",
    icon: "↻",
    image: "/images/services/ServerRepair2.jpg",
    title: "Backup & Disaster Recovery",
    description:
      "Business continuity solutions that help organizations protect critical data and recover from unexpected incidents.",
    items: [
      "Automated Data Backup",
      "On-Site & Off-Site Backup",
      "NAS Backup Solutions",
      "Disaster Recovery Planning",
      "Backup Monitoring & Verification",
      "Business Continuity Solutions",
    ],
  },
];
  return (
    <main className="services-page">
      {/* HERO */}

      <section className="services-hero">
        <div className="services-hero-grid"></div>

        <div className="services-hero-glow services-glow-one"></div>
        <div className="services-hero-glow services-glow-two"></div>

        <div className="services-hero-content">
          <span className="section-eyebrow">WHAT WE DO</span>

          <h1>
            Complete IT services
            <span> for modern businesses.</span>
          </h1>

          <p>
            From infrastructure and cybersecurity to cloud, networking,
            storage and business continuity, TechEsp delivers technology
            solutions built around the way your organization works.
          </p>

          <div className="services-hero-actions">
            <a href="#service-list" className="primary-button">
              Explore Services
              <span>↘</span>
            </a>

            <a href="/contact" className="secondary-button">
              Talk to TechEsp
            </a>
          </div>
        </div>

        <div className="services-hero-visual">
          <div className="services-visual-ring services-ring-one"></div>
          <div className="services-visual-ring services-ring-two"></div>
          <div className="services-visual-ring services-ring-three"></div>

          <div className="services-visual-core">
            <strong>TE</strong>
            <small>IT SYSTEM</small>
          </div>

          <span className="services-visual-dot services-dot-one"></span>
          <span className="services-visual-dot services-dot-two"></span>
          <span className="services-visual-dot services-dot-three"></span>
        </div>
      </section>

      {/* INTRO */}

      <section className="services-intro">
        <div>
          <span className="section-eyebrow">ONE IT PARTNER</span>

          <h2>
            Everything your business needs
            <span> to run technology better.</span>
          </h2>
        </div>

        <p>
          Technology works best when infrastructure, security, users,
          applications and data are connected. TechEsp brings these areas
          together through one coordinated IT approach.
        </p>
      </section>

      {/* SERVICES */}

      <section className="services-list-section" id="service-list">
        <div className="services-list-heading">
          <span className="section-eyebrow">OUR SERVICES</span>

          <h2>
            Technology solutions
            <span> that work together.</span>
          </h2>
        </div>

        <div className="services-detail-list">
          {services.map((service) => (
            <article className="service-detail-card" key={service.number}>
              <div className="service-detail-image">
                 <img src={service.image} alt={service.title} />
              </div>

              <div className="service-detail-top">
                <span className="service-detail-number">
                  {service.number}
                </span>

                <div className="service-detail-icon">
                  {service.icon}
                </div>
              </div>

              <div className="service-detail-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <ul>
                  {service.items.map((item) => (
                    <li key={item}>
                      <span>+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <span className="service-detail-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      {/* HEALTH CHECKUP */}

      <section className="services-health">
        <div className="services-health-glow"></div>

        <div className="services-health-content">
          <span className="section-eyebrow">START WITH YOUR IT</span>

          <h2>
            Not sure where your IT
            <span> stands today?</span>
          </h2>

          <p>
            Get a practical view of your current IT environment. We can
            review infrastructure, security, network, backup and user
            requirements to identify areas that need attention.
          </p>
        </div>

        <a href="/contact" className="primary-button">
          Book Your Free IT Health Checkup
          <span>↗</span>
        </a>
      </section>
    </main>
  );
}

export default Services;