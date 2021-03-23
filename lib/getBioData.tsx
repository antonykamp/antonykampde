import fs from "fs";
import path from "path";
import { BioItem } from "../components/bioBox";

export function getBioData(projectFile: string): BioItem[] {
  const projectContent = fs.readFileSync(projectFile, "utf-8");
  const projectObj = JSON.parse(projectContent);
  return projectObj;
}
