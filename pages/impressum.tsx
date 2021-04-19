import Head from "next/head";
import utilStyle from "../styles/legalUtils.module.scss";

export default function Impressum() {
  return (
    <>
      <Head>
        <title>Antony Kamp | Impressum</title>
        <meta name="robots" content="noindex"/>
      </Head>
      <main>
        <h1>Impressum</h1>
        <div className={utilStyle.container}>
          <div className={utilStyle.container}>
            <h3>Diensteanbieter</h3>
            <p>Antony Kamp</p>
            <p>Stahnsdorferstraße 142B</p>
            <p>14482 Potsdam</p>
            <p>Germany</p>
          </div>
          <div className={utilStyle.container}>
            <h3>Kontaktmöglichkeiten</h3>
            <p>
              E-Mail-Adresse:{" "}
              <a href="mailto:info@antonykamp.de">info@antonykamp.de</a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
