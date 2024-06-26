import React, { useMemo } from "react";
import type { DrawerProps } from "antd";
import { Button, Drawer, Space, Tooltip, notification } from "antd";
import { MailOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { NotificationPlacement } from "antd/es/notification/interface";

const Context = React.createContext({ name: "Default" });

const ContactInfo: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState<DrawerProps["loading"]>(true);
  const timerRef = React.useRef<ReturnType<typeof setTimeout>>();
  const myEmail = "thomascionek97@gmail.com";
  const linkToWhatsAppChat = "https://wa.me/5541988409682";
  const myNumber = " +55 (41) 98840-9682";

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  const showDrawer = () => {
    setOpen(true);
    setLoading(true);
    timerRef.current = setTimeout(() => {
      setLoading(false);
    }, 200);
  };

  React.useEffect(() => clearTimer, []);

  const onClose = () => {
    setOpen(false);
  };


  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        openNotification("topLeft");
      })
      .catch((error) => {
        console.error("Error in copying text: ", error);
      });
  };

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.success({
      message: "Copied!",
      description: "The email address has been copied to the clipboard.",
      placement,
    });
  };

  const contextValue = useMemo(() => ({ name: "Ant Design" }), []);

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <Button type="primary" shape="round" size={"large"} onClick={showDrawer}>
        Contact info
      </Button>
      <Drawer
        destroyOnClose
        title="Contact Information"
        placement="right"
        open={open}
        width={500}
        loading={loading}
        onClose={onClose}
        extra={
          <Space>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <div className="contact-info-upper-container">
          <Tooltip placement="right" title={"Click to copy"}>
            <div className="contact-info-container">
              <Button type="text" onClick={() => copyToClipboard(myEmail)}>
                <MailOutlined />
                {myEmail}
              </Button>
            </div>
          </Tooltip>
          <Tooltip placement="right" title={"Click to copy"}>
            <div className="contact-info-container">
              <Button type="text" onClick={() => copyToClipboard(myEmail)}>
                <WhatsAppOutlined />
                <a href={linkToWhatsAppChat} target="_blank">
                  {myNumber}
                </a>
              </Button>
            </div>
          </Tooltip>
        </div>
      </Drawer>
    </Context.Provider>
  );
};

export default ContactInfo;
