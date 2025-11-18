import React from "react";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo/Name */}
          <div className="footer-logo">
            <span className="footer-brand-text">Kushan Jayathunga</span>
          </div>

          {/* Navigation Links */}
          <nav className="footer-nav">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About me</a>
            <a href="#projects">Portfolio</a>
            <a href="#contact">Contact me</a>
          </nav>

          {/* Social Icons */}
          <div className="footer-social">
            <a href="https://github.com/your-username" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://facebook.com/your-profile" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <a href="mailto:jayathungadbk4@gmail.com" className="footer-contact-item">
              <FaEnvelope />
              <span>jayathungadbk4@gmail.com</span>
            </a>
            <a href="tel:+9476 5746005" className="footer-contact-item">
              <FaPhone />
              <span>+94 76 574 6005</span>
            </a>
          </div>

          {/* Divider */}
          <div className="footer-divider"></div>

          {/* Designer Credit */}
          <div className="footer-credit">
            <p> Designed and developed by 2025 © Kushan Jayathunga</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
