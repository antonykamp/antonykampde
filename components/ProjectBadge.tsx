import style from "./projectBadge.module.css";

export type ProjectBadge = keyof typeof ProjectBadges;
const ProjectBadges = {
  python: {
    backgroundColor: "#bee3f8",
    fontColor: "#2a4365",
  },
  blitz: {
    backgroundColor: "#FEFCBF",
    fontColor: "#744210",
  },
  science: {
    backgroundColor: "#FEFCBF",
    fontColor: "#234E52",
  },
  cpp: {
    backgroundColor: "#FED7E2",
    fontColor: "#702459",
  },
  nextjs: {
    backgroundColor: "#C6F6D5",
    fontColor: "#22543D",
  },
  typescript: {
    backgroundColor: "#C4F1F9",
    fontColor: "#086F83",
  },
};

export function ProjectBadge({ badge }: { badge: keyof typeof ProjectBadges }) {
  return (
    <div
      className={style.badgeObject}
      style={{
        backgroundColor: ProjectBadges[badge].backgroundColor,
        border: ProjectBadges[badge].fontColor,
      }}
    >
      <span
        className={style.badgeTitle}
        style={{ color: ProjectBadges[badge].fontColor }}
      >
        {badge}
      </span>
    </div>
  );
}
