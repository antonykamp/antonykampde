import Layout from "../components/layout";
import { Project, ProjectBox } from "../components/projectBox";
import path from "path";
import { getAllProjectData } from "../lib/getProjectData";
import Link from "next/link";
import utilStyle from "../styles/utils.module.css";
import listUtilStyle from "../styles/projectListUtils.module.css";
import Head from "next/head";

export default function Projects({
  projectProjects,
}: {
  projectProjects: Project[];
}) {
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
            activity. But many of them are waiting for new contributors. Don't
            let them wait and take a look at{" "}
            <Link href="https://github.com/antonykamp/">
              <a target="_blank">Github</a>
            </Link>
            😀
          </p>
        </div>
        <div className={utilStyle.container}>
          <div className={listUtilStyle.projectList}>
            {projectProjects.map((contribution) => {
              return (
                <div key={contribution.name} className={listUtilStyle.projectItem}>
                  <ProjectBox {...contribution} />
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
