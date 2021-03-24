import { IconName, IconPrefix } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import style from "./projectBox.module.css";
import Link from 'next/link'
import {Badge, Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react"

export interface Project {
  name: string;
  introduction: string;
  tags: ProjectTags[];
  sections: ProjectSection[];
  links: ProjectLink[];
  isProject?: boolean;
}

export enum ProjectTags {
  python = "python",
  blitz = "blitz",
  science = "cyan",
  cpp = "pink",
  nextjs = "black",
  typescript = "blue",
}

interface ProjectSection {
  title: string;
  content: string;
}

interface ProjectLink {
  name: string;
  link: string;
  logo: [IconPrefix, IconName];
  color: string;
}

interface ProjectHeadProps {
  name: string;
  tags: ProjectTags[];
  introduction: string;
}
export function ProjectHead({ name, tags, introduction }: ProjectHeadProps) {
  const tagNameColor = {
    python: "blue",
    science: "science",
    blitz: "orange",
  };
  return (
    <div>
      <h2 className={style.projectName}>{name}</h2>
      <div className={style.tagRow}>
        {tags.map((tag) => {
          return (
            <Badge className={style.tag} colorScheme={tagNameColor[tag]}>
              {tag}
            </Badge>
          );
        })}
      </div>
      <p>{introduction}</p>
    </div>
  );
}

interface ProjectTailProps {
  sections: ProjectSection[];
  links: ProjectLink[];
  isOpen: boolean;
}
export function ProjectTail({ sections, links, isOpen }: ProjectTailProps) {
  return (
    <div className={style.boxTail}>
      {sections.map((section) => {
        return (
          <>
            <h3 className={style.sectionName}>{section.title}</h3>
            <p>{section.content}</p>
          </>
        );
      })}
      <div className={style.linkRow}>
        {links.map(({ name, link, logo, color }) => {
          return (
            <Tag
              className={style.link}
              as="a"
              href={link}
              size="sm"
              key={link}
              variant="solid"
              colorScheme={color}
            >
              <TagLeftIcon boxSize="12px" as={FontAwesomeIcon} icon={logo} />
              <TagLabel>{name}</TagLabel>
            </Tag>
          );
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
  return (
    <button
      className={style.projectBox}
      onClick={() => {
        setisOpen(!isOpen);
      }}
    >
      <ProjectHead name={name} tags={tags} introduction={introduction} />
      <div
        style={{ maxHeight: isOpen ? "500px" : "0px" }}
        className={style.toggleTail}
      >
        <ProjectTail sections={sections} links={links} isOpen={isOpen} />
      </div>
    </button>
  );
}

interface ProjectBoxHome {
  name: string;
  tags: ProjectTags[];
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
    <div
      className={style.boxHome}>
      <div style={{padding: "1rem"}}>
        <ProjectHead name={name} tags={tags} introduction={introduction} />
      </div>
      <Link href={"/" + (isProject ? "projects" : "contributions")}>
        <a>
        <div className={style.linkBox}>
          <p>
            see more {isProject ? "projects" : "contributions"}
          </p>
        </div>  
        </a>
      </Link>
    </div>
  );
}
