import React, { useMemo } from "react";
import { MailOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Tooltip, notification } from "antd";
import { Button } from "antd";
import type { NotificationArgsProps } from "antd";

type NotificationPlacement = NotificationArgsProps["placement"];
const Context = React.createContext({ name: "Default" });

const Contact = () => {
  const myEmail = "thomascionek97@gmail.com";
  const myWhats = "https://wa.me/5541988409682";
  const myNumber = " +55 (41) 98840-9682";
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.success({
      message: "Copied!",
      description: "My email address has been copied to the clipboard.",
      placement,
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        openNotification("topRight");
      })
      .catch((error) => {
        console.error("Error in copying text: ", error);
      });
  };

  const contextValue = useMemo(() => ({ name: "Ant Design" }), []);

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <Tooltip placement="right" title={"Click to Copy"}>
            <div className="contact-info-container">
              <Button type="text" onClick={() => copyToClipboard(myEmail)}>
                <MailOutlined />
                {myEmail}
              </Button>
            </div>
          </Tooltip>
          <Tooltip placement="right" title={"Click to chat on WhatsApp web"}>
            <div className="contact-info-container">
              <Button type="text" onClick={() => copyToClipboard(myEmail)}>
                <WhatsAppOutlined />
                <a href={myWhats} target="_blank">
                  {myNumber}
                </a>
              </Button>
            </div>
          </Tooltip>
        </div>

        <Tooltip placement="bottom" title={"Scan to chat with me!"}>
          <div>
            <img
              className="qr-code"
              src="src/assets/qr_black_white_rounded.png"
              alt=""
            />
          </div>
        </Tooltip>
      </section>
    </Context.Provider>
  );
};

export default Contact;
