import { ProjectBoxHome, Project } from "../components/ProjectBox";
import Skill from "../components/Skillbar";
import { BioBox, BioItem } from "../components/BioBox";
import { getProjectData } from "../lib/GetProjectData";
import _symfit from "../public/contributions/symfit.json";
import path from "path";
import { getBioData } from "../lib/GetBioData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AwardBox, AwardItem } from "../components/AwardBox";
import { getAwardData } from "../lib/GetAwardData";
import style from "./index.module.scss";
import utilStyle from "../styles/utils.module.scss";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { InferGetStaticPropsType } from "next";

export default function Home({
  project,
  contribution,
  bio,
  awards,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
      <main>
        <div className={utilStyle.container}>
          <h1>Hi! I'm Antony 👋</h1>
          <p className={utilStyle.pageDescription}>
            I'm currently studying IT-Systems Engineering M.Sc. at the Hasso
            Plattner Insitute, University Potsdam. I am currently employed by
            the non-profit company krisenchat gGmbH, which provides simple
            psychological counselling for young adults. Working on exciting
            scientific software projects like GraalVM, symfit, GPflow, producing
            short films and advertisements and doing gymnastics are also some of
            my preferences.
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
    </>
  );
}

export async function getStaticProps(context) {
  const contributionFile = path.join(
    process.cwd(),
    "public/contributions/graalpy.json"
  );
  const contribution = getProjectData(contributionFile);

  const projectFile = path.join(
    process.cwd(),
    "public/projects/krisenchat.json"
  );
  const project = getProjectData(projectFile);

  const bioFile = path.join(process.cwd(), "public/bio.json");
  const bio = getBioData(bioFile);

  const awardFile = path.join(process.cwd(), "public/awards.json");
  const awards = getAwardData(awardFile);

  return {
    props: { project, contribution, bio, awards },
  };
}
