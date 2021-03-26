import Head from "next/head";
import DefaultFooter from "../components/defaultFooter";
import DefaultHeader from "../components/defaultHeader";
import style from "./layout.module.css";

export default function Layout({ head = false, children }) {
  return (
    <div className={style.main}>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta charSet="utf-8"/>
        <meta name="keywords" content="Antony Kamp, Developer, Project, Contribution, Science, HPI, Potsdam, Jena"/>
        <meta name="author" content="Antony Kamp" />
        <meta name="copyright" content="Antony Kamp" />
      </Head>
      <DefaultHeader head={head} />
      <main className={style.body}>{children}</main>
      <DefaultFooter />
    </div>
  );
}
