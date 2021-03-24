import style from "./skill.module.css"

interface SkillProps {
    skillName: string,
    skillLevel: number
}
export default function Skill({ skillName, skillLevel }: SkillProps){
    const levelWidth = skillLevel*18/100
    return (
        <div className={style.mainDiv}>
            <i className={style.skillName}>{skillName}</i>
            <div className={style.outerBox}>
                <div className={style.innerBox} style={{width: `${levelWidth}rem`}}/>
            </div>
        </div>
    )
}
