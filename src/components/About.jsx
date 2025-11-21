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
              I'm a motivated and passionate Full-Stack Developer and UI/UX Designer with a strong focus on building modern, 
              user-friendly web applications. I specialize in crafting intuitive interfaces and scalable backend solutions, bridging the gap between design and functionality to deliver seamless digital experiences.
            </p>
            <p>
              With a solid foundation in software engineering, web development, and UI/UX design, I thrive on turning ideas into impactful products. 
              My journey in technology has equipped me with the skills to manage projects from concept to deployment while continuously learning and adapting to emerging tools and techniques.
            </p>
            <p>
              Driven by curiosity, creativity, and innovation, I aim to contribute to dynamic teams, collaborate effectively, and create meaningful solutions that make a real difference.
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
