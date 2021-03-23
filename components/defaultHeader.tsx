import { Flex, Heading, Link, Text, Box } from "@chakra-ui/react";
import NextImage from "next/image";

export default function DefaultHeader({ head = false }) {
  return (
    <>
      <Flex
        as="header"
        margin="4"
        align="center"
        verticalAlign="bottom"
        direction={["column", "row"]}
      >
        <Box borderRadius="full" overflow="hidden">
          <NextImage
            src="/profile.jpg"
            alt="Antony Kamp"
            priority={true}
            loading="eager"
            quality="100"
            width={head ? 192 : 128}
            height={head ? 192 : 128}
          />
        </Box>
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
            <Link href="/">about</Link>
            {" - "}
            <Link href="/projects">projects</Link>
            {" - "}
            <Link href="/contributions">contributions</Link>
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
