import React from "react";
import { FaDownload } from "react-icons/fa";
import heroImg from "../assets/images/canva2.png";
import CV from "../assets/CV.pdf";
import { useScrollAnimation } from "../utils/useScrollAnimation";

const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [imageRef, imageVisible] = useScrollAnimation();
  const [textRef, textVisible] = useScrollAnimation();

  return (
    <section className="section about-section">
      <div className="container">
        <h2 ref={titleRef} className={`section-title ${titleVisible ? 'animate' : ''}`}>About Me</h2>
        <p className={`section-subtitle ${titleVisible ? 'animate' : ''}`}>
          A small introduction about who I am and what I love to build.
        </p>

        <div className="about-grid">
          <div ref={imageRef} className={`about-image-wrapper ${imageVisible ? 'animate' : ''}`}>
            <img src={heroImg} alt="Kushan Jayathunga" className="about-image" />
          </div>
          
          <div ref={textRef} className={`about-text ${textVisible ? 'animate' : ''}`}>
            <p>
              I'm a passionate software engineer who loves building digital solutions that make a difference. 
              With expertise in full-stack development, I transform ideas into elegant, functional applications.
            </p>
            <p>
              My journey in tech is driven by curiosity and problem-solving. I specialize in creating 
              responsive web applications using modern technologies like React, Node.js, and various databases.
            </p>
            <p>
              Whether it's crafting intuitive user interfaces or architecting robust backend systems, 
              I'm committed to writing clean, maintainable code that delivers exceptional user experiences.
            </p>
            
            <a href={CV} className="btn btn-accent" download="Kushan-Jayathunga-CV.pdf">
              <FaDownload /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
