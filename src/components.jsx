import { useState } from "react";

function SpiderMark({ className = "" }) {
  return (
    <svg
      className={`spider-mark ${className}`}
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <path d="M18 18 10 12 5 15M30 18l8-6 5 3M17 24 9 23 5 28M31 24l8-1 4 5M19 30l-7 7-5-2M29 30l7 7 5-2" />
      <ellipse cx="24" cy="27" rx="7" ry="8" />
      <circle cx="24" cy="16" r="5" />
      <circle className="spider-mark-eye" cx="22" cy="15" r="1" />
      <circle className="spider-mark-eye" cx="26" cy="15" r="1" />
    </svg>
  );
}

export function DecorativeWebs() {
  return (
    <>
      <svg
        className="web-decoration web-decoration-top"
        viewBox="0 0 220 240"
        aria-hidden="true"
      >
        <g className="web-lines">
          <path d="M220 0H0M220 0L0 90M220 0L40 160M220 0L100 210M220 0L220 240M220 0L220 80M220 0L150 150" />
          <path d="M185 0Q180 35 220 40M145 0Q140 70 220 85M105 0Q100 110 220 130M65 0Q60 150 220 175M25 0Q20 190 220 215" />
        </g>
        <g className="hanging-spider">
          <path className="spider-thread" d="M168 0V82" />
          <circle className="spider-body" cx="168" cy="91" r="6" />
          <circle className="spider-head" cx="168" cy="82" r="3" />
          <path className="spider-legs" d="M164 84L157 79L153 82M172 84L179 79L183 82M163 89L155 88L151 92M173 89L181 88L185 92M164 94L158 100L154 98M172 94L178 100L182 98" />
        </g>
      </svg>
      <svg
        className="web-decoration web-decoration-bottom"
        viewBox="0 0 220 220"
        aria-hidden="true"
      >
        <g className="web-lines">
          <path d="M0 220V0M0 220H220M0 220L60 0M0 220L130 0M0 220L220 50M0 220L220 130" />
          <path d="M0 185Q40 180 45 220M0 145Q80 140 85 220M0 105Q120 100 125 220M0 65Q160 60 165 220M0 25Q200 20 205 220" />
        </g>
        <g className="crawling-spider">
          <circle className="spider-body" cx="73" cy="154" r="5" />
          <circle className="spider-head" cx="73" cy="146" r="2.5" />
          <path className="spider-legs" d="M70 148L64 144L60 147M76 148L82 144L86 147M69 153L62 152L59 156M77 153L84 152L87 156M70 158L65 163L61 161M76 158L81 163L85 161" />
        </g>
      </svg>
    </>
  );
}

export function Navbar({ theme, toggleTheme, isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <a className="logo" href="#home">
        PLM<span>.</span><b>SPACE</b>
      </a>

      <div className="navbar-actions">
        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? (
            <svg className="theme-toggle-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.2 15.1A8.3 8.3 0 0 1 8.9 3.8 8.7 8.7 0 1 0 20.2 15.1Z" />
            </svg>
          ) : (
            <svg className="theme-toggle-icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
            </svg>
          )}
        </button>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      <div
        className={`nav-links${isMenuOpen ? " is-open" : ""}`}
        id="primary-navigation"
      >
        <a href="#home" onClick={() => setIsMenuOpen(false)}>
          <SpiderMark className="nav-spider-mark" />
          <span>Home</span>
          <SpiderMark className="nav-spider-mark" />
        </a>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>
          <SpiderMark className="nav-spider-mark" />
          <span>About</span>
          <SpiderMark className="nav-spider-mark" />
        </a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)}>
          <SpiderMark className="nav-spider-mark" />
          <span>Projects &amp; Certificates</span>
          <SpiderMark className="nav-spider-mark" />
        </a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>
          <SpiderMark className="nav-spider-mark" />
          <span>Contact</span>
          <SpiderMark className="nav-spider-mark" />
        </a>
      </div>
    </nav>
  );
}

