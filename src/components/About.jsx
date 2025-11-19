import React from "react";
import heroImg from "../assets/images/canva2.png";
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
              A software engineer, the modern-day architect of digital realms, 
              navigates the ethereal landscapes of code, sculpting intangible 
              structures that shape our technological world. With fingers poised over 
              keyboards like virtuoso pianists, they compose symphonies of logic, 
              their minds a labyrinth of algorithms and solutions.
            </p>
            <p>
              Their canvas is a screen, a vast expanse where lines of code dance in 
              intricate patterns, weaving the fabric of programs and applications. Each 
              keystroke is a brushstroke, crafting intricate architectures and breathing 
              life into innovative designs.
            </p>
            <p>
              In this digital atelier, they don the mantle of problem solvers, confronting 
              bugs and glitches like valiant knights in an ever-evolving quest for perfection. 
              Debugging becomes a noble pursuit, unraveling the mysteries hidden within the 
              tangled webs of code designs in this digital atelier.
            </p>
            
            <a href="/Kushan-Jayathunga-CV.pdf" className="btn btn-accent" download>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
