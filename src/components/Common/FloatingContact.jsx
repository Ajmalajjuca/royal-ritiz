import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import './FloatingContact.css';

const FloatingContact = () => {
  const phoneNumber = "9606017459";
  const whatsappUrl = `https://wa.me/91${phoneNumber}`;

  return (
    <div className="floating-contact-container">
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp-btn"
        initial={{ opacity: 0, scale: 0, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        title="WhatsApp Us"
        aria-label="WhatsApp Us"
      >
        <div className="pulse-effect"></div>
        <FaWhatsapp size={28} />
      </motion.a>
    </div>
  );
};

export default FloatingContact;
