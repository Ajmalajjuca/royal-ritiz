import React, { useState, useEffect } from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaPaypal, FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa";

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
      <div className="footer-container">
        <div className="footer-content">
          {/* Column 1: Contact Information */}
          <div className="footer-section contact-info">
            <h3>Address</h3>
            <p>Gram, Industrial Area, 608/2, Amargol, KIADB, Hubballi, Karnataka 580025</p>

            <h3>Phone</h3>
            <p>+91 96060 17457</p>

            <h3>Contact Emails</h3>
            <p><a href="mailto:fnb@royalritz.in">fnb@royalritis.in</a></p>
            <p><a href="mailto:sales@royalritz.in">sales@royalritis.in</a></p>
            <p><a href="mailto:reservation@royalritz.in">reservation@royalritis.in</a></p>

            <h3>Website</h3>
            <p><a href="http://www.royalritz.in" target="_blank" rel="noopener noreferrer">www.royalritis.in</a></p>

            <div className="social-media">
              <a href="#" aria-label="Facebook" className="social-icon facebook"><FaFacebookF /></a>
              <a href="https://www.instagram.com/royalritzofficial/" aria-label="Instagram" className="social-icon instagram"><FaInstagram /></a>
            </div>

            <h3>We Accept</h3>
            <div className="payment-methods">
              <FaPaypal className="payment-icon" title="PayPal" />
              <FaCcMastercard className="payment-icon" title="Mastercard" />
              <FaCcVisa className="payment-icon" title="Visa" />
              <FaCcAmex className="payment-icon" title="American Express" />
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="footer-section useful-links">
            <h3>Useful Links</h3>
            <p><a href="#">Contact Us</a></p>
            <p><a href="#">Terms & Conditions</a></p>
          </div>

          {/* Column 3: Support */}
          <div className="footer-section support-links">
            <h3>Support</h3>
            <p><a href="#">Help Center</a></p>
            <p><a href="#">Safety Information</a></p>
          </div>

          {/* Column 4: Latest News */}
          <div className="footer-section latest-news">
            <h3>Latest News</h3>
            <p><a href="#">Suite Room</a></p>
            <p><a href="#">The Best Hidden Gems Around Our Resort</a></p>
            <p><a href="#">Cocktail Delights: 5 Must Try Recipes</a></p>
            <p><a href="#">Sustainable Travel Practices</a></p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Royal ritis. All rights reserved.</p>
        </div>
      </div>

      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;
