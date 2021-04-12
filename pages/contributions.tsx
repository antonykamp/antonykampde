import Layout from "../components/Layout";
import { Project, ProjectBox } from "../components/ProjectBox";
import path from "path";
import { getAllProjectData } from "../lib/GetProjectData";
import { InferGetStaticPropsType } from "next";
import listUtilStyle from "../styles/projectListUtils.module.css";
import utilStyle from "../styles/utils.module.css";
import Head from "next/head";

export default function Contributions({
  contributionProjects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const COLUMN_NUM = 3;
  let columns: Project[][] = [];

  for (let col = 0; col < COLUMN_NUM; col++) {
    columns.push(
      contributionProjects.filter((project) => {
        return contributionProjects.indexOf(project) % COLUMN_NUM == col;
      })
    );
  }

  return (
    <>
      <Head>
        <title>Antony Kamp | Contributions</title>
        <meta name="description" content="Things I have contributed to." />
      </Head>
      <Layout>
        <div className={utilStyle.container}>
          <h1 className={utilStyle.heading}>Contributions</h1>
          <p className={utilStyle.pageDescription}>
            Things I have contributed to.
            <br />
            Most of the projects are exciting scientific projects I've found
            during private ones. As you can see, I'm often working on the
            unittests and documentation of python module. <br />
            Don't be shy and take a look. They don't bite 😉
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

export async function getStaticProps() {
  const contributionDirectory = path.join(
    process.cwd(),
    "public/contributions/"
  );
  const contributionProjects = getAllProjectData(contributionDirectory);
  return {
    props: { contributionProjects },
  };
}
