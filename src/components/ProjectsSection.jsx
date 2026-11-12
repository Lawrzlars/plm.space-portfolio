import { SpiderMark } from "./SpiderMark.jsx";

// Project content is kept separate from the shared card layout.
const projects = [
  {
    type: "project-blue",
    number: "TEAM PROJECT",
    art: "</>",
    title: "Rice Supplier Management System (RSMS Team Project)",
    description:
      "A supply chain management system built with fellow classmates, " +
      "featuring point of sale, inventory management, and order tracking.",
    contribution:
      "As Project Manager, I coordinated tasks and deadlines, tracked team " +
      "work, gathered requirements, organized Google Meet meetings, and " +
      "reviewed the system. I also contributed to coding and design. Our team " +
      "used MySQL for relational data and Google Docs to combine shared work, " +
      "scripts, and documentation.",
    technologies: ["MySQL"],
    features: ["Point of sale", "Inventory management", "Order tracking"],
    resources: [
      {
        label: "Repository",
        href: "https://github.com/Lawrzlars/Rice-Supplier-Management-System-team-project/tree/main",
      },
      {
        label: "Project presentation",
        href: "https://canva.link/tx3n1mhuwidv3fc",
      },
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

// Lists projects, their resources, and downloadable certificate links.
export function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <p className="eyebrow">02 / PROJECTS &amp; CERTIFICATES</p>
      <h2>Projects<span>.</span><SpiderMark /></h2>
      <div className="projects-grid">
        {projects.map(
          ({
            type,
            number,
            art,
            title,
            description,
            contribution,
            technologies,
            features,
            resources,
            href,
          }) => (
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
              {technologies && (
                <ul
                  className="project-technologies"
                  aria-label={`${title} technologies used`}
                >
                  {technologies.map((technology) => (
                    <li key={technology}>
                      <strong>Technology:</strong> {technology}
                    </li>
                  ))}
                </ul>
              )}
              {features && (
                <ul
                  className="project-features"
                  aria-label={`${title} features`}
                >
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
          <p className="project-number">
            Technical Education and Skills Development Authority
          </p>
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
