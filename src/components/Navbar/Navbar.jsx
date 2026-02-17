import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaBed, FaUtensils, FaCompass, FaUsers, FaImages, FaHotel, FaChevronLeft, FaInfoCircle } from "react-icons/fa";
import { GiLotus, GiMeal } from "react-icons/gi";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/rooms", label: "ROOMS", icon: "bed" },
    { path: "/restaurant", label: "DINING", icon: "dining" },
    { path: "/spa", label: "WELLNESS", icon: "lotus" },
    { path: "/banquet", label: "EXPERIENCES", icon: "compass" },
    { path: "/gallery", label: "GALLERY", icon: "gallery" },
    { path: "/about", label: "ABOUT", icon: "info" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll(); // Initialize state on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${mobileMenuOpen ? "mobile-menu-open" : ""} `}>
      <div className="navbar-container">
        {/* Left Section: Logo */}
        <div className="navbar-logo-container">
          <Link to="/" className="navbar-logo">
            <img src="/logo.png" alt="Royal Ritz Logo" className="navbar-logo-img" />
          </Link>
        </div>

        {/* Center Section: Desktop Links */}
        <div className="navbar-links-container">
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Actions & Icons */}
        <div className="navbar-actions">

          <button className="book-btn">BOOK NOW</button>

          <div className="navbar-menu-toggle" onClick={toggleMobileMenu}>
            <div className={`hamburger-icon ${mobileMenuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <div className="close-btn" onClick={() => setMobileMenuOpen(false)}>
            <FaTimes />
          </div>
        </div>
        <ul className="mobile-links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "active-link" : "nav-link"
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="link-label">{link.label}</span>
                {link.icon && (
                  <span className="link-icon">
                    {link.icon === "bed" && <FaBed size={20} />}
                    {link.icon === "dining" && <GiMeal size={20} />}
                    {link.icon === "lotus" && <GiLotus size={20} />}
                    {link.icon === "compass" && <FaCompass size={20} />}
                    {link.icon === "gallery" && <FaImages size={20} />}
                    {link.icon === "info" && <FaInfoCircle size={20} />}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

