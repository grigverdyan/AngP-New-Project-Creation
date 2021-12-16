import {Sector} from "./sector";

export interface ProjectSector {
  projectId: number,
  sectorId: number,
  sector: Sector,
  percent: number
}
