import Link from "next/link";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dom } from "@fortawesome/fontawesome-svg-core";
import styles from "./defaultFooter.module.css";

const SocialNetworks = [
  { logo: faEnvelope, link: "mailto:info@antonykamp.de" },
  { logo: faGithub, link: "https://github.com/antonykamp" },
  { logo: faLinkedin, link: "https://cz-gymnasium.jena.de" },
];
export default function DefaultFooter() {
  return (
    <footer className={styles.footerDiv}>
      <style>{dom.css()}</style>
      <div className={styles.socialNetworks}>
        {SocialNetworks.map((item) => {
          return (
            <Link key={item.link} href={item.link}>
              <a className={styles.logoLink}>
                <FontAwesomeIcon size="2x" icon={item.logo} />
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
