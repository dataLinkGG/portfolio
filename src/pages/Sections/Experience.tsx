import React from "react";
import Skill from "../../components/Skill/Skill";

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Programming Languages</h2>
            <div className="article-container">
              <Skill name="Python" expertise="Experienced" />
              <Skill name="JavaScript" expertise="Experienced" />
              <Skill name="PostegreSQL" expertise="Experienced" />
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Frameworks</h2>
            <div className="article-container">
              <Skill name="Linux" expertise="Experienced" />
              <Skill name="Flask" expertise="Experienced" />
              <Skill name="React" expertise="Experienced" />
              <Skill name="Postman" expertise="Experienced" />
              <Skill name="Rest API" expertise="Experienced" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
