import style from "./bioBox.module.scss";

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
      <h3>
        {startDate}
        {endDate && " - " + endDate}
      </h3>
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
