import Layout from "../components/Layout";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./datenschutz.module.css";
import utilStyle from "../styles/legalUtils.module.css";
import Head from "next/head";

export default function Datenschutz() {
  const tableOfContents = [
    { name: "Einleitung", ref: "#m1870" },
    { name: "Verantwortlicher", ref: "#m3" },
    { name: "Übersicht der Verarbeitungen", ref: "#mOverview" },
    { name: "Maßgebliche Rechtsgrundlagen", ref: "#m13" },
    { name: "Sicherheitsmaßnahmen", ref: "#m27" },
    { name: "Übermittlung von personenbezogenen Daten", ref: "#m25" },
    { name: "Datenverarbeitung in Drittländern", ref: "#m24" },
    { name: "Einsatz von Cookies", ref: "#m134" },
    { name: "Geschäftliche Leistungen", ref: "#m317" },
    { name: "Bereitstellung des Onlineangebotes und Webhosting", ref: "#m225" },
    { name: "Löschung von Daten", ref: "#m12" },
    {
      name: "Änderung und Aktualisierung der Datenschutzerklärung",
      ref: "#m15",
    },
    { name: "Rechte der betroffenen Personen", ref: "#m10" },
    { name: "Begriffsdefinitionen", ref: "#m42" },
  ];
  return (
    <>
      <Head>
        <title>Antony Kamp | Datenschutz</title>
        <meta name="robots" content="noindex"/>
      </Head>
      <Layout>
        <div className={utilStyle.container}>
          <h1 className={utilStyle.heading}>Datenschutzerklärung</h1>
          <div className={utilStyle.container}>
            <h2 className={utilStyle.subHeading}>Einleitung</h2>
            <p>
              Mit der folgenden Datenschutzerklärung möchten wir Sie darüber
              aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend
              auch kurz als "Daten“ bezeichnet) wir zu welchen Zwecken und in
              welchem Umfang im Rahmen der Bereitstellung unserer Applikation
              verarbeiten.
            </p>
            <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
            <p>Stand: 23. März 2021</p>
          </div>
          <div className={utilStyle.container}>
            <h2 className={utilStyle.subHeading}>Inhaltsübersicht</h2>{" "}
            {tableOfContents.map(({ name, ref }) => {
              return (
                <div className={style.listRow}>
                  <div className={style.listIcon}>
                    <FontAwesomeIcon
                      icon={["fas", "chevron-right"]}
                      color="#153351"
                    />
                  </div>
                  <Link href={ref}>
                    <a>{name}</a>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className={utilStyle.container}>
            <h2 className={utilStyle.subHeading} id="m3">
              Verantwortlicher
            </h2>
            <p>Antony Kamp</p>
            <p>Stahnsdorferstraße 142B</p>
            <p>14482 Potsdam</p>
            <p>Germany</p>
            <p>
              E-Mail-Adresse:{" "}
              <a href="mailto:info@antonykamp.de">info@antonykamp.de</a>.
            </p>
          </div>
          <div className={utilStyle.container}>
            <h2 className={utilStyle.subHeading} id="mOverview">
              Übersicht der Verarbeitungen
            </h2>
            <p>
              Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten
              und die Zwecke ihrer Verarbeitung zusammen und verweist auf die
              betroffenen Personen.
            </p>
          </div>
          <div className={utilStyle.container}>
            <h2 className={utilStyle.subHeading}>
              Arten der verarbeiteten Daten
            </h2>

            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              Bestandsdaten (z.B. Namen, Adressen).
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              Inhaltsdaten (z.B. Eingaben in Onlineformularen).
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              Kontaktdaten (z.B. E-Mail, Telefonnummern).
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
              IP-Adressen).
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
              Zugriffszeiten).
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              Vertragsdaten (z.B. Vertragsgegenstand, Laufzeit,
              Kundenkategorie).
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              Zahlungsdaten (z.B. Bankverbindungen, Rechnungen,
              Zahlungshistorie).
            </div>
          </div>
          <div className={utilStyle.container}>
            <h2 className={utilStyle.subHeading}>
              Kategorien betroffener Personen
            </h2>

            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              Geschäfts- und Vertragspartner.
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              Interessenten.
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).
            </div>
          </div>
          <div className={utilStyle.container}>
            <h2 className={utilStyle.subHeading}>Zwecke der Verarbeitung</h2>

            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              Büro- und Organisationsverfahren.
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              Kontaktanfragen und Kommunikation.
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              Erbringung vertragliche Leistungen und Kundenservice.
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              Verwaltung und Beantwortung von Anfragen.
            </div>
          </div>
          <div className={utilStyle.container}>
            <h2 className={utilStyle.subHeading} id="m13">
              Maßgebliche Rechtsgrundlagen
            </h2>
            <p>
              Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der
              DSGVO, auf deren Basis wir personenbezogenen Daten verarbeiten.
              Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO
              nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder
              Sitzland gelten können. Sollten ferner im Einzelfall speziellere
              Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der
              Datenschutzerklärung mit.
            </p>

            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a. DSGVO)</strong>{" "}
                - Die betroffene Person hat ihre Einwilligung in die
                Verarbeitung der sie betreffenden personenbezogenen Daten für
                einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.
              </p>
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>
                  Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1
                  S. 1 lit. b. DSGVO)
                </strong>{" "}
                - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen
                Vertragspartei die betroffene Person ist, oder zur Durchführung
                vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der
                betroffenen Person erfolgen.
              </p>
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>
                  Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c. DSGVO)
                </strong>{" "}
                - Die Verarbeitung ist zur Erfüllung einer rechtlichen
                Verpflichtung erforderlich, der der Verantwortliche unterliegt.
              </p>
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>
                  Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO)
                </strong>{" "}
                - Die Verarbeitung ist zur Wahrung der berechtigten Interessen
                des Verantwortlichen oder eines Dritten erforderlich, sofern
                nicht die Interessen oder Grundrechte und Grundfreiheiten der
                betroffenen Person, die den Schutz personenbezogener Daten
                erfordern, überwiegen.
              </p>
            </div>

            <p>
              <strong>Nationale Datenschutzregelungen in Deutschland</strong>:
              Zusätzlich zu den Datenschutzregelungen der
              Datenschutz-Grundverordnung gelten nationale Regelungen zum
              Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz
              zum Schutz vor Missbrauch personenbezogener Daten bei der
              Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG
              enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum
              Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung
              besonderer Kategorien personenbezogener Daten, zur Verarbeitung
              für andere Zwecke und zur Übermittlung sowie automatisierten
              Entscheidungsfindung im Einzelfall einschließlich Profiling. Des
              Weiteren regelt es die Datenverarbeitung für Zwecke des
              Beschäftigungsverhältnisses (§ 26 BDSG), insbesondere im Hinblick
              auf die Begründung, Durchführung oder Beendigung von
              Beschäftigungsverhältnissen sowie die Einwilligung von
              Beschäftigten. Ferner können Landesdatenschutzgesetze der
              einzelnen Bundesländer zur Anwendung gelangen.
            </p>
          </div>
          <div className={utilStyle.container}>
            <h2 className={utilStyle.subHeading} id="m27">
              Sicherheitsmaßnahmen
            </h2>
            <p>
              Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
              Berücksichtigung des Stands der Technik, der
              Implementierungskosten und der Art, des Umfangs, der Umstände und
              der Zwecke der Verarbeitung sowie der unterschiedlichen
              Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der
              Rechte und Freiheiten natürlicher Personen geeignete technische
              und organisatorische Maßnahmen, um ein dem Risiko angemessenes
              Schutzniveau zu gewährleisten.
            </p>
            <p>
              Zu den Maßnahmen gehören insbesondere die Sicherung der
              Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
              Kontrolle des physischen und elektronischen Zugangs zu den Daten
              als auch des sie betreffenden Zugriffs, der Eingabe, der
              Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung.
              Des Weiteren haben wir Verfahren eingerichtet, die eine
              Wahrnehmung von Betroffenenrechten, die Löschung von Daten und
              Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner
              berücksichtigen wir den Schutz personenbezogener Daten bereits bei
              der Entwicklung bzw. Auswahl von Hardware, Software sowie
              Verfahren entsprechend dem Prinzip des Datenschutzes, durch
              Technikgestaltung und durch datenschutzfreundliche
              Voreinstellungen.
            </p>
          </div>
          <div className={utilStyle.container}>
            <h2 className={utilStyle.subHeading} id="m25">
              Übermittlung von personenbezogenen Daten
            </h2>
            <p>
              Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt
              es vor, dass die Daten an andere Stellen, Unternehmen, rechtlich
              selbstständige Organisationseinheiten oder Personen übermittelt
              oder sie ihnen gegenüber offengelegt werden. Zu den Empfängern
              dieser Daten können z.B. mit IT-Aufgaben beauftragte Dienstleister
              oder Anbieter von Diensten und Inhalten, die in eine Webseite
              eingebunden werden, gehören. In solchen Fall beachten wir die
              gesetzlichen Vorgaben und schließen insbesondere entsprechende
              Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen,
              mit den Empfängern Ihrer Daten ab.
            </p>
          </div>
          <div className={utilStyle.container}>
            <h2 className={utilStyle.subHeading} id="m24">
              Datenverarbeitung in Drittländern
            </h2>
            <p>
              Sofern wir Daten in einem Drittland (d.h., außerhalb der
              Europäischen Union (EU), des Europäischen Wirtschaftsraums (EWR))
              verarbeiten oder die Verarbeitung im Rahmen der Inanspruchnahme
              von Diensten Dritter oder der Offenlegung bzw. Übermittlung von
              Daten an andere Personen, Stellen oder Unternehmen stattfindet,
              erfolgt dies nur im Einklang mit den gesetzlichen Vorgaben.{" "}
            </p>
            <p>
              Vorbehaltlich ausdrücklicher Einwilligung oder vertraglich oder
              gesetzlich erforderlicher Übermittlung verarbeiten oder lassen wir
              die Daten nur in Drittländern mit einem anerkannten
              Datenschutzniveau, vertraglichen Verpflichtung durch sogenannte
              Standardschutzklauseln der EU-Kommission, beim Vorliegen von
              Zertifizierungen oder verbindlicher internen
              Datenschutzvorschriften verarbeiten (Art. 44 bis 49 DSGVO,
              Informationsseite der EU-Kommission:{" "}
              <a
                href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de"
                target="_blank"
              >
                https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de
              </a>
              ).
            </p>
          </div>
          <div className={utilStyle.container}>
            <h2 className={utilStyle.subHeading} id="m134">
              Einsatz von Cookies
            </h2>
            <p>
              Cookies sind Textdateien, die Daten von besuchten Websites oder
              Domains enthalten und von einem Browser auf dem Computer des
              Benutzers gespeichert werden. Ein Cookie dient in erster Linie
              dazu, die Informationen über einen Benutzer während oder nach
              seinem Besuch innerhalb eines Onlineangebotes zu speichern. Zu den
              gespeicherten Angaben können z.B. die Spracheinstellungen auf
              einer Webseite, der Loginstatus, ein Warenkorb oder die Stelle, an
              der ein Video geschaut wurde, gehören. Zu dem Begriff der Cookies
              zählen wir ferner andere Technologien, die die gleichen Funktionen
              wie Cookies erfüllen (z.B., wenn Angaben der Nutzer anhand
              pseudonymer Onlinekennzeichnungen gespeichert werden, auch als
              "Nutzer-IDs" bezeichnet)
            </p>
            <p>
              <strong>
                Die folgenden Cookie-Typen und Funktionen werden unterschieden:
              </strong>
            </p>

            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>
                  Temporäre Cookies (auch: Session- oder Sitzungs-Cookies):
                </strong>
                &nbsp;Temporäre Cookies werden spätestens gelöscht, nachdem ein
                Nutzer ein Online-Angebot verlassen und seinen Browser
                geschlossen hat.
              </p>
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>Permanente Cookies:</strong>&nbsp;Permanente Cookies
                bleiben auch nach dem Schließen des Browsers gespeichert. So
                kann beispielsweise der Login-Status gespeichert oder bevorzugte
                Inhalte direkt angezeigt werden, wenn der Nutzer eine Website
                erneut besucht. Ebenso können die Interessen von Nutzern, die
                zur Reichweitenmessung oder zu Marketingzwecken verwendet
                werden, in einem solchen Cookie gespeichert werden.
              </p>
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>First-Party-Cookies:</strong>&nbsp;First-Party-Cookies
                werden von uns selbst gesetzt.
              </p>
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>
                  Third-Party-Cookies (auch: Drittanbieter-Cookies)
                </strong>
                : Drittanbieter-Cookies werden hauptsächlich von Werbetreibenden
                (sog. Dritten) verwendet, um Benutzerinformationen zu
                verarbeiten.
              </p>
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>
                  Notwendige (auch: essentielle oder unbedingt erforderliche)
                  Cookies:
                </strong>{" "}
                Cookies können zum einen für den Betrieb einer Webseite
                unbedingt erforderlich sein (z.B. um Logins oder andere
                Nutzereingaben zu speichern oder aus Gründen der Sicherheit).
              </p>
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>
                  Statistik-, Marketing- und Personalisierungs-Cookies
                </strong>
                : Ferner werden Cookies im Regelfall auch im Rahmen der
                Reichweitenmessung eingesetzt sowie dann, wenn die Interessen
                eines Nutzers oder sein Verhalten (z.B. Betrachten bestimmter
                Inhalte, Nutzen von Funktionen etc.) auf einzelnen Webseiten in
                einem Nutzerprofil gespeichert werden. Solche Profile dienen
                dazu, den Nutzern z.B. Inhalte anzuzeigen, die ihren
                potentiellen Interessen entsprechen. Dieses Verfahren wird auch
                als "Tracking", d.h., Nachverfolgung der potentiellen Interessen
                der Nutzer bezeichnet. Soweit wir Cookies oder
                "Tracking"-Technologien einsetzen, informieren wir Sie gesondert
                in unserer Datenschutzerklärung oder im Rahmen der Einholung
                einer Einwilligung.
              </p>
            </div>

            <p>
              <strong>Hinweise zu Rechtsgrundlagen: </strong> Auf welcher
              Rechtsgrundlage wir Ihre personenbezogenen Daten mit Hilfe von
              Cookies verarbeiten, hängt davon ab, ob wir Sie um eine
              Einwilligung bitten. Falls dies zutrifft und Sie in die Nutzung
              von Cookies einwilligen, ist die Rechtsgrundlage der Verarbeitung
              Ihrer Daten die erklärte Einwilligung. Andernfalls werden die
              mithilfe von Cookies verarbeiteten Daten auf Grundlage unserer
              berechtigten Interessen (z.B. an einem betriebswirtschaftlichen
              Betrieb unseres Onlineangebotes und dessen Verbesserung)
              verarbeitet oder, wenn der Einsatz von Cookies erforderlich ist,
              um unsere vertraglichen Verpflichtungen zu erfüllen.
            </p>
            <p>
              <strong>Speicherdauer: </strong>Sofern wir Ihnen keine expliziten
              Angaben zur Speicherdauer von permanenten Cookies mitteilen (z. B.
              im Rahmen eines sog. Cookie-Opt-Ins), gehen Sie bitte davon aus,
              dass die Speicherdauer bis zu zwei Jahre betragen kann.
            </p>
            <p>
              <strong>
                Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-Out):{" "}
              </strong>{" "}
              Abhängig davon, ob die Verarbeitung auf Grundlage einer
              Einwilligung oder gesetzlichen Erlaubnis erfolgt, haben Sie
              jederzeit die Möglichkeit, eine erteilte Einwilligung zu
              widerrufen oder der Verarbeitung Ihrer Daten durch
              Cookie-Technologien zu widersprechen (zusammenfassend als
              "Opt-Out" bezeichnet). Sie können Ihren Widerspruch zunächst
              mittels der Einstellungen Ihres Browsers erklären, z.B., indem Sie
              die Nutzung von Cookies deaktivieren (wobei hierdurch auch die
              Funktionsfähigkeit unseres Onlineangebotes eingeschränkt werden
              kann). Ein Widerspruch gegen den Einsatz von Cookies zu Zwecken
              des Onlinemarketings kann auch mittels einer Vielzahl von
              Diensten, vor allem im Fall des Trackings, über die Webseiten{" "}
              <a href="https://optout.aboutads.info" target="_blank">
                https://optout.aboutads.info
              </a>{" "}
              und{" "}
              <a href="https://www.youronlinechoices.com/" target="_blank">
                https://www.youronlinechoices.com/
              </a>{" "}
              erklärt werden. Daneben können Sie weitere Widerspruchshinweise im
              Rahmen der Angaben zu den eingesetzten Dienstleistern und Cookies
              erhalten.
            </p>
            <p>
              <strong>
                Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung
              </strong>
              : Wir setzen ein Verfahren zum Cookie-Einwilligungs-Management
              ein, in dessen Rahmen die Einwilligungen der Nutzer in den Einsatz
              von Cookies, bzw. der im Rahmen des
              Cookie-Einwilligungs-Management-Verfahrens genannten
              Verarbeitungen und Anbieter eingeholt sowie von den Nutzern
              verwaltet und widerrufen werden können. Hierbei wird die
              Einwilligungserklärung gespeichert, um deren Abfrage nicht erneut
              wiederholen zum müssen und die Einwilligung entsprechend der
              gesetzlichen Verpflichtung nachweisen zu können. Die Speicherung
              kann serverseitig und/oder in einem Cookie (sogenanntes
              Opt-In-Cookie, bzw. mithilfe vergleichbarer Technologien)
              erfolgen, um die Einwilligung einem Nutzer, bzw. dessen Gerät
              zuordnen zu können. Vorbehaltlich individueller Angaben zu den
              Anbietern von Cookie-Management-Diensten, gelten die folgenden
              Hinweise: Die Dauer der Speicherung der Einwilligung kann bis zu
              zwei Jahren betragen. Hierbei wird ein pseudonymer
              Nutzer-Identifikator gebildet und mit dem Zeitpunkt der
              Einwilligung, Angaben zur Reichweite der Einwilligung (z. B.
              welche Kategorien von Cookies und/oder Diensteanbieter) sowie dem
              Browser, System und verwendeten Endgerät gespeichert.
            </p>

            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z.B.
                besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten),
                Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
                IP-Adressen).
              </p>
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>Betroffene Personen:</strong> Nutzer (z.B.
                Webseitenbesucher, Nutzer von Onlinediensten).
              </p>
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1
                S. 1 lit. a. DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1
                lit. f. DSGVO).
              </p>
            </div>
          </div>
          <div className={utilStyle.container}>
            <h2 className={utilStyle.subHeading} id="m317">
              Geschäftliche Leistungen
            </h2>
            <p>
              Wir verarbeiten Daten unserer Vertrags- und Geschäftspartner, z.B.
              Kunden und Interessenten (zusammenfassend bezeichnet als
              "Vertragspartner") im Rahmen von vertraglichen und vergleichbaren
              Rechtsverhältnissen sowie damit verbundenen Maßnahmen und im
              Rahmen der Kommunikation mit den Vertragspartnern (oder
              vorvertraglich), z.B., um Anfragen zu beantworten.
            </p>
            <p>
              Diese Daten verarbeiten wir zur Erfüllung unserer vertraglichen
              Pflichten, zur Sicherung unserer Rechte und zu Zwecken der mit
              diesen Angaben einhergehenden Verwaltungsaufgaben sowie der
              unternehmerischen Organisation. Die Daten der Vertragspartner
              geben wir im Rahmen des geltenden Rechts nur insoweit an Dritte
              weiter, als dies zu den vorgenannten Zwecken oder zur Erfüllung
              gesetzlicher Pflichten erforderlich ist oder mit Einwilligung der
              betroffenen Personen erfolgt (z.B. an beteiligte
              Telekommunikations-, Transport- und sonstige Hilfsdienste sowie
              Subunternehmer, Banken, Steuer- und Rechtsberater,
              Zahlungsdienstleister oder Steuerbehörden). Über weitere
              Verarbeitungsformen, z.B. zu Zwecken des Marketings, werden die
              Vertragspartner im Rahmen dieser Datenschutzerklärung informiert.
            </p>
            <p>
              Welche Daten für die vorgenannten Zwecke erforderlich sind, teilen
              wir den Vertragspartnern vor oder im Rahmen der Datenerhebung,
              z.B. in Onlineformularen, durch besondere Kennzeichnung (z.B.
              Farben) bzw. Symbole (z.B. Sternchen o.ä.), oder persönlich mit.
            </p>
            <p>
              Wir löschen die Daten nach Ablauf gesetzlicher Gewährleistungs-
              und vergleichbarer Pflichten, d.h., grundsätzlich nach Ablauf von
              4 Jahren, es sei denn, dass die Daten in einem Kundenkonto
              gespeichert werden, z.B., solange sie aus gesetzlichen Gründen der
              Archivierung aufbewahrt werden müssen (z.B. für Steuerzwecke im
              Regelfall 10 Jahre). Daten, die uns im Rahmen eines Auftrags durch
              den Vertragspartner offengelegt wurden, löschen wir entsprechend
              den Vorgaben des Auftrags, grundsätzlich nach Ende des Auftrags.
            </p>
            <p>
              Soweit wir zur Erbringung unserer Leistungen Drittanbieter oder
              Plattformen einsetzen, gelten im Verhältnis zwischen den Nutzern
              und den Anbietern die Geschäftsbedingungen und Datenschutzhinweise
              der jeweiligen Drittanbieter oder Plattformen.
            </p>

            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B.
                Namen, Adressen), Zahlungsdaten (z.B. Bankverbindungen,
                Rechnungen, Zahlungshistorie), Kontaktdaten (z.B. E-Mail,
                Telefonnummern), Vertragsdaten (z.B. Vertragsgegenstand,
                Laufzeit, Kundenkategorie).
              </p>
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>Betroffene Personen:</strong> Interessenten, Geschäfts-
                und Vertragspartner.
              </p>
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>Zwecke der Verarbeitung:</strong> Erbringung
                vertragliche Leistungen und Kundenservice, Kontaktanfragen und
                Kommunikation, Büro- und Organisationsverfahren, Verwaltung und
                Beantwortung von Anfragen.
              </p>
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und
                vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO),
                Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c. DSGVO),
                Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
              </p>
            </div>
          </div>
          <div className={utilStyle.container}>
            <h2 className={utilStyle.subHeading} id="m225">
              Bereitstellung des Onlineangebotes und Webhosting
            </h2>
            <p>
              Um unser Onlineangebot sicher und effizient bereitstellen zu
              können, nehmen wir die Leistungen von einem oder mehreren
              Webhosting-Anbietern in Anspruch, von deren Servern (bzw. von
              ihnen verwalteten Servern) das Onlineangebot abgerufen werden
              kann. Zu diesen Zwecken können wir Infrastruktur- und
              Plattformdienstleistungen, Rechenkapazität, Speicherplatz und
              Datenbankdienste sowie Sicherheitsleistungen und technische
              Wartungsleistungen in Anspruch nehmen.
            </p>
            <p>
              Zu den im Rahmen der Bereitstellung des Hostingangebotes
              verarbeiteten Daten können alle die Nutzer unseres Onlineangebotes
              betreffenden Angaben gehören, die im Rahmen der Nutzung und der
              Kommunikation anfallen. Hierzu gehören regelmäßig die IP-Adresse,
              die notwendig ist, um die Inhalte von Onlineangeboten an Browser
              ausliefern zu können, und alle innerhalb unseres Onlineangebotes
              oder von Webseiten getätigten Eingaben.
            </p>
            <p>
              <strong>Erhebung von Zugriffsdaten und Logfiles</strong>: Wir
              selbst (bzw. unser Webhostinganbieter) erheben Daten zu jedem
              Zugriff auf den Server (sogenannte Serverlogfiles). Zu den
              Serverlogfiles können die Adresse und Name der abgerufenen
              Webseiten und Dateien, Datum und Uhrzeit des Abrufs, übertragene
              Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp nebst
              Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor
              besuchte Seite) und im Regelfall IP-Adressen und der anfragende
              Provider gehören.
            </p>
            <p>
              Die Serverlogfiles können zum einen zu Zwecken der Sicherheit
              eingesetzt werden, z.B., um eine Überlastung der Server zu
              vermeiden (insbesondere im Fall von missbräuchlichen Angriffen,
              sogenannten DDoS-Attacken) und zum anderen, um die Auslastung der
              Server und ihre Stabilität sicherzustellen.
            </p>

            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>Verarbeitete Datenarten:</strong> Inhaltsdaten (z.B.
                Eingaben in Onlineformularen), Nutzungsdaten (z.B. besuchte
                Webseiten, Interesse an Inhalten, Zugriffszeiten),
                Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
                IP-Adressen).
              </p>
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>Betroffene Personen:</strong> Nutzer (z.B.
                Webseitenbesucher, Nutzer von Onlinediensten).
              </p>
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres
                Onlineangebotes und Nutzerfreundlichkeit.
              </p>
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art.
                6 Abs. 1 S. 1 lit. f. DSGVO).
              </p>
            </div>
          </div>
          <div className={utilStyle.container}>
            <h2 className={utilStyle.subHeading} id="m12">
              Löschung von Daten
            </h2>
            <p>
              Die von uns verarbeiteten Daten werden nach Maßgabe der
              gesetzlichen Vorgaben gelöscht, sobald deren zur Verarbeitung
              erlaubten Einwilligungen widerrufen werden oder sonstige
              Erlaubnisse entfallen (z.B., wenn der Zweck der Verarbeitung
              dieser Daten entfallen ist oder sie für den Zweck nicht
              erforderlich sind).
            </p>
            <p>
              Sofern die Daten nicht gelöscht werden, weil sie für andere und
              gesetzlich zulässige Zwecke erforderlich sind, wird deren
              Verarbeitung auf diese Zwecke beschränkt. D.h., die Daten werden
              gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.B.
              für Daten, die aus handels- oder steuerrechtlichen Gründen
              aufbewahrt werden müssen oder deren Speicherung zur
              Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
              oder zum Schutz der Rechte einer anderen natürlichen oder
              juristischen Person erforderlich ist.
            </p>
            <p>
              Unsere Datenschutzhinweise können ferner weitere Angaben zu der
              Aufbewahrung und Löschung von Daten beinhalten, die für die
              jeweiligen Verarbeitungen vorrangig gelten.
            </p>
          </div>
          <div className={utilStyle.container}>
            <h2 className={utilStyle.subHeading} id="m15">
              Änderung und Aktualisierung der Datenschutzerklärung
            </h2>
            <p>
              Wir bitten Sie, sich regelmäßig über den Inhalt unserer
              Datenschutzerklärung zu informieren. Wir passen die
              Datenschutzerklärung an, sobald die Änderungen der von uns
              durchgeführten Datenverarbeitungen dies erforderlich machen. Wir
              informieren Sie, sobald durch die Änderungen eine
              Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine
              sonstige individuelle Benachrichtigung erforderlich wird.
            </p>
            <p>
              Sofern wir in dieser Datenschutzerklärung Adressen und
              Kontaktinformationen von Unternehmen und Organisationen angeben,
              bitten wir zu beachten, dass die Adressen sich über die Zeit
              ändern können und bitten die Angaben vor Kontaktaufnahme zu
              prüfen.
            </p>
          </div>
          <div className={utilStyle.container}>
            <h2 className={utilStyle.subHeading} id="m10">
              Rechte der betroffenen Personen
            </h2>
            <p>
              Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu,
              die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
            </p>

            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>
                  Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich
                  aus Ihrer besonderen Situation ergeben, jederzeit gegen die
                  Verarbeitung der Sie betreffenden personenbezogenen Daten, die
                  aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt,
                  Widerspruch einzulegen; dies gilt auch für ein auf diese
                  Bestimmungen gestütztes Profiling. Werden die Sie betreffenden
                  personenbezogenen Daten verarbeitet, um Direktwerbung zu
                  betreiben, haben Sie das Recht, jederzeit Widerspruch gegen
                  die Verarbeitung der Sie betreffenden personenbezogenen Daten
                  zum Zwecke derartiger Werbung einzulegen; dies gilt auch für
                  das Profiling, soweit es mit solcher Direktwerbung in
                  Verbindung steht.
                </strong>
              </p>
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben
                das Recht, erteilte Einwilligungen jederzeit zu widerrufen.
              </p>
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine
                Bestätigung darüber zu verlangen, ob betreffende Daten
                verarbeitet werden und auf Auskunft über diese Daten sowie auf
                weitere Informationen und Kopie der Daten entsprechend den
                gesetzlichen Vorgaben.
              </p>
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>Recht auf Berichtigung:</strong> Sie haben entsprechend
                den gesetzlichen Vorgaben das Recht, die Vervollständigung der
                Sie betreffenden Daten oder die Berichtigung der Sie
                betreffenden unrichtigen Daten zu verlangen.
              </p>
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>
                  Recht auf Löschung und Einschränkung der Verarbeitung:
                </strong>{" "}
                Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu
                verlangen, dass Sie betreffende Daten unverzüglich gelöscht
                werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben
                eine Einschränkung der Verarbeitung der Daten zu verlangen.
              </p>
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das
                Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben,
                nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten,
                gängigen und maschinenlesbaren Format zu erhalten oder deren
                Übermittlung an einen anderen Verantwortlichen zu fordern.
              </p>
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben
                unbeschadet eines anderweitigen verwaltungsrechtlichen oder
                gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer
                Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres
                gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts
                des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die
                Verarbeitung der Sie betreffenden personenbezogenen Daten gegen
                die Vorgaben der DSGVO verstößt.
              </p>
            </div>
          </div>
          <div className={utilStyle.container}>
            <h2 className={utilStyle.subHeading} id="m42">
              Begriffsdefinitionen
            </h2>
            <p>
              In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser
              Datenschutzerklärung verwendeten Begrifflichkeiten. Viele der
              Begriffe sind dem Gesetz entnommen und vor allem im Art. 4 DSGVO
              definiert. Die gesetzlichen Definitionen sind verbindlich. Die
              nachfolgenden Erläuterungen sollen dagegen vor allem dem
              Verständnis dienen. Die Begriffe sind alphabetisch sortiert.
            </p>

            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>Personenbezogene Daten:</strong> "Personenbezogene
                Daten“ sind alle Informationen, die sich auf eine identifizierte
                oder identifizierbare natürliche Person (im Folgenden
                "betroffene Person“) beziehen; als identifizierbar wird eine
                natürliche Person angesehen, die direkt oder indirekt,
                insbesondere mittels Zuordnung zu einer Kennung wie einem Namen,
                zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung
                (z.B. Cookie) oder zu einem oder mehreren besonderen Merkmalen
                identifiziert werden kann, die Ausdruck der physischen,
                physiologischen, genetischen, psychischen, wirtschaftlichen,
                kulturellen oder sozialen Identität dieser natürlichen Person
                sind.
              </p>
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>Verantwortlicher:</strong> Als "Verantwortlicher“ wird
                die natürliche oder juristische Person, Behörde, Einrichtung
                oder andere Stelle, die allein oder gemeinsam mit anderen über
                die Zwecke und Mittel der Verarbeitung von personenbezogenen
                Daten entscheidet, bezeichnet.
              </p>
            </div>
            <div className={style.listRow}>
              <div className={style.listIcon}>
                <FontAwesomeIcon
                  icon={["fas", "chevron-right"]}
                  color="#153351"
                />
              </div>
              <p>
                <strong>Verarbeitung:</strong> "Verarbeitung" ist jeder mit oder
                ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder
                jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen
                Daten. Der Begriff reicht weit und umfasst praktisch jeden
                Umgang mit Daten, sei es das Erheben, das Auswerten, das
                Speichern, das Übermitteln oder das Löschen.
              </p>
            </div>
          </div>
          <div className={utilStyle.container}>
            <p>
              <a href="https://datenschutz-generator.de/?l=de" target="_blank">
                Quelle: Datenschutz-Generator.de von Dr. Thomas Schwenke
              </a>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
