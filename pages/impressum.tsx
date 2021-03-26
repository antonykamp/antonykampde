import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import style from "./impressum.module.css";
export default function Impressum() {
  return (
    <>
      <Head>
        <title>Antony Kamp | Impressum</title>
      </Head>
      <Layout>
        <h1 className={style.title}>Impressum</h1>
        <div className={style.container}>
          <div className={style.section}>
            <h2 className={style.subtitle}>Diensteanbieter</h2>
            <p>Antony Kamp</p>
            <p>Stahnsdorferstraße 142B</p>
            <p>14482 Potsdam</p>
            <p>Germany</p>
          </div>
          <div className={style.section}>
            <h2 className={style.subtitle}>Kontaktmöglichkeiten</h2>
            <p>
              E-Mail-Adresse:{" "}
              <Link href="mailto:info@antonykamp.de">
                <a>info@antonykamp.de</a>
              </Link>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
