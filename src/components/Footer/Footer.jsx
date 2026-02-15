import React, { useState, useEffect } from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      {/* Palm Leaf Watermarks */}
      {/* <div className="footer-watermark palm-leaf top-left"></div> */}
      <div className="footer-watermark palm-leaf top-right"></div>
      <div className="footer-watermark palm-leaf bottom-left"></div>
      {/* <div className="footer-watermark palm-leaf bottom-right"></div> */}

      <div className="container footer-container">

        {/* Brand Column */}
        <div className="footer-col brand-col">
          <div className="footer-brand">
            <h2 className="footer-logo">ROYAL Ritz</h2>
            <span className="footer-location">HUBBALLI</span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col links-col">
          <h4 className="footer-heading">Quick Links</h4>
          <div className="footer-links-grid">
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">Royal Ritz Hubballi</Link></li>
              <li><Link to="/rooms">Rooms</Link></li>
              <li><Link to="/restaurant">Dining</Link></li>
              <li><Link to="/spa">Wellness</Link></li>
              <li><Link to="#">Experiences</Link></li>
            </ul>
            <ul className="footer-links">
              <li><Link to="/banquet">Events</Link></li>
              <li><Link to="#">Gallery</Link></li>
              <li><Link to="#">Location</Link></li>
              <li><Link to="#">Fact Sheet</Link></li>
              <li><Link to="#">Find Your Reservations</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Us Column */}
        <div className="footer-col contact-col">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="footer-contact-info">
            <li>
              <FaEnvelope className="contact-icon" />
              <a href="mailto:reservations@royalritishbl.com">reservations@royalritishbl.com</a>
            </li>
            <li>
              <FaPhoneAlt className="contact-icon" />
              <a href="tel:+916364467071">+91 63644 67071 | Hotel</a>
            </li>
            <li>
              <FaPhoneAlt className="contact-icon" />
              <a href="tel:+916364467071">+91 63644 67071 | Central Reservations</a>
            </li>
          </ul>
        </div>

        {/* Social presence Column */}
        <div className="footer-col social-col">
          <h4 className="footer-heading">Our Online Presence</h4>
          <div className="social-presence-icons">
            <a href="#" className="presence-social-icon"><FaWhatsapp /></a>
            <a href="#" className="presence-social-icon"><FaFacebookF /></a>
            <a href="#" className="presence-social-icon"><FaGoogle /></a>
            <a href="#" className="presence-social-icon"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/royalritishubli/" target="_blank" rel="noreferrer" className="presence-social-icon"><FaInstagram /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container bottom-container">
          <div className="bottom-links">
            <Link to="#">Sitemap</Link>
            <span className="bottom-separator">|</span>
            <p className="designer-credit">Designed by Stream Entertainment</p>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          <span className="scroll-arrow">↑</span>
        </button>
      )}
    </footer>
  );
};

export default Footer;


