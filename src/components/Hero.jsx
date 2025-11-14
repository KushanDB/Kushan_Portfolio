import React from 'react';
import Typewriter from './Typewriter';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm Kushan</h1>
            <Typewriter
              texts={[
                'Full Stack Developer',
                'UI/UX Designer',
                'Problem Solver',
                'Creative Thinker'
              ]}
              speed={100}
              deleteSpeed={50}
              delay={2000}
            />
            <p className="hero-description">
              Passionate about creating beautiful and functional web applications.
              Let's build something amazing together!
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/assets/portrait.jpg" alt="Kushan" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
