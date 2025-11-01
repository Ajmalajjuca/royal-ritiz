import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/rooms", label: "Rooms" },
    { path: "/restaurant", label: "Restaurant" },
    { path: "/banquet", label: "Banquet" },
    { path: "/spa", label: "Spa" },
    { path: "/about", label: "About Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${
        hovered ? "hovered" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Row 1 */}
      <div className="navbar-top">
        <div className="navbar-left">
          <span className="navbar-global">GLOBAL</span>
          <span className="divider">|</span>
          <span className="navbar-location">HUBALI</span>
        </div>

        <Link to="/" className="navbar-logo">
          Royal Ritiz
        </Link>

        <div className="navbar-right">
          <button className="book-now-btn">BOOK NOW</button>
        </div>
      </div>

      {/* Row 2 */}
      <div className="navbar-bottom">
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "active-link" : "nav-link"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
