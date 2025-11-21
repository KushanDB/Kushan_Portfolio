import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Typewriter from "./Typewriter";
import heroImg from "../assets/images/canva.png";
import CV from "../assets/CV.pdf";
import { useScrollAnimation } from "../utils/useScrollAnimation";

const Hero = () => {
  const [leftRef, leftVisible] = useScrollAnimation();
  const [rightRef, rightVisible] = useScrollAnimation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero container">
      <div ref={leftRef} className={`hero-left ${leftVisible || mounted ? 'animate' : ''}`}>
        <p className="hero-greeting">Hi, I am</p>
        <h1 className="hero-name">Kushan Jayathunga</h1>

        <h2 className="hero-role">
          <Typewriter
            words={["Fullstack Developer", "UI/UX Designer", "Problem Solver"]}
          />
        </h2>

        <div className="hero-social">
          <a
            href="https://github.com/KushanDB"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kushan-jayathunga-665969302?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNfhfO%2FOcTQG4IMnlpiOELw%3D%3D"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.facebook.com/bimsara.kushan"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://wa.me/94765746005"
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
            href={CV}
            className="btn btn-outline"
            download="Kushan-Jayathunga-CV.pdf"
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

      <div ref={rightRef} className={`hero-right ${rightVisible || mounted ? 'animate' : ''}`}>
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
