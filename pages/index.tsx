import { Wrap, Box, Heading, Stack, Text, WrapItem } from "@chakra-ui/react";
import Layout from "../components/layout";
import {ProjectBoxHome, ProjectBox} from "../components/projectBox";
import Skill from "../components/skill";

export default function Home() {
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
        <ProjectBoxHome projectName="symfit" tags={["python", "science"]} introduction="A great project"/>
        </WrapItem>
        <WrapItem verticalAlign="middle">
        <ProjectBoxHome projectName="activity" tags={["blitz"]} introduction="Another great project" isProject/>
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
