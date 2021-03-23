import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import NextImage from "next/image";
import Link from "next/link";
import styles from "./defaultHeader.module.css";

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
        <NextImage
          src="/profile.jpg"
          alt="Antony Kamp"
          priority={true}
          loading="eager"
          quality="100"
          width={head ? 192 : 128}
          height={head ? 192 : 128}
          className={styles.roundedImage}
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
              <a>about</a>
            </Link>
            {" - "}
            <Link href="/projects">
              <a>projects</a>
            </Link>
            {" - "}
            <Link href="/contributions">
              <a>contributions</a>
            </Link>
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
