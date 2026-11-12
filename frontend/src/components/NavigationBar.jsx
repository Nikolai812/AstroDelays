import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/methods/mccf", label: "MCCF" },
  { to: "/methods/pyccf", label: "PYCCF" },
  { to: "/methods/javelin", label: "JAVELIN" },
  { to: "/methods/zdcf", label: "ZDCF" },
];

export default function NavigationBar() {
  return (
    <nav className="navigation" aria-label="Main navigation">
      <div className="navigation-inner">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
