import universityLogo from "../assets/logos/univlogo-header_astronomy.svg";

export default function Header() {
  return <header className="site-header">
    <div className="header-inner">
      <a className="university-brand" href="https://www.haifa.ac.il/" target="_blank" rel="noreferrer">
        <img src={universityLogo} alt="University of Haifa" />
      </a>
      <div className="site-title">
        <h1>Astro Delays</h1>
        <p>Reverberation Mapping Software Suite</p>
      </div>
    </div>
  </header>;
}
