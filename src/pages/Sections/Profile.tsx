import React, { useEffect, useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import IconLink from "../../components/IconLink/IconLink";
import ContactInfo from "../../components/ContactInfo/ContactInfo";

const ProfileSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1400);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1400);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const myName = "Thomas Cionek";
  const jobTitle = "Junior Full Stack Developer";
  const myLinkedin = "https://www.linkedin.com/in/thomas-cionek-123669145/";
  const myGithub = "https://github.com/dataLinkGG";

  return (
    <section>
      <div id="profile">
        {isMobile ? undefined : (
          <div className="section__pic-container">
            <img
              src="src/assets/profile-pic.jpg"
              alt={`${myName} profile picture`}
              className="pic"
            />
          </div>
        )}
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">{myName}</h1>
          <p className="section__text__p2">{jobTitle}</p>
          <div className="btn-container">
            <Button
              type="default"
              shape="round"
              size={"large"}
              icon={<DownloadOutlined />}
              onClick={() => {
                window.open("src/assets/CV_Thomas_Cionek_EN.pdf");
              }}
            >
              Download CV
            </Button>
            <ContactInfo />
          </div>
          <div id="socials-container">
            <IconLink url={myLinkedin} altText="My Github profile">
              <LinkedinOutlined className="largeIcon" />
            </IconLink>
            <IconLink url={myGithub} altText="My Github profile">
              <GithubOutlined className="largeIcon" />
            </IconLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
