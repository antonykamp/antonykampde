import Head from "next/head";
import DefaultFooter from "../components/defaultFooter";
import DefaultHeader from "../components/defaultHeader";
import style from "./layout.module.css";

export default function Layout({ head = false, children }) {
  return (
    <div className={style.main}>
      <Head>
        <title>Antony Kamp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultHeader head={head} />
      <main className={style.body}>{children}</main>
      <DefaultFooter />
    </div>
  );
}
