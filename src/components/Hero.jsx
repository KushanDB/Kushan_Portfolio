import React from 'react'
import Typewriter from './Typewriter'
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa'

export default function Hero(){
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <p className="hi">Hi I'm</p>
          <h1 className="name">Kushan Jayathunga</h1>
          <div className="profession">
            <Typewriter words={["Fullstack developer","UI/UX Designer","Artist"]} />
          </div>

          <div className="socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="github"><FaGithub/></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="linkedin"><FaLinkedin/></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="facebook"><FaFacebook/></a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="whatsapp"><FaWhatsapp/></a>
          </div>

          <div className="hero-cta">
            <a className="btn primary" href="#projects">View Projects</a>
            <a className="btn outline" href="/education">Education</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-photo">
            {/* Put a portrait image in src/assets/portrait.jpg */}
            <img src="/assets/portrait.jpg" alt="Kushan Jayathunga" />
          </div>
        </div>
      </div>
    </section>
  )
}
