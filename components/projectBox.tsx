import {
  Heading,
  Stack,
  Text,
  Box,
  Badge,
  Divider,
  Link,
  LinkBox,
  LinkOverlay,
  Tag,
  TagLeftIcon,
  TagLabel,
  Button,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const tagNameColor = {
  python: "blue",
  science: "cyan",
  blitz: "orange",
};

export function ProjectHead({ projectName, tags, introduction }) {
  return (
    <Stack paddingX="5">
      <Heading size="lg">{projectName}</Heading>
      <Stack direction="row">
        {tags.map((tag) => {
          return <Badge colorScheme={tagNameColor[tag]}>{tag}</Badge>;
        })}
      </Stack>
      <Text>{introduction}</Text>
    </Stack>
  );
}

export function ProjectTail({ sections = [], links = [] }) {
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
        {links.map(({name, link, logo, color}) => {
          return (
            <Tag as="a" href={link} size="sm" key={link} variant="solid" colorScheme={color}>
              <TagLeftIcon boxSize="12px" as={FontAwesomeIcon} icon={logo}/>
              <TagLabel>{name}</TagLabel>
            </Tag>
          );
        })}
      </Stack>
    </Stack>
  );
}

export function ProjectBox({
    projectName,
    tags,
    introduction,
    sections,
    links
  }) {
    const [isBig, setBig] = useState(false)

    return (
        <Stack as="button" onClick={(_) => setBig(!isBig)} textAlign="left" width="sm" spacing="5" paddingY="5" borderWidth="2px" borderRadius="lg">
            <ProjectHead
                projectName={projectName}
                tags={tags}
                introduction={introduction}
            />
            {isBig && (<ProjectTail sections={sections} links={links}/>)}
        </Stack>
    )
  }

export function ProjectBoxHome({
  projectName,
  tags,
  introduction,
  isProject = false,
}) {
  return (
    <Stack textAlign="left" width="sm" paddingTop="5" borderWidth="2px" borderRadius="lg">
      <ProjectHead
        projectName={projectName}
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