export function HomeSection({ setIsProfileOpen }) {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <p className="eyebrow">FRONT &amp; BACKEND DEVELOPMENT STUDENT</p>
        <h1>
          Hi, I'm <span>Paul!</span>
          <SpiderMark className="hero-spider-mark" />
        </h1>
        <p className="description">
          I'm learning frontend and exploring backend development. I'm still a
          beginner, but I keep practicing through the tricky parts. My goal is
          to build an app that solves a real problem for people.
        </p>
        <a className="primary-btn" href="#projects">
          EXPLORE MY WORLD
        </a>
        <p className="hero-note">
          FRONTEND BEGINNER · BACKEND BEGINNER · FUTURE APP BUILDER
        </p>
      </div>

      <div className="hero-art">
        <button
          className="profile-photo-button"
          type="button"
          aria-label="Learn more about Paul Lawrence Mendoza"
          aria-haspopup="dialog"
          onClick={() => setIsProfileOpen(true)}
        >
          <img
            className="hero-profile-photo"
            src="/profile.png"
            alt="Portrait of Paul Lawrence Mendoza"
          />
        </button>
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>
        <span className="art-label">⇧⇧CLICK TO KNOW MORE⇧⇧</span>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="section" id="about">
      <p className="eyebrow">01 / ABOUT ME</p>
      <h2>Learning as I go <span>.</span><SpiderMark /></h2>
      <p className="section-description">
        I'm a beginner learning frontend and exploring backend development.
        Coding can be challenging, but I keep working through it and learning
        along the way. I'm also building my problem-solving skills, with the
        goal of creating an app that meets a real need.
      </p>
      <ul className="skill-list" aria-label="Current learning focus">
        <li>Frontend development</li>
        <li>Backend development</li>
        <li>Problem-solving</li>
      </ul>
    </section>
  );
}

// Keep project content separate from its shared card layout.
const projects = [
  {
    type: "project-blue",
    number: "TEAM PROJECT",
    art: "</>",
    title: "Rice Supplier Management System (RSMS Team Project)",
    description: "A supply chain management system built with fellow classmates, featuring point of sale, inventory management, and order tracking.",
    contribution:
      "As Project Manager, I coordinated tasks and deadlines, tracked team work, gathered requirements, organized Google Meet meetings, and reviewed the system. I also contributed to coding and design. Our team used MySQL for relational data and Google Docs to combine shared work, scripts, and documentation.",
    features: ["Point of sale", "Inventory management", "Order tracking"],
    resources: [
      { label: "Repository", href: "https://github.com/Lawrzlars/Rice-Supplier-Management-System-team-project/tree/main" },
      { label: "Project presentation", href: "https://canva.link/tx3n1mhuwidv3fc" },
    ],
  },
  {
    type: "project-red",
    number: "PORTFOLIO",
    art: "✳",
    title: "BSCS 1-4 Portfolio",
    description:
      "A collection of selected activities and projects from my first year in BSCS 1-4. It offers a snapshot of what I studied and practiced that year, and records my progress as a computer science student.",
    href: "https://bscs-1-4-portfolio.vercel.app/",
  },
];

const tesdaCertificateFiles = [
  "Certificate_of_Completion_DACEPP_LL.pdf",
  "Certificate_of_Completion_EBE_LL.pdf",
  "Certificate_of_Completion_EMI_EL.pdf",
  "Certificate_of_Completion_ESDW_EL.pdf",
  "Certificate_of_Completion_ESTEM_LL.pdf",
  "Certificate_of_Completion_ETP_LL.pdf",
  "Certificate_of_Completion_MDL_DL.pdf",
  "Certificate_of_Completion_OOTESWS_EL.pdf",
  "Certificate_of_Completion_PDPW_DL.pdf",
  "Certificate_of_Completion_PSWMW_EL.pdf",
  "Certificate_of_Completion_PWC_C.pdf",
  "Certificate_of_Completion_RRWC_C.pdf",
  "Certificate_of_Completion_UETELC_LL.pdf",
  "Certificate_of_Completion_W101DTP_DL.pdf",
  "Certificate_of_Completion_WGAD.pdf",
];

