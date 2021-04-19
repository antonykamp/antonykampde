import { useState } from "react";
import style from "./projectBox.module.scss";
import Link from "next/link";
import { ProjectBadge } from "./ProjectBadge";
import { ProjectLink } from "./ProjectLink";

export interface Project {
  name: string;
  introduction: string;
  tags: ProjectBadge[];
  sections: ProjectSection[];
  links: LinkName[];
  isProject?: boolean;
  prio?: number;
}

interface ProjectSection {
  title: string;
  content: string;
}

interface LinkName {
  name: string;
  link: string;
}


export function ProjectBox({
  name,
  tags,
  introduction,
  sections,
  links,
}: Project) {
  return (
    <div className={style.projectBox}>
      <h2 className={style.projectName}>{name}</h2>
      <div className={style.tagRow}>
        {tags.map((tag) => {
          return <ProjectBadge badge={tag} />;
        })}
      </div>
      <p>{introduction}</p>
      {sections.map((section) => {
        return (
          <div className={style.sectionObject}>
            <h3>{section.title}</h3>
            <p>{section.content}</p>
          </div>
        );
      })}
      <div className={style.linkRow}>
        {links.map(({ name, link }) => {
          return <ProjectLink name={name} link={link} />;
        })}
      </div>
    </div>
  );
}

interface ProjectBoxHomeProps {
  name: string;
  tags: ProjectBadge[];
  introduction: string;
  isProject?: boolean;
}
export function ProjectBoxHome({
  name,
  tags,
  introduction,
  isProject = false,
}: ProjectBoxHomeProps) {
  return (
    <div className={style.projectBoxHome}>
      <div style={{ padding: "1rem" }}>
        <h2 className={style.projectName}>{name}</h2>
        <div className={style.tagRow}>
          {tags.map((tag) => {
            return <ProjectBadge badge={tag} />;
          })}
        </div>
        <p>{introduction}</p>
      </div>
      <Link href={"/" + (isProject ? "projects" : "contributions")}>
        <a>
          <div className={style.linkBox}>
            <p>see more {isProject ? "projects" : "contributions"}</p>
          </div>
        </a>
      </Link>
    </div>
  );
}
