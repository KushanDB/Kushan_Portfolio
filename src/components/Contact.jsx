import React from "react";
import heroImg from "../assets/images/canva.png";

const Contact = () => {
  return (
    <section className="section contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">
          Let's discuss your next project, collaboration, or idea.
        </p>

        <div className="contact-grid">
          <div className="contact-left">
            <div className="contact-form-wrapper">
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Form submitted (you can connect this to a backend)");
                }}
              >
                <div className="form-row">
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Your Email" required />
                </div>
                <input type="text" placeholder="Subject" required />
                <textarea rows="6" placeholder="Your Message" required />
                <button type="submit" className="btn btn-accent">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-image-wrapper">
              <img
                src={heroImg}
                alt="Contact"
                className="contact-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
