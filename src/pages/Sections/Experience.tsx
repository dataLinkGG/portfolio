import React from "react";
import Skill from "../../components/Skill/Skill";

interface Skill {
  name: string;
  expertise: "Basic" | "Intermediate" | "Experienced";
  icon: string;
}

/*
https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vim/vim-original.svg"
https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"
https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/liquibase/liquibase-original-wordmark.svg"
https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg"
*/

const Experience: React.FC = () => {
  const languages: Skill[] = [
    {
      name: "Python",
      expertise: "Intermediate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      name: "JavaScript",
      expertise: "Intermediate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "PostegreSQL",
      expertise: "Basic",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
  ];

  const techs: Skill[] = [
    {
      name: "Linux",
      expertise: "Experienced",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    },
    {
      name: "Git/Github",
      expertise: "Intermediate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "Flask",
      expertise: "Intermediate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
    },
    {
      name: "React",
      expertise: "Intermediate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Postman",
      expertise: "Intermediate",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    },
    {
      name: "Figma",
      expertise: "Basic",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    },
  ];

  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Programming Languages</h2>
            <div className="article-container">
              {languages.map((skill) => (
                <Skill key={skill.name} {...skill} />
              ))}
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Technologies</h2>
            <div className="article-container">
              {techs.map((skill) => (
                <Skill key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
