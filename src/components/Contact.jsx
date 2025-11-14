import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="contact container">
      <h2>Contact Me</h2>
      <div className="contact-grid">
        <form className="contact-form" action="#" onSubmit={(e)=> e.preventDefault()}>
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea placeholder="Tell me about your project..." />
          </label>
          <button className="btn primary" type="submit">Send</button>
        </form>

        <div className="contact-aside">
          <img src="/assets/contact-illustration.jpg" alt="Contact illustration" />
          <p>Prefer another channel? Email me at <a href="mailto:kushan.email@example.com">kushan.email@example.com</a></p>
        </div>
      </div>
    </section>
  )
}
