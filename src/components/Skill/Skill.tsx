import { Badge, Card } from "antd";
import styles from "./Skill.module.css";
import Meta from "antd/es/card/Meta";

type ExpertiseLevel = 1 | 2 | 3 | 4 | 5;

type ExpertiseMap = {
  [key in ExpertiseLevel]: string;
};

const expertiseMap: ExpertiseMap = {
  1: "Beginner",
  2: "Intermediate",
  3: "Proficient",
  4: "Advanced",
  5: "Expert",
};

type SkillProps = {
  name: string;
  expertise: number;
  icon?: string;
};

const Skill: React.FC<SkillProps> = ({ name, expertise, icon }) => {
  const expertiseText = expertiseMap[expertise as ExpertiseLevel] ?? "Unknown";

  return (
    <article>
      <img
        src={icon || "src/assets/checkmark.png"}
        alt={`Experience in ${name}`}
        className={styles.icon}
      />
      <div>
        <h1>{name}</h1>
        <p className={styles[`skill${expertise}`]}>{expertiseText}</p>
      </div>
    </article>
  );
};

export default Skill;
