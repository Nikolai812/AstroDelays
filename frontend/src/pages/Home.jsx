import { Link } from "react-router-dom";

const methods = [
  ["MCCF", "Modified cross-correlation function.", "/methods/mccf"],
  ["PYCCF", "Python cross-correlation analysis workflow.", "/methods/pyccf"],
  ["JAVELIN", "JAVELIN reverberation-mapping method.", "/methods/javelin"],
  ["ZDCF", "z-transformed discrete correlation function.", "/methods/zdcf"],
];

export default function Home() {
  return (
    <div className="page home-page">
      <section className="welcome">
        <p className="eyebrow">University of Haifa</p>
        <h2>Reverberation Mapping checkpoint</h2>
        <p>
          A workspace for comparing and testing reverberation-mapping methods,
          including MYCCF and PYCCF.
        </p>
      </section>
      <section className="method-section">
        <div className="section-heading">
          <h2>Available methods</h2>
          <p className="muted">Choose a method to open its workspace.</p>
        </div>
        <div className="method-grid">
          {methods.map(([name, description, path]) => (
            <article className="method-card" key={name}>
              <h3>{name}</h3>
              <p>{description}</p>
              <Link className="text-link" to={path}>
                Open method →
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="info-grid">
        <article className="panel">
          <h3>Documentation</h3>
          <p className="muted">
            Guides, method descriptions, input formats, and interpretation notes
            will be collected here.
          </p>
        </article>
        <article className="panel">
          <h3>Connect with us</h3>
          <p className="muted">
            For questions about the software or scientific collaboration,
            contact the Astro Delays team.
          </p>
          <a className="text-link" href="mailto:">
            Contact the team →
          </a>
        </article>
      </section>
    </div>
  );
}
