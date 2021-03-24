import Layout from "../components/layout";
import { ProjectBoxHome, Project } from "../components/projectBox";
import Skill from "../components/skill";
import { BioBox, BioItem } from "../components/bioBox";
import { getProjectData } from "../lib/getProjectData";
import _symfit from "../public/contributions/symfit.json";
import _activity from "../public/projects/activity.json";
import path from "path";
import { getBioData } from "../lib/getBioData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AwardBox, AwardItem } from "../components/awardBox";
import { getAwardData } from "../lib/getAwardData";
import style from "./index.module.css";
import "./index.module.css";
export default function Home({
  project,
  contribution,
  bio,
  awards,
}: {
  project: Project;
  contribution: Project;
  bio: BioItem[];
  awards: AwardItem[];
}) {
  return (
    <Layout head>
      <div className={style.component}>
        <h2 className={style.subtitles}>Hi! I'm Antony 👋</h2>
        <p className={style.introduction}>
          I'm currently studying IT-Systems Engineering B.Sc. at the Hasso
          Plattner Insitute, University Potsdam. I also work on various exciting
          scientific software projects like symfit, sfepy, and GPflow. Producing
          short films and advertisements and doing gymnastics with friends are
          also some of my preferences.
        </p>
      </div>
      
      <div className={style.component}>
        <h2 className={style.subtitles}>Skills</h2>
        <div className={style.skillBars}>
          <Skill skillName="Motivation" skillLevel={100} />
          <Skill skillName="Learning speed" skillLevel={90} />
          <Skill skillName="Technical Writing" skillLevel={60} />
          <Skill skillName="Python" skillLevel={75} />
          <Skill skillName="C++" skillLevel={80} />
          <Skill skillName="WebDev" skillLevel={50} />
        </div>
      </div>

      <div className={style.component}>
        <div className={style.projectAndContribution}>
          <ProjectBoxHome {...contribution} />
          <ProjectBoxHome {...project} />
        </div>
      </div>
      <div className={style.component}>
        <h2 className={style.subtitles}>Educaiton {" & "} Work</h2>
        {bio.map((bioItem) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingTop: "1rem",
              }}
            >
              <div style={{ marginRight: "2rem" }}>
                <FontAwesomeIcon
                  size="2x"
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <BioBox key={bioItem.startDate} {...bioItem} />
            </div>
          );
        })}
      </div>

      <div className={style.component}>
        <h2 className={style.subtitles}>Awards</h2>
        {awards.map((awardItem) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingTop: "1rem",
              }}
            >
              <div style={{ marginRight: "2rem" }}>
                <FontAwesomeIcon
                  size="2x"
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <AwardBox key={awardItem.title} {...awardItem} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const contributionFile = path.join(
    process.cwd(),
    "public/contributions/symfit.json"
  );
  const contribution = getProjectData(contributionFile);

  const projectFile = path.join(process.cwd(), "public/projects/activity.json");
  const project = getProjectData(projectFile);

  const bioFile = path.join(process.cwd(), "public/bio.json");
  const bio = getBioData(bioFile);

  const awardFile = path.join(process.cwd(), "public/awards.json");
  const awards = getAwardData(awardFile);

  return {
    props: { project, contribution, bio, awards },
  };
}
