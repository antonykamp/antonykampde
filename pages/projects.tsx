import Layout from "../components/Layout";
import { Project, ProjectBox } from "../components/ProjectBox";
import path from "path";
import { getAllProjectData } from "../lib/GetProjectData";
import utilStyle from "../styles/utils.module.css";
import listUtilStyle from "../styles/projectListUtils.module.css";
import Head from "next/head";

export default function Projects({
  projectProjects,
}: {
  projectProjects: Project[];
}) {
  const COLUMN_NUM = 3;
  let columns: Project[][] = [];

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
      <Layout>
        <div className={utilStyle.container}>
          <h1 className={utilStyle.heading}>Projects</h1>
          <p className={utilStyle.pageDescription}>
            Things I have worked on. <br />
            Most of the projects were created with friends, for example,
            activity. But many of them are looking forward to see some new
            contributors 😀
          </p>
        </div>
        <div className={utilStyle.container}>
          <div className={listUtilStyle.projectTable}>
            {columns.map((column) => {
              return (
                <div className={listUtilStyle.projectColumn}>
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
      </Layout>
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
