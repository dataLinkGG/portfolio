import { Button, Tooltip } from "antd";

const Contact = () => {
  const myNumber = " +55 (41) 98840-9682";
  const linkToWhatsAppChat = "https://wa.me/5541988409682";

  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div>
        <img
          className="qr-code"
          src="src/assets/qr_black_white_rounded.png"
          alt=""
        />
      </div>
      <Tooltip placement="right" title={"Chat with me!"}>
        <Button type="text">
          <a href={linkToWhatsAppChat} target="_blank">
            {myNumber}
          </a>
        </Button>
      </Tooltip>
    </section>
  );
};

export default Contact;
