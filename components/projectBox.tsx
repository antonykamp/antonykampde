import {
  Heading,
  Stack,
  Text,
  Badge,
  LinkBox,
  LinkOverlay,
  Tag,
  TagLeftIcon,
  TagLabel,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export interface Project {
  name: string,
  introduction: string,
  tags: ProjectTags[]
  sections: ProjectSection[],
  links: ProjectLink[]
}

export enum ProjectTags {
  python = "python",
  blitz = "blitz",
  science = "cyan"
}

interface ProjectSection {
  title: string;
  content: string;
}

interface ProjectLink {
  name: string;
  link: string;
  logo: IconDefinition;
  color: string;
}

interface ProjectHeadProps {
  name: string;
  tags: ProjectTags[];
  introduction: string;
}
export function ProjectHead({
  name,
  tags,
  introduction,
}: ProjectHeadProps) {
  const tagNameColor = {
    python: "blue",
    science: "science",
    blitz: "orange",
  };
  return (
    <Stack paddingX="5">
      <Heading size="lg">{name}</Heading>
      <Stack direction="row">
        {tags.map((tag) => {
          return <Badge colorScheme={tagNameColor[tag]}>{tag}</Badge>;
        })}
      </Stack>
      <Text>{introduction}</Text>
    </Stack>
  );
}

interface ProjectTailProps {
  sections: ProjectSection[];
  links: ProjectLink[];
}
export function ProjectTail({ sections, links }: ProjectTailProps) {
  return (
    <Stack paddingX="5">
      {sections.map((section) => {
        return (
          <>
            <Heading size="md">{section.title}</Heading>
            <Text>{section.content}</Text>
          </>
        );
      })}
      <Stack direction="row">
        {links.map(({ name, link, logo, color }) => {
          return (
            <Tag
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
      </Stack>
    </Stack>
  );
}

export function ProjectBox({
  name,
  tags,
  introduction,
  sections,
  links,
}: {
  name: string;
  tags: ProjectTags[];
  introduction: string;
  sections: ProjectSection[];
  links: ProjectLink[];
}) {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Stack
      as="button"
      onClick={onToggle}
      textAlign="left"
      width="sm"
      spacing="5"
      paddingY="5"
      borderWidth="2px"
      borderRadius="lg"
    >
      <ProjectHead
        name={name}
        tags={tags}
        introduction={introduction}
      />
      <Collapse in={isOpen} animateOpacity>
        <ProjectTail sections={sections} links={links} />
      </Collapse>
    </Stack>
  );
}


interface ProjectBoxHome {
  name: string,
  tags: ProjectTags[],
  introduction: string,
  isProject?: boolean
}
export function ProjectBoxHome({
  name,
  tags,
  introduction,
  isProject = false
}: ProjectBoxHome) {
  return (
    <Stack
      textAlign="left"
      width="sm"
      paddingTop="5"
      borderWidth="2px"
      borderRadius="lg"
    >
      <ProjectHead
        name={name}
        tags={tags}
        introduction={introduction}
      />
      <LinkBox
        bgColor="gray.100"
        padding="2"
        _hover={{ bgColor: "gray.200" }}
        textAlign="center"
      >
        <LinkOverlay href={"/" + (isProject ? "projects" : "contributions")}>
          see more {isProject ? "projects" : "contributions"}
        </LinkOverlay>
      </LinkBox>
    </Stack>
  );
}
