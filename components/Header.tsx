import Image from "next/image";
import Link from "next/link";
import style from "./header.module.scss";

export default function Header() {
  return (
    <>
      <header className={style.header}>
        <Link href="/">
          <a>
          <Image
            src="/profile.jpg"
            alt="Antony Kamp"
            width="128"
            height="128"
            className={style.roundedImage}
          />
          </a>
        </Link>
        <div className={style.titleMenu}>
          <h1 className={style.title}>Antony Kamp</h1>
          <div className={style.menu}>
            <Link href="/">
              <a style={{ width: "5rem" }} className={style.menuItem}>
                about
              </a>
            </Link>
            <p>{" / "}</p>
            <Link href="/projects">
              <a style={{ width: "6.7rem" }} className={style.menuItem}>
                projects
              </a>
            </Link>
            <p>{" / "}</p>
            <Link href="/contributions">
              <a style={{ width: "10.8rem" }} className={style.menuItem}>
                contributions
              </a>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
