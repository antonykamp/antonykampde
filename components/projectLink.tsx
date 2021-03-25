import style from "./projectLink.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { faBookOpen, faArchive } from "@fortawesome/free-solid-svg-icons";

export enum ProjectLinks {
  documentation = "documentation",
  github = "github",
  website = "website",
  telegram = "telegram",
}

export function ProjectLink({
  name,
  link,
}: {
  name: ProjectLinks;
  link: string;
}) {
  const backgroundColor = {
    documentation: "#00B5D8",
    github: "#718096",
    website: "#718096",
    telegram: "#3182ce",
  };

  const linkIcon = {
    documentation: faBookOpen,
    github: faGithub,
    website: faArchive,
    telegram: faTelegramPlane,
  };
  const nameID = name.toLocaleLowerCase()
  const color = Object.keys(backgroundColor).includes(nameID)
    ? backgroundColor[nameID]
    : backgroundColor["website"];

  const icon = Object.keys(linkIcon).includes(nameID)
    ? linkIcon[nameID]
    : linkIcon["website"];

  return (
    <Link href={link}>
      <a>
        <div className={style.linkObject} style={{ backgroundColor: color }}>
          <FontAwesomeIcon icon={icon} />
          <p className={style.linkName}>{name}</p>
        </div>
      </a>
    </Link>
  );
}
