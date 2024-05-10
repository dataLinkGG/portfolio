import React from "react";
import Profile from "./Sections/Profile";
import About from "./Sections/About";
import Experience from "./Sections/Experience";

const Home: React.FC = () => {
  return (
    <>
      <Profile />
      <About />
      <Experience />
    </>
  );
};

export default Home;
