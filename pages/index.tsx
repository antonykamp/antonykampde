import { Wrap, Box, Heading, Stack, Text, WrapItem } from "@chakra-ui/react";
import Layout from "../components/layout";
import {ProjectBoxHome, ProjectTags, Project, ProjectBox} from "../components/projectBox";
import Skill from "../components/skill";
import { getProjectData } from "../lib/getProjectData";
import _symfit from "../public/contributions/symfit.json"
import _activity from "../public/projects/activity.json"
import path from 'path'

export default function Home({project, contribution}: {project: Project, contribution: Project}) {
  return (
    <Layout head>
      <Stack maxWidth={["100%","4xl"]} spacing="20" alignItems="center" textAlign="center">
        <Stack spacing="5">
        <Heading size="xl">Hi! I'm Antony 👋</Heading>
      <Text fontSize="xl">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </Text>
        </Stack>
      
      <Wrap  spacing="10" justify="center">
      <WrapItem verticalAlign="middle">
        </WrapItem>
        <Stack textAlign="left" spacing="3" width="sm">
          <Heading size="2xl" paddingBottom="3">Skills</Heading>
          <Skill skillName="Python" skillLevel={80}/>
          <Skill skillName="Team" skillLevel={90}/>
          <Skill skillName="Fun" skillLevel={70}/>
        </Stack>
        <WrapItem verticalAlign="middle">
        <ProjectBoxHome {...project}/>
        </WrapItem>
        <WrapItem verticalAlign="middle">
        <ProjectBoxHome {...contribution}/>
        </WrapItem>
        <WrapItem align="middle">
        <Stack textAlign="left" spacing="3" width="sm">
          <Skill skillName="Python" skillLevel={80}/>
          <Skill skillName="Python" skillLevel={80}/>
          <Skill skillName="Team" skillLevel={90}/>
          <Skill skillName="Fun" skillLevel={70}/>
        </Stack>
        </WrapItem>
      </Wrap>
      </Stack>
    </Layout>
  );
}

export async function getStaticProps(context){
  const contributionFile = path.join(process.cwd(), "public/contributions/symfit.json")
  const contribution = getProjectData(contributionFile)

  const projectFile = path.join(process.cwd(), "public/projects/activity.json")
  const project = getProjectData(projectFile)

  return {
    props: {project, contribution }
  }
}