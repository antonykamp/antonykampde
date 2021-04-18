import style from "./awardBox.module.css";
export interface AwardItem {
  date: string;
  title: string;
  location: string;
  locationLink?: string;
}

export function AwardBox({ date, title, location, locationLink }: AwardItem) {
  return (
    <div className={style.awardBox}>
      <p className={style.location}>
        {locationLink ? <a href={locationLink}>{location}</a> : location}
      </p>
      <p className={style.title}>{title}</p>
      <p className={style.date}>{date}</p>
    </div>
  );
}
