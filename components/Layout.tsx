import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import style from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={style.main}>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="Antony Kamp, Developer, Project, Contribution, Science, HPI, Potsdam, Jena"
        />
        <meta name="author" content="Antony Kamp" />
        <meta name="copyright" content="Antony Kamp" />
      </Head>
      <Header />
      <main className={style.body}>{children}</main>
      <Footer />
    </div>
  );
}