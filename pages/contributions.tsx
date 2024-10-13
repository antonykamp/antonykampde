import { Project, ProjectBox } from "../components/ProjectBox";
import path from "path";
import { getAllProjectData } from "../lib/GetProjectData";
import { InferGetStaticPropsType } from "next";
import listUtilStyle from "../styles/projectListUtils.module.scss";
import utilStyle from "../styles/utils.module.scss";
import Head from "next/head";

export default function Contributions({
  contributionProjects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const COLUMN_NUM = 3;
  let columns: Project[][] = [];
  contributionProjects = contributionProjects.sort(
    (c1, c2) => (c2.prio || 0) - (c1.prio || 0)
  );
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
      <main>
        <div className={utilStyle.container}>
          <h1>Contributions</h1>
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
