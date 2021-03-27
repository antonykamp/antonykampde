import { useState } from "react";
import style from "./projectBox.module.css";
import Link from "next/link";
import { ProjectBadges, ProjectBadge } from "./ProjectBadge";
import { ProjectLink, ProjectLinks } from "./projectLink";

export interface Project {
  name: string;
  introduction: string;
  tags: ProjectBadges[];
  sections: ProjectSection[];
  links: LinkName[];
  isProject?: boolean;
}

interface ProjectSection {
  title: string;
  content: string;
}

interface LinkName {
  name: ProjectLinks;
  link: string;
}

interface ProjectHeadProps {
  name: string;
  tags: ProjectBadges[];
  introduction: string;
}
export function ProjectHead({ name, tags, introduction }: ProjectHeadProps) {
  return (
    <div>
      <h2 className={style.projectName}>{name}</h2>
      <div className={style.tagRow}>
        {tags.map((tag) => {
          return <ProjectBadge badge={tag} />;
        })}
      </div>
      <p>{introduction}</p>
    </div>
  );
}

interface ProjectTailProps {
  sections: ProjectSection[];
  links: LinkName[];
  isOpen: boolean;
}
export function ProjectTail({ sections, links, isOpen }: ProjectTailProps) {
  return (
    <div className={style.boxTail}>
      {sections.map((section) => {
        return (
          <div className={style.sectionObject}>
            <h3 className={style.sectionName}>{section.title}</h3>
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

export function ProjectBox({
  name,
  tags,
  introduction,
  sections,
  links,
}: Project) {
  const [isOpen, setisOpen] = useState(false);
  const [onHover, setOnHover] = useState(false);
  return (
    <>
      <button
        className={style.projectOutherBox}
        onClick={() => {
          setisOpen(!isOpen);
        }}
        onMouseEnter={() => {
          setOnHover(true);
        }}
        onMouseLeave={() => {
          setOnHover(false);
        }}
      >
        <div className={style.projectInnerBox}>
          <ProjectHead name={name} tags={tags} introduction={introduction} />
          <div
            style={{ maxHeight: isOpen ? "500px" : "0px" }}
            className={style.toggleTail}
          >
            <ProjectTail sections={sections} links={links} isOpen={isOpen} />
          </div>
        </div>
        <div
          style={{ maxHeight: onHover && !isOpen ? "100px" : "0px" }}
          className={style.toggleTail}
        >
          <div className={style.clickToExpand}>
            <p>click to expand</p>
          </div>
        </div>
      </button>
    </>
  );
}

interface ProjectBoxHome {
  name: string;
  tags: ProjectBadges[];
  introduction: string;
  isProject?: boolean;
}
export function ProjectBoxHome({
  name,
  tags,
  introduction,
  isProject = false,
}: ProjectBoxHome) {
  return (
    <div className={style.boxHome}>
      <div style={{ padding: "1rem" }}>
        <ProjectHead name={name} tags={tags} introduction={introduction} />
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
