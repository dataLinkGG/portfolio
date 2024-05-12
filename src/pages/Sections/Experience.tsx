import React from "react";
import Skill from "../../components/Skill/Skill";

interface Skill {
  name: string;
  expertise: number;
  icon: string;
}

const Experience: React.FC = () => {
  const skills: Skill[] = [
    {
      name: "Python",
      expertise: 3,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      name: "JavaScript",
      expertise: 3,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "PostegreSQL",
      expertise: 2,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Linux",
      expertise: 3,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    },
    {
      name: "Git/Github",
      expertise: 3,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "Flask",
      expertise: 2,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
    },
    {
      name: "React",
      expertise: 3,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Postman",
      expertise: 2,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    },
    {
      name: "Figma",
      expertise: 1,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    },
    {
      name: "Pytest",
      expertise: 2,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytest/pytest-original.svg",
    },
    {
      name: "Jest",
      expertise: 2,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
    },
    {
      name: "Vim",
      expertise: 3,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vim/vim-original.svg",
    },
    {
      name: "VS Code",
      expertise: 2,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    },
    {
      name: "Liquibase",
      expertise: 1,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/liquibase/liquibase-original-wordmark.svg",
    },
  ];

  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Skill Set</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <div className="article-container">
              {skills.map((skill) => (
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
