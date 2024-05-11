import styles from "./Skill.module.css"; // Use lowercase 'styles' for consistency

type SkillProps = {
  name: string;
  expertise: "Basic" | "Intermediate" | "Experienced";
  icon?: string;
};

const Skill: React.FC<SkillProps> = ({ name, expertise, icon }) => {
  return (
    <article className={styles.article}>
      <img
        src={icon || "src/assets/checkmark.png"}
        alt={`Experience in ${name}`}
        className={styles.icon}
      />
      <div>
        <h3>{name}</h3>
        <p>{expertise}</p>
      </div>
    </article>
  );
};

export default Skill;