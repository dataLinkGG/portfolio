import { Tooltip } from "antd";
import ContactInfo from "../../components/ContactInfo/ContactInfo";

const Contact = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>

      <Tooltip placement="right" title={"Chat with me!"}>
        <div>
          <img
            className="qr-code"
            src="src/assets/qr_black_white_rounded.png"
            alt=""
          />
        </div>
      </Tooltip>
      <ContactInfo />
    </section>
  );
};

export default Contact;
