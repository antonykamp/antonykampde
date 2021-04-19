import style from "./projectLink.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { faBookOpen, faArchive } from "@fortawesome/free-solid-svg-icons";

const ProjectLinks = {
  documentation: {
    backgroundColor: "#00B5D8",
    linkIcon: faBookOpen,
  },
  github: {
    backgroundColor: "#718096",
    linkIcon: faGithub,
  },
  website: {
    backgroundColor: "#718096",
    linkIcon: faArchive,
  },
  telegram: {
    backgroundColor: "#3182ce",
    linkIcon: faTelegramPlane,
  },
};

export function ProjectLink({ name, link }: { name: string; link: string }) {
  const nameID = name.toLocaleLowerCase();
  const linkType = ProjectLinks[nameID] ?? ProjectLinks["website"];

  return (
    <a href={link} target="_blank">
      <div
        className={style.linkObject}
        style={{ backgroundColor: linkType.backgroundColor }}
      >
        <FontAwesomeIcon icon={linkType.linkIcon} />
        <p className={style.linkName}>{name}</p>
      </div>
    </a>
  );
}
