import style from "./bioBox.module.css";

export interface BioItem {
  startDate: string;
  endDate?: string;
  jobDescription: string;
  location: string;
  locationLink?: string;
}

export function BioBox({
  startDate,
  endDate,
  jobDescription,
  location,
  locationLink,
}: BioItem) {
  return (
    <div className={style.bioBox}>
      <h2 className={style.date}>
        {startDate}
        {endDate && " - " + endDate}
      </h2>
      <p className={style.description}>
        {jobDescription}
        {locationLink ? (
          <a href={locationLink} className={style.locationLink}>
            {" @" + location}
          </a>
        ) : (
          " @" + location
        )}
      </p>
    </div>
  );
}
