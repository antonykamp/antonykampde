import style from "./projectBadge.module.css";


export enum ProjectBadges {
    python = "python",
    blitz = "blitz",
    science = "science",
    cpp = "cpp",
    nextjs = "nextjs",
    typescript = "typescript",
  }

export function ProjectBadge({badge}: {badge: ProjectBadges}){
    const backgroundColor = {
        python: "#bee3f8",
        blitz: "#FEFCBF",
        science: "#B2F5EA",
        cpp: "#FED7E2",
        nextjs: "#C6F6D5",
        typescript: "#C4F1F9",
    }
    const fontColor = {
        python: "#2a4365",
        blitz: "#744210",
        science: "#234E52",
        cpp: "#702459",
        nextjs: "#22543D",
        typescript: "#086F83",
    }
    return (
        <div className={style.badgeObject} style={{backgroundColor: backgroundColor[badge], borderColor:fontColor[badge] }}>
            <span className={style.badgeTitle} style={{color: fontColor[badge]}}>{badge}</span>
        </div>
    )
}
