import { Wrap, Box, Heading, Stack, Text, WrapItem } from "@chakra-ui/react";
import Layout from "../components/layout";
import {ProjectBoxHome, ProjectTags, Project, ProjectBox} from "../components/projectBox";
import path from 'path'
import { getAllProjectData } from "../lib/getProjectData";

export default function Contributions({contributionProjects}: {contributionProjects: Project[]}) {
  return (
    <Layout>
      <Stack maxWidth={["100%","4xl"]} spacing="20" alignItems="center" textAlign="center">
        <Stack spacing="5">
        <Heading size="3xl">Contributions</Heading>
      <Text fontSize="xl">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </Text>
        </Stack>
      
      <Wrap  spacing="10" justify="center">
      {
          contributionProjects.map(contribution => {
              return (
                  <WrapItem key={contribution.name}>
                      <ProjectBox {...contribution} />
                  </WrapItem>
              )
          })
      }
      </Wrap>
      </Stack>
    </Layout>
  );
}

export async function getStaticProps(context){
  
    const contributionDirectory = path.join(process.cwd(), "public/contributions/")
    const contributionProjects = getAllProjectData(contributionDirectory)
    return {
        props: {contributionProjects}
    }
}