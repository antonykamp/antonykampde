import Link from "next/link";
import style from "./bioBox.module.css"
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
    <div className={style.mainDiv}>
      <h2 className={style.headingDate}>
        {startDate}
        {endDate && " - " + endDate}
      </h2>
      <p className={style.totalDescription}>
        {jobDescription}
        {locationLink ? (
          <Link href={locationLink}>
            <a className={style.locationLink}>{" @" + location}</a>
          </Link>
        ) : (
          " @" + location
        )}
      </p>
    </div>
  );
}
