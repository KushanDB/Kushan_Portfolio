import React from "react";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Typewriter from "./Typewriter";
import heroImg from "../assets/images/canva.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-left">
        <p className="hero-greeting">Hi, I am</p>
        <h1 className="hero-name">Kushan Jayathunga</h1>

        <h2 className="hero-role">
          <Typewriter
            words={["Fullstack Developer", "UI/UX Designer", "Problem Solver"]}
          />
        </h2>

        <div className="hero-social">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://facebook.com/your-profile"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://wa.me/94700000000"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>

        <div className="hero-actions">
          <a href="#contact" className="btn btn-accent">
            Hire Me
          </a>
          <a
            href="/Kushan-Jayathunga-CV.pdf"
            className="btn btn-outline"
            download
          >
            Download CV
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <span className="stat-number">1+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects Done</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">20+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-image-wrapper">
          <div className="hero-image-circle" />
          <img src={heroImg} alt="Kushan Jayathunga" className="hero-image" />
          <div className="line-art-top"></div>
          <div className="line-art-bottom"></div>
          <div className="line-art-left"></div>
          <div className="line-art-right"></div>
          <div className="corner-tl"></div>
          <div className="corner-br"></div>
          <div className="diagonal-1"></div>
          <div className="diagonal-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
