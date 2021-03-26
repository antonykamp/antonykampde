import Link from "next/link";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dom } from "@fortawesome/fontawesome-svg-core";
import styles from "./defaultFooter.module.css";

const SocialNetworks = [
  { logo: faEnvelope, link: "mailto:info@antonykamp.de", title: "Send mail" },
  { logo: faGithub, link: "https://github.com/antonykamp", title: "Show Github profile" },
  { logo: faLinkedin, link: "", title: "Show LinkedIn profile" },
];
export default function DefaultFooter() {
  return (
    <footer className={styles.footerDiv}>
      <style>{dom.css()}</style>
      <div className={styles.socialNetworks}>
        {SocialNetworks.map((item) => {
          return (
            <Link key={item.link} href={item.link}>
              <a className={styles.logoLink} target="_blank">
                <FontAwesomeIcon title={item.title} size="2x" icon={item.logo} />
              </a>
            </Link>
          );
        })}
      </div>
      <p className={styles.footerText}>
        {"© 2021 Antony Kamp. "}
        <Link href="impressum">
          <a className={styles.footerLink}>Impressum</a>
        </Link>
        {". "}
        <Link href="datenschutz">
          <a className={styles.footerLink}>Datenschutz</a>
        </Link>
        {" Powered by "}
        <Link href="https://nextjs.org/">
          <a className={styles.footerLink}>next.js</a>
        </Link>
        {", "}
        <Link href="https://vercel.com/">
          <a className={styles.footerLink}>vercel</a>
        </Link>
      </p>
    </footer>
  );
}
