import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Alert, AlertIcon } from "@chakra-ui/react";
import DefaultFooter from "../components/defaultFooter";
import DefaultHeader from "../components/defaultHeader";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Antony Kamp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultHeader head/>

      <main className={styles.main}>
      <Alert status="warning">
        <AlertIcon />
        This website is currently under construction! Stay in touch!
      </Alert>
      </main>
      <DefaultFooter/>
    </div>
  );
}
