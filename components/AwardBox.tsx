import style from "./awardBox.module.scss";
export interface AwardItem {
  date: string;
  title: string;
  location: string;
  locationLink?: string;
}

export function AwardBox({ date, title, location, locationLink }: AwardItem) {
  return (
    <div className={style.awardBox}>
      <h3>
        {locationLink ? <a href={locationLink}>{location}</a> : location}
      </h3>
      <p className={style.title}>{title}</p>
      <p className={style.date}>{date}</p>
    </div>
  );
}
