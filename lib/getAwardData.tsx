import fs from "fs";
import { AwardItem } from "../components/awardBox";

export function getAwardData(projectFile: string): AwardItem[] {
  const awardsContent = fs.readFileSync(projectFile, "utf-8");
  const awardsObj = JSON.parse(awardsContent);
  return awardsObj;
}
