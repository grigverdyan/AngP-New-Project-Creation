import {ProjectInfo} from "./project.info";

export interface Project {
  id: number,
  code: string,
  title: string,
  projectInfo: ProjectInfo
}
