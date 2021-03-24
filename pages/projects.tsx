import Layout from "../components/layout";
import {
  Project,
  ProjectBox,
} from "../components/projectBox";
import path from "path";
import { getAllProjectData } from "../lib/getProjectData";
import Link from "next/link";
import style from "./projects.module.css";

export default function Contributions({
  contributionProjects,
}: {
  contributionProjects: Project[];
}) {
  return (
    <Layout>
      <div className={style.component}>
        <h1 className={style.title}>Projects</h1>
        <p className={style.description}>
          Things I have worked on. <br />
          Most of the projects were created with friends, for example, activity.
          But many of them are waiting for new contributors. Don't let them wait
          and take a look at{" "}
          <Link href="https://github.com/antonykamp/">
            <a>Github</a>
          </Link>
          😀
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

export async function getStaticProps(context) {
  const contributionDirectory = path.join(process.cwd(), "public/projects/");
  const contributionProjects = getAllProjectData(contributionDirectory);
  return {
    props: { contributionProjects },
  };
}
