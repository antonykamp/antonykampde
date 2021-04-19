import style from "./skillbar.module.scss";

interface SkillProps {
  skillName: string;
  skillLevel: number;
}
export default function Skill({ skillName, skillLevel }: SkillProps) {
  const levelWidth = (skillLevel * 21) / 100;
  return (
    <div className={style.skillbar}>
      <i className={style.skillName}>{skillName}</i>
      <progress value={skillLevel} max={100} className={style.progress} />
    </div>
  );
}
