import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBullseye,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { Tooltip } from "antd";

const About: React.FC = () => {
  const jobTitle = "Full Stack Development";

  return (
    <section id="about">
      <div>
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="about-details-container">
            <div className="about-containers">
              <Tooltip
                placement="left"
                title="Worked with Python, JavaScript, TypeScript, and PostgreSQL. Interactively
                      customized React components from Ant Design based on the product models
                      of Figma, working in Scrum methodology, with Code Reviews, product and
                      team retrospectives meetings. Engagingly implemented back-end library
                      functionalities and actively interacted with the database."
              >
                <div className="details-container">
                  <FontAwesomeIcon icon={faBriefcase} />
                  <h3>Experience</h3>
                  <br />
                  <p>
                    {jobTitle}
                    <br />
                    Alude YC W20
                    <br />
                  </p>
                </div>
              </Tooltip>
              <br />
              <Tooltip
                placement="right"
                title={`Solid foundation in Linux, having used various distributions for nearly 10 years, with a keen interest in experimenting with commands, customization, and troubleshooting. Gained international exposure during a 4-year stint in Poland, where he studied Computer Science and interacted with exchange students from around the world.`}
              >
                <div className="details-container">
                  <div>
                    <FontAwesomeIcon icon={faGraduationCap} />
                    <h3>Education</h3>
                    <p>
                      Análise e Desenvolvimento de Sistemas
                      <br /> (August 2022 - August 2024)
                      <br />
                    </p>
                    <br />
                  </div>
                </div>
              </Tooltip>
            </div>
            <div className="details-container">
              <div>
                <FontAwesomeIcon icon={faBullseye} />
                <h3>Goal</h3>
                <p>
                  Seeking new junior-level opportunities as a Front End, Back
                  end or Full Stack developer
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
