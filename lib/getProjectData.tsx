import fs from "fs";
import path from "path";
import { Project } from "../components/projectBox";

export function getAllProjectData(projectDirectory: string): Project[] {
  const fileNames = fs.readdirSync(projectDirectory);
  const allProjects = fileNames.map((projectFile) => {
    const fullPath = path.join(projectDirectory, projectFile);
    return getProjectData(fullPath);
  });
  return allProjects;
}

export function getProjectData(projectFile: string): Project {
  const projectContent = fs.readFileSync(projectFile, "utf-8");
  const projectObj = JSON.parse(projectContent);
  return projectObj;
}
