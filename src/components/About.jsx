import React from 'react'
import Skills from './Skills'

export default function About(){
  return (
    <section id="about" className="about container">
      <h2>About Me</h2>
      <div className="about-grid">
        <div className="about-photo">
          <img src="/assets/portrait-2.jpg" alt="Kushan"/>
        </div>
        <div className="about-copy">
          <p>
            I am a passionate Fullstack developer, UI/UX designer and artist. I build web
            experiences focusing on clean code, modern interfaces and thoughtful interactions.
          </p>
          <a className="btn primary" href="/assets/resume.pdf" target="_blank" rel="noreferrer">Download CV</a>
        </div>
      </div>

      <Skills />
    </section>
  )
}
