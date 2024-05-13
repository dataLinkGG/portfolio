import React from "react";
import { MailOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

const Contact: React.FC = () => {
  const myEmail = "thomascionek97@gmail.com";
  const myWhats = "https://wa.me/5541988409682";

  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <MailOutlined />
          <p>
            <a href={`mailto:${myEmail}`} target="_blank">
              {myEmail}
            </a>
          </p>
        </div>
        <div className="contact-info-container">
          <WhatsAppOutlined />
          <p>
            <a href={myWhats} target="_blank">
              WhatsApp
            </a>
          </p>
        </div>
      </div>
      <Tooltip placement="bottom" title={"My Linkedin Profile"}>
        <div>
          <img src="src/assets/QR.png" alt="" />
        </div>
      </Tooltip>
    </section>
  );
};

export default Contact;
