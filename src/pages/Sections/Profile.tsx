import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";

const Profile: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1400);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1400);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const myName = "Thomas Cionek";
  const jobTitle = "Junior Full Stack Developer";

  return (
    <section>
      <Nav />
      <div id="profile">
        {isMobile ? undefined : (
          <div className="section__pic-container">
            <img
              src="src/assets/profile-pic.png"
              alt={`${myName} profile picture`}
            />
          </div>
        )}
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">{myName}</h1>
          <p className="section__text__p2">{jobTitle}</p>
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
              src="src/assets/linkedin.png"
              alt="My LinkedIn profile"
              className="icon"
              onClick={() => (location.href = "https://linkedin.com/")} // Inline function
            />
            <img
              src="src/assets/github.png"
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
