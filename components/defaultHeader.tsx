import Image from "next/image";
import Link from "next/link";
import style from "./defaultHeader.module.css";

export default function DefaultHeader({ head = false }) {
  return (
    <>
      <header className={style.header}>
        <Image
          src="/profile.jpg"
          alt="Antony Kamp"
          width={head ? 192 : 128}
          height={head ? 192 : 128}
          className={style.roundedImage}
        />
        <div className={style.titleMenu}>
          <h1
            className={style.title}
            style={{
              fontSize: head ? "6rem" : "3rem",
              lineHeight: head ? "6rem" : "3rem",
              paddingBottom: head ? "1rem" : "0.5rem",
            }}
          >
            Antony Kamp
          </h1>
          <div className={style.menu}>
            <Link href="/">
              <a>
                <div style={{ width: "4.7rem" }} className={style.menuItem}>
                  about
                </div>
              </a>
            </Link>
            <p>{" / "}</p>
            <Link href="/projects">
              <a>
              <div style={{ width: "6.4rem" }} className={style.menuItem}>
                projects
                </div>
                </a>
            </Link>
            <p>{" / "}</p>
            <Link href="/contributions">
              <a>
              <div style={{ width: "10.8rem" }} className={style.menuItem}>
                contributions
                </div>
              </a>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
