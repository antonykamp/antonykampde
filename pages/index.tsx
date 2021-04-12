import Layout from "../components/Layout";
import { ProjectBoxHome, Project } from "../components/ProjectBox";
import Skill from "../components/Skillbar";
import { BioBox, BioItem } from "../components/BioBox";
import { getProjectData } from "../lib/GetProjectData";
import _symfit from "../public/contributions/symfit.json";
import _activity from "../public/projects/activity.json";
import path from "path";
import { getBioData } from "../lib/GetBioData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AwardBox, AwardItem } from "../components/AwardBox";
import { getAwardData } from "../lib/GetAwardData";
import style from "./index.module.css";
import utilStyle from "../styles/utils.module.css";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

import Head from "next/head";
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
    <>
      <Head>
        <title>Antony Kamp | Resume</title>
        <meta
          name="description"
          content="Hi! I'm Antony 👋 I work on various exciting
          scientific software projects and study IT-Systems Engineering B.Sc. at the HPI, Potsdam."
        />
      </Head>
      <Layout>
        <div className={utilStyle.container}>
          <h2 className={utilStyle.heading}>Hi! I'm Antony 👋</h2>
          <p className={utilStyle.pageDescription}>
            I'm currently studying IT-Systems Engineering B.Sc. at the Hasso
            Plattner Insitute, University Potsdam. I also work on various
            exciting scientific software projects like symfit, sfepy, and
            GPflow. Producing short films and advertisements and doing
            gymnastics with friends are also some of my preferences.
          </p>
        </div>

        <div className={utilStyle.container}>
          <h2 className={utilStyle.subHeading}>Skills</h2>
          <div className={style.skillBars}>
            <Skill skillName="Motivation" skillLevel={100} />
            <Skill skillName="Learning Speed" skillLevel={90} />
            <Skill skillName="Technical Writing" skillLevel={50} />
            <Skill skillName="Python" skillLevel={65} />
            <Skill skillName="C++" skillLevel={70} />
            <Skill skillName="WebDev" skillLevel={50} />
          </div>
        </div>

        <div className={utilStyle.container}>
          <div className={style.projectAndContribution}>
            <ProjectBoxHome {...contribution} />
            <ProjectBoxHome {...project} />
          </div>
        </div>
        <div className={utilStyle.container}>
          <h2 className={utilStyle.subHeading}>Education {" & "} Work</h2>
          {bio.map((bioItem) => {
            return (
              <div
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

        <div className={utilStyle.container}>
          <h2 className={utilStyle.subHeading}>Awards</h2>
          {awards.map((awardItem) => {
            return (
              <div
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
      </Layout>
    </>
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
