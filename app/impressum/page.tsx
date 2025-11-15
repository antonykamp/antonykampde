import utilStyle from "../../styles/legalUtils.module.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Impressum() {
  return (
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
  );
}
