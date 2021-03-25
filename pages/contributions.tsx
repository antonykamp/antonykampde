import Layout from "../components/layout";
import { ProjectBox } from "../components/projectBox";
import path from "path";
import { getAllProjectData } from "../lib/getProjectData";
import { InferGetStaticPropsType } from "next";
import style from "./contributions.module.css";

export default function Contributions({
  contributionProjects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div className={style.component}>
        <h1 className={style.title}>Contributions</h1>
        <p className={style.description}>
          Things I have contributed to.
          <br />
          Most of the projects are exciting scientific projects I've found
          during private ones. As you can see, I'm often working on the
          unittests and documentation of python module. <br />
          Don't be shy and take a look. They don't bite 😉
        </p>
      </div>
      <div className={style.projectList}>
        {contributionProjects.map((contribution) => {
          return (
            <div key={contribution.name} className={style.projectItem}>
              <ProjectBox {...contribution} />
            </div>
          );
        })}
      </div>
    </Layout>
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
