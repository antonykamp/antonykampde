import Link from "next/link";
import style from "./awardBox.module.css"
export interface AwardItem {
  date: string;
  title: string;
  location: string;
  locationLink?: string;
}

export function AwardBox({ date, title, location, locationLink }: AwardItem) {
  return (
    <div className={style.mainDiv}>
      <p className={style.awardLocation}>
        {locationLink ? (
          <Link href={locationLink}>
            <a>{location}</a>
          </Link>
        ) : (
          location
        )}
      </p>
      <p className={style.awardTitle}>
        {title}
      </p>
      <p className={style.awardDate}>{date}</p>
    </div>
  );
}
