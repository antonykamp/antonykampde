import Head from "next/head";
import { Alert, AlertIcon, Box, Flex } from "@chakra-ui/react";
import DefaultFooter from "../components/defaultFooter";
import DefaultHeader from "../components/defaultHeader";

export default function Layout({ head = false, children }) {
  return (
    <Flex
      minHeight="100vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Head>
        <title>Antony Kamp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultHeader head={head} />
      <Flex
        as="main"
        justifyContent="center"
        alignItems="flex-start center"
        flex="1"
      >
        {children}
      </Flex>
      <DefaultFooter />
    </Flex>
  );
}
