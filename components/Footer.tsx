import Link from "next/link";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dom } from "@fortawesome/fontawesome-svg-core";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <style>{dom.css()}</style>
      <div className={styles.socialNetworks}>
        <a
          className={styles.logoLink}
          target="_blank"
          href="mailto:info@antonykamp.de"
        >
          <FontAwesomeIcon title="Send mail" size="2x" icon={faEnvelope} />
        </a>
        <a
          className={styles.logoLink}
          target="_blank"
          href="https://github.com/antonykamp"
        >
          <FontAwesomeIcon
            title="Show Github profile"
            size="2x"
            icon={faGithub}
          />
        </a>
        <a
          className={styles.logoLink}
          target="_blank"
          href="https://www.linkedin.com/in/antony-kamp-10068320a/"
        >
          <FontAwesomeIcon
            title="Show LinkedIn profile"
            size="2x"
            icon={faLinkedin}
          />
        </a>
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
        <a className={styles.footerLink} href="https://nextjs.org/">
          next.js
        </a>
        {", "}
        <a className={styles.footerLink} href="https://vercel.com/">
          vercel
        </a>
      </p>
    </footer>
  );
}
