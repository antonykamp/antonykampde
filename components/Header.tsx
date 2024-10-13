import Image from "next/image";
import Link from "next/link";
import style from "./header.module.scss";

export default function Header() {
  return <>
    <header className={style.header}>
      <Link href="/">

        <Image
          src="/profile.jpg"
          alt="Antony Kamp"
          width="128"
          height="128"
          className={style.roundedImage}
        />

      </Link>
      <div className={style.titleMenu}>
        <h1 className={style.title}>Antony Kamp</h1>
        <div className={style.menu}>
          <Link href="/" style={{ width: "5rem" }} className={style.menuItem}>
            
              about
            
          </Link>
          <p>{" / "}</p>
          <Link href="/projects" style={{ width: "6.7rem" }} className={style.menuItem}>
            
              projects
            
          </Link>
          <p>{" / "}</p>
          <Link
            href="/contributions"
            style={{ width: "10.8rem" }}
            className={style.menuItem}>
            
              contributions
            
          </Link>
        </div>
      </div>
    </header>
  </>;
}
