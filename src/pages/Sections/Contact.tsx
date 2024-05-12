import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src="src/assets/email.png"
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:examplemail@gmail.com">Example@gmail.com</a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <a href="https://www.linkedin.com">LinkedIn</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
