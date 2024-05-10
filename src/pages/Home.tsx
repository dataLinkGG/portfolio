import React from "react";
import Profile from "./Sections/Profile";
import About from "./Sections/About";
import Experience from "./Sections/Experience";
import Contact from "./Sections/Contact";

const Home: React.FC = () => {
  return (
    <>
      <Profile />
      <About />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;
