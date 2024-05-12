import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";

const About: React.FC = () => {
  const jobTitle = "Full Stack Development";
  const years = 1;

  return (
    <section id="about">
      <div>
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <FontAwesomeIcon icon={faBriefcase} />
                <h3>Experience</h3>
                <p>
                  {years}+ year
                  <br />
                  {jobTitle}
                </p>
              </div>
              <div className="details-container">
                <FontAwesomeIcon icon={faGraduationCap} />
                <h3>Education</h3>
                <p>
                  B.Sc. Bachelors Degree
                  <br />
                  M.Sc. Masters Degree
                </p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Full Stack Developer with +1 year of experience. <br />
                <br />
                Proficient in various operating systems. Solid foundation in
                Linux, having used various distributions for nearly 10 years,
                with a keen interest in experimenting with commands,
                customization, and troubleshooting.
                <br />
                <br />
                Gained international exposure during a 4-year stint in Poland,
                where he studied Computer Science and interacted with exchange
                students from around the world.
                <br />
                <br />
                Seeking new junior-level opportunities as a front end, back end
                or full stack developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
