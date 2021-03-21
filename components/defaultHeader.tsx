import { Flex, Heading, Image, Link, Text, Box } from "@chakra-ui/react";

export default function DefaultHeader({ head = false }) {
  return (
      <Flex 
        as="header"
        margin="4"
        align="center"
        verticalAlign="bottom"
        direction={["column", "row"]}
      >
        <Image
          borderRadius="full"
          boxSize={head ? "175px" : "120px"}
          src="/profile.jpg"
          alt="Antony Kamp"
        />
        <Flex
          padding={["1", "5"]}
          direction="column"
          textAlign={["center", "left"]}
        >
          <Heading
            as="h1"
            lineHeight="1"
            fontSize={head ? ["6xl", "8xl"] : ["4xl", "5xl"]}
            fontWeight={head ? "extrabold" : "bold"}
            color="black"
            paddingBottom={["1", "2"]}
          >
            Antony Kamp
          </Heading>
          <Text fontSize={"2xl"}>
            <Link href="/">
              about
            </Link>
            {" - "}
            <Link href="/projects">
              projects
            </Link>
            {" - "}
            <Link href="/contributions">
              contributions
            </Link>
          </Text>
        </Flex>
      </Flex>
  );
}
