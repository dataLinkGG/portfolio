import React from "react";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact: React.FC = () => {
  const myEmail = "thomascionek97@gmail.com";
  const myLinkedin = "https://www.linkedin.com/in/thomas-cionek-123669145/";

  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <FontAwesomeIcon icon={faEnvelope} />
          <p>
            <a href={`mailto:${myEmail}`}>{myEmail}</a>
          </p>
        </div>
        <div className="contact-info-container">
          <FontAwesomeIcon icon={faLinkedinIn} />
          <p>
            <a href={myLinkedin}>LinkedIn</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
