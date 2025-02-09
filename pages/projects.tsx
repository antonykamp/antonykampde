import { Project, ProjectBox } from "../components/ProjectBox";
import path from "path";
import { getAllProjectData } from "../lib/GetProjectData";
import utilStyle from "../styles/utils.module.scss";
import listUtilStyle from "../styles/projectListUtils.module.scss";
import Head from "next/head";
import { InferGetStaticPropsType } from "next";

export default function Projects({
  projectProjects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const COLUMN_NUM = 3;
  let columns: Project[][] = [];
  projectProjects = projectProjects.sort(
    (p1, p2) => (p2.prio || 0) - (p1.prio || 0)
  );
  for (let col = 0; col < COLUMN_NUM; col++) {
    columns.push(
      projectProjects.filter((project) => {
        return projectProjects.indexOf(project) % COLUMN_NUM == col;
      })
    );
  }
  return (
    <>
      <Head>
        <title>Antony Kamp | Projects</title>
        <meta name="description" content="Things I have worked on." />
      </Head>
      <main>
        <div className={utilStyle.container}>
          <h1>Projects</h1>
          <p className={utilStyle.pageDescription}>
            Things I have worked on. <br />
            Most of the projects were created with friends, for example, entel
            and activity. But each of them is looking forward to see some new
            contributors 😀
          </p>
        </div>
        <div className={utilStyle.container}>
          <div className={listUtilStyle.projectTable}>
            {columns.map((column, index) => {
              return (
                <div key={index} className={listUtilStyle.projectColumn}>
                  {column.map((contribution) => {
                    return (
                      <div
                        key={contribution.name}
                        className={listUtilStyle.projectItem}
                      >
                        <ProjectBox {...contribution} />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const projectDirectory = path.join(process.cwd(), "public/projects/");
  const projectProjects = getAllProjectData(projectDirectory);
  return {
    props: { projectProjects },
  };
}
