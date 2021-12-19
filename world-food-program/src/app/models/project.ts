import {ProjectInfo} from "./project.info";
import {ProjectLocation} from "./project.location";
import {ProjectSector} from "./project.sector";

export interface Project {
  code: string,
  title: string,
  projectInfo: ProjectInfo,
  locations: ProjectLocation[],
  sectors: ProjectSector[]
}
