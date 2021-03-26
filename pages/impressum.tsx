import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import utilStyle from "../styles/legalUtils.module.css"

export default function Impressum() {
  return (
    <>
      <Head>
        <title>Antony Kamp | Impressum</title>
        <meta name="robots" content="noindex"/>
      </Head>
      <Layout>
        <h1 className={utilStyle.heading}>Impressum</h1>
        <div className={utilStyle.container}>
          <div className={utilStyle.container}>
            <h2 className={utilStyle.subHeading}>Diensteanbieter</h2>
            <p>Antony Kamp</p>
            <p>Stahnsdorferstraße 142B</p>
            <p>14482 Potsdam</p>
            <p>Germany</p>
          </div>
          <div className={utilStyle.container}>
            <h2 className={utilStyle.subHeading}>Kontaktmöglichkeiten</h2>
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
