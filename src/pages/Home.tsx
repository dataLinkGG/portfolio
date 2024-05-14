import React from "react";
import ProfileSection from "./Sections/Profile";
import AboutSection from "./Sections/About";
import ExperienceSection from "./Sections/Experience";
import ContactSection from "./Sections/Contact";

const Home: React.FC = () => {
  return (
    <>
      <ProfileSection />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
};

export default Home;