export function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <p className="eyebrow">02 / PROJECTS &amp; CERTIFICATES</p>
      <h2>Projects<span>.</span><SpiderMark /></h2>
      <div className="projects-grid">
        {projects.map(
          ({ type, number, art, title, description, contribution, features, resources, href }) => (
            <article className={`project-card ${type}`} key={number}>
              <p className="project-number">{number}</p>
              <div className="project-art">{art}</div>
              <h3>
                {title}
                <SpiderMark />
              </h3>
              <p>{description}</p>
              {contribution && (
                <p className="project-contribution">
                  <strong>My contribution</strong>
                  <span>{contribution}</span>
                </p>
              )}
              {features && (
                <ul className="project-features" aria-label={`${title} features`}>
                  {features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              )}
              {resources && (
                <div
                  className="project-resources"
                  aria-label={`${title} resources`}
                >
                  {resources.map(({ label, href: resourceHref }) => (
                    <a
                      className="project-resource-link"
                      href={resourceHref}
                      key={label}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {label} ↗
                    </a>
                  ))}
                </div>
              )}
              {href && (
                <a
                  className="certificate-link"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit portfolio ↗
                </a>
              )}
            </article>
          )
        )}
      </div>

      <h3 className="certificates-heading">Certificates<SpiderMark /></h3>
      <div className="certificate-grid">
        <article className="project-card">
          <p className="project-number">Technical Education and Skills Development Authority</p>
          <h3>TESDA Certificates<SpiderMark /></h3>
          <p>View any of my certificates of completion:</p>
          <ul className="certificate-list">
            {tesdaCertificateFiles.map((filename) => {
              const code = filename
                .replace("Certificate_of_Completion_", "")
                .replace(".pdf", "")
                .replaceAll("_", " ");

              return (
                <li key={filename}>
                  <a
                    className="certificate-link"
                    href={`/Tesda%20Certs/${encodeURIComponent(filename)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {code} ↗
                  </a>
                </li>
              );
            })}
          </ul>
        </article>
        <article className="project-card">
          <p className="project-number">Cisco Networking Academy</p>
          <h3>Cisco Certificates<SpiderMark /></h3>
          <p>View my Cisco certificate:</p>
          <ul className="certificate-list">
            <li>
              <a
                className="certificate-link"
                href={`/Cisco%20Certs/${encodeURIComponent("Cisco_Packet_Tracer.pdf")}`}
                target="_blank"
                rel="noreferrer"
              >
                Cisco Packet Tracer ↗
              </a>
            </li>
            <li>
              <a
                className="certificate-link"
                href={`/Cisco%20Certs/${encodeURIComponent("html essentials.pdf")}`}
                target="_blank"
                rel="noreferrer"
              >
                HTML Essentials ↗
              </a>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export function ContactSection() {
  const [copyStatus, setCopyStatus] = useState("Click to copy");
  const email = "lawrzlars@gmail.com";

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
        setCopyStatus("Copied!");
        return;
      }
    } catch {
      // Fall back when clipboard access is unavailable or denied.
    }

    // This fallback supports browsers that do not expose the Clipboard API.
    const textArea = document.createElement("textarea");
    textArea.value = email;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);

    try {
      textArea.select();
      const copied = document.execCommand("copy");
      setCopyStatus(copied ? "Copied!" : "Copy failed. Select the email to copy.");
    } catch {
      setCopyStatus("Copy failed. Select the email to copy.");
    } finally {
      textArea.remove();
    }
  };

  return (
    <section className="contact" id="contact">
      <p className="eyebrow">03 / CONTACT</p>
      <h2>Have an idea for an app that could help?<SpiderMark /></h2>
      <p>Thanks for visiting. I'm learning and building toward making useful things.</p>
      <div className="contact-details" aria-label="Contact details">
        <button
          className="contact-detail contact-detail-link contact-detail-copy"
          type="button"
          onClick={copyEmail}
          aria-label={`Copy email address ${email}`}
        >
          <span className="contact-detail-label">Email</span>
          <span className="contact-detail-placeholder">{email}</span>
          <span className="contact-copy-status" aria-live="polite">
            {copyStatus}
          </span>
        </button>
        <a
          className="contact-detail contact-detail-link"
          href="https://github.com/Lawrzlars"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit GitHub profile"
        >
          <span className="contact-detail-label">GitHub</span>
          <span className="contact-detail-placeholder">
            Lawrzlars<span className="contact-detail-arrow">↗</span>
          </span>
        </a>
        <a
          className="contact-detail contact-detail-link"
          href="https://www.instagram.com/p_a_u_l__19/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Instagram profile"
        >
          <span className="contact-detail-label">Instagram</span>
          <span className="contact-detail-placeholder">
            p_a_u_l__19<span className="contact-detail-arrow">↗</span>
          </span>
        </a>
      </div>
    </section>
  );
}

export function ProfileDialog({
  dialogRef,
  isCelebrating,
  setIsCelebrating,
  setIsProfileOpen,
}) {
  return (
    <dialog
      ref={dialogRef}
      className="profile-dialog"
      aria-labelledby="profile-dialog-title"
      onClose={() => {
        setIsProfileOpen(false);
        setIsCelebrating(false);
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          setIsProfileOpen(false);
        }
      }}
    >
      <div className="greeting-spiders" aria-hidden="true">
        {["top-right", "bottom-left", "bottom-right"].map((position) => (
          <svg
            className={`greeting-spider greeting-spider-${position}`}
            key={position}
            viewBox="0 0 64 64"
          >
            <path d="M25 25 14 17 7 20M39 25l11-8 7 3M23 32 12 30 6 36M41 32l11-2 6 6M25 39l-9 9-7-2M39 39l9 9 7-2" />
            <circle cx="32" cy="34" r="10" />
            <circle cx="32" cy="20" r="6" />
            <circle className="greeting-spider-eye" cx="30" cy="19" r="1" />
            <circle className="greeting-spider-eye" cx="34" cy="19" r="1" />
          </svg>
        ))}
      </div>

      {isCelebrating && (
        <span className="party-message" aria-hidden="true">
          Great to meet you!
        </span>
      )}

      <button
        className="profile-dialog-close"
        type="button"
        aria-label="Close profile details"
        onClick={() => {
          setIsCelebrating(false);
          setIsProfileOpen(false);
        }}
      >
        &times;
      </button>

      <img
        className="profile-dialog-photo"
        src="/profile.png"
        alt="Paul Lawrence Mendoza"
      />
      <div className="profile-dialog-copy">
        <p className="eyebrow">A LITTLE MORE ABOUT ME</p>
        <h2 id="profile-dialog-title">Hi, I'm Paul Lawrence Mendoza.<SpiderMark /></h2>
        <p>
          I'm a 3rd year computer science student learning frontend and backend
          development. I enjoy working through challenging problems, and
          I'm building my skills so I can create apps that solve real
          problems for people.
        </p>
        <button
          className="primary-btn"
          type="button"
          onClick={() => setIsCelebrating(true)}
          disabled={isCelebrating}
        >
          {isCelebrating ? "THANKS FOR VISITING" : "NICE TO MEET YOU"}
        </button>
      </div>
    </dialog>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <a className="logo" href="#home">
        PLM<span>.</span><b>SPACE</b>
      </a>
      <p>Paul Lawrence Mendoza · 2026</p>
      <a href="#home">BACK TO TOP ↑</a>
    </footer>
  );
}
