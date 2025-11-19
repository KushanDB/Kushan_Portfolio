import React from "react";
import heroImg from "../assets/images/canva.png";

const Contact = () => {

const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "736b08a7-8250-478c-bf54-ae24d32c3c29");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(data.message);
      setResult("");
    }
  };

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
              <form onSubmit={onSubmit}  className="contact-form">
                <div className="form-row">
                  <input type="text" name="name" placeholder="Your Name" required />
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <input type="text" name="subject" placeholder="Subject" required />
                <textarea name="message" rows="6" placeholder="Your Message" required />
                <button type="submit" className="btn btn-accent">
                  {result ? result : "Send Message"}
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
