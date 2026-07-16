import { ProjectBoxHome, Project } from "../components/ProjectBox";
import Skill from "../components/Skillbar";
import { BioBox, BioItem } from "../components/BioBox";
import { getProjectData } from "../lib/GetProjectData";
import path from "path";
import { getBioData } from "../lib/GetBioData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AwardBox, AwardItem } from "../components/AwardBox";
import { getAwardData } from "../lib/GetAwardData";
import style from "./page.module.scss";
import utilStyle from "../styles/utils.module.scss";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default async function Home() {
  const contributionFile = path.join(
    process.cwd(),
    "public/projects/masterthesis.json",
  );
  const contribution = getProjectData(contributionFile);

  const projectFile = path.join(
    process.cwd(),
    "public/projects/krisenchat.json",
  );
  const project = getProjectData(projectFile);

  const bioFile = path.join(process.cwd(), "public/bio.json");
  const bio = getBioData(bioFile);

  const awardFile = path.join(process.cwd(), "public/awards.json");
  const awards = getAwardData(awardFile);

  return (
    <main>
      <div className={utilStyle.container}>
        <h1>Hi! I'm Antony 👋</h1>
        <p className={utilStyle.pageDescription}>
          I'm a backend-leaning fullstack engineer and technical project
          manager at krisenchat gGmbH, building the platform that connects
          young people in crisis with professional counsellors. Alongside
          work, I'm finishing my M.Sc. in IT-Systems Engineering at HPI /
          University of Potsdam, with a thesis on AI coding agents for
          GraalVM's Truffle DSL. On the side: scientific open-source, short
          films, and gymnastics.
        </p>
      </div>
      {/**
        <div className={utilStyle.container}>
          <h2>Skills</h2>
          <div className={style.skillBars}>
            <Skill skillName="Motivation" skillLevel={100} />
            <Skill skillName="Learning Speed" skillLevel={90} />
            <Skill skillName="Technical Writing" skillLevel={50} />
            <Skill skillName="Python" skillLevel={75} />
            <Skill skillName="C++" skillLevel={60} />
            <Skill skillName="WebDev" skillLevel={75} />
          </div>
        </div>
 */}
      <div className={utilStyle.container}>
        <div className={style.projectAndContribution}>
          <ProjectBoxHome {...contribution} />
          <ProjectBoxHome {...project} />
        </div>
      </div>
      <div className={utilStyle.smallContainer}>
        <h2>Education {" & "} Work</h2>
        {bio.map((bioItem, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                paddingTop: "1rem",
              }}
            >
              <div className={style.itemIcon}>
                <FontAwesomeIcon
                  size="2x"
                  icon={faChevronRight}
                  color="#153351"
                />
              </div>
              <BioBox key={bioItem.startDate} {...bioItem} />
            </div>
          );
        })}
      </div>

      <div className={utilStyle.smallContainer}>
        <h2>Awards</h2>
        {awards.map((awardItem, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                paddingTop: "1rem",
              }}
            >
              <div className={style.itemIcon}>
                <FontAwesomeIcon
                  size="2x"
                  icon={faChevronRight}
                  color="#153351"
                />
              </div>
              <AwardBox key={awardItem.title} {...awardItem} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
