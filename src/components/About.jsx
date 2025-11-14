import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="/assets/portrait-2.jpg" alt="Kushan - About" />
          </div>
          <div className="about-text">
            <h3>Hello! I'm Kushan</h3>
            <p>
              I'm a passionate Full Stack Developer with a keen eye for design and a love for creating 
              innovative web applications. With expertise in modern web technologies, I transform ideas 
              into elegant, user-friendly solutions.
            </p>
            <p>
              My journey in web development started with a curiosity about how websites work, and has 
              evolved into a career where I get to solve complex problems and build amazing digital 
              experiences every day.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or enjoying a good book on software architecture.
            </p>
            <div className="about-info">
              <div className="info-item">
                <strong>Email:</strong> <span>kushan@example.com</span>
              </div>
              <div className="info-item">
                <strong>Location:</strong> <span>Your City, Country</span>
              </div>
              <div className="info-item">
                <strong>Resume:</strong> <a href="/assets/resume.pdf" download>Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
