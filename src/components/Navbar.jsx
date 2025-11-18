import React from "react";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#home" className="brand">
          <span className="brand-text">Kushan Jayathunga</span>
        </a>

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
      </div>
    </header>
  );
};

export default Navbar;
