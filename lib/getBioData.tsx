import fs from "fs";
import path from "path";
import { BioItem } from "../components/bioBox";

export function getBioData(projectFile: string): BioItem[] {
  const bioContent = fs.readFileSync(projectFile, "utf-8");
  const bioObj = JSON.parse(bioContent);
  return bioObj;
}
