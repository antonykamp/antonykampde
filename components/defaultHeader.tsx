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
              fontSize: head ? "6rem" : "4rem",
              lineHeight: head? "6rem": "4rem"
            }}
          >
            Antony Kamp
          </h1>
          <p className={style.menu}>
            <Link href="/">
              <a>about</a>
            </Link>
            {" - "}
            <Link href="/projects">
              <a>projects</a>
            </Link>
            {" - "}
            <Link href="/contributions">
              <a>contributions</a>
            </Link>
          </p>
        </div>
      </header>
    </>
  );
}
