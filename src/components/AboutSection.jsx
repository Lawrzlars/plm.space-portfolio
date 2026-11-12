import { SpiderMark } from "./SpiderMark.jsx";

// About copy and the skills/tools Paul has listed.
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
      <div className="technical-skills">
        <h3>Technical skills and tools</h3>
        <ul className="technical-skill-list">
          <li>
            <strong>Programming languages and markup</strong>
            <span>Python, JavaScript, C#, and HTML</span>
          </li>
          <li>
            <strong>Development tools</strong>
            <span>NetBeans, Eclipse, and Visual Studio Code</span>
          </li>
          <li>
            <strong>Currently learning</strong>
            <span>Node.js</span>
          </li>
          <li>
            <strong>MySQL</strong>
            <span>Used for relational data in the Rice Supplier project</span>
          </li>
          <li>
            <strong>React, CSS, and Vite</strong>
            <span>Technologies used to build this portfolio</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
