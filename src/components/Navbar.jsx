import React, { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-text">Kushan Jayathunga</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About me</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact me</a>
        </nav>

        <a href="#contact" className="btn btn-accent nav-cta">
          Hire Me
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <nav className="mobile-nav-links">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About me</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact me</a>
        </nav>
        <a href="#contact" className="btn btn-accent mobile-cta" onClick={closeMenu}>
          Hire Me
        </a>
      </div>

      {/* Overlay */}
      {isOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Navbar;
