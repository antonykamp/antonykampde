import { Project, ProjectBox } from "../../components/ProjectBox";
import path from "path";
import { getAllProjectData } from "../../lib/GetProjectData";
import listUtilStyle from "../../styles/projectListUtils.module.scss";
import utilStyle from "../../styles/utils.module.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contributions",
  description: "Things I have contributed to.",
};

export default async function Contributions() {
  const contributionDirectory = path.join(
    process.cwd(),
    "public/contributions/"
  );
  let contributionProjects = getAllProjectData(contributionDirectory);

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
  );
}
