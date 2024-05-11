import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";

const Profile: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1400);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1400);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      <Nav />
      <div id="profile">
        {isMobile ? undefined : (
          <div className="section__pic-container">
            <img
              src="./assets/profile-pic.png"
              alt="John Doe profile picture"
            />
          </div>
        )}
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">John Doe</h1>
          <p className="section__text__p2">Frontend Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => window.open("./assets/resume-example.pdf")} // Inline function
            >
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => (location.href = "./#contact")} // Inline function
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src="./assets/linkedin.png"
              alt="My LinkedIn profile"
              className="icon"
              onClick={() => (location.href = "https://linkedin.com/")} // Inline function
            />
            <img
              src="./assets/github.png"
              alt="My Github profile"
              className="icon"
              onClick={() => (location.href = "https://github.com/")} // Inline function
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
