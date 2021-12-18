import { Injectable } from '@angular/core';
import { Sector } from "../models/exports";
import { Dropdown } from "../models/dropdown";
import  { SECTORS } from "../data/sector.data";
import { ProjectSector } from "../models/project.sector";

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  projectSectors: ProjectSector[] = [];
  existingSectorIds: number[] = [];
  sectors = SECTORS;
  percentSum = 0;

  constructor() { }

  getProjectSectors() {
    return this.projectSectors.slice();
  }
  getSectorTypes() {
    if(this.existingSectorIds.length !== 0) {
      let sectors = this.sectors.filter(s => !this.existingSectorIds.includes(s.id));
      return sectors;
    }
    return this.sectors.slice();
  }

  isSectorValid(ProjectSector: ProjectSector): boolean {
    if(Number(ProjectSector.percent) > 0 && ProjectSector.sector.name && (this.percentSum + Number(ProjectSector.percent) <= 100)) {
      return true;
    }
    return false;
  }

  addSector(newProjectSector: ProjectSector) {
     this.projectSectors.push(newProjectSector);
     this.percentSum += Number(newProjectSector.percent);
  }

  addInvalidId(id: number) {
    this.existingSectorIds.push(id);
  }

  sortSectorsByName(sortType: number): ProjectSector[] {
    let sectors: ProjectSector[];
    switch(sortType) {
      case 1:
        sectors = this.getProjectSectors().sort((s1, s2) => s1.sector.name > s2.sector.name ? 1 : -1);
        break;
      case 2:
        sectors = this.getProjectSectors().sort((s1, s2) => s1.sector.name < s2.sector.name ? 1 : -1);
        break;
      default:
        sectors = this.projectSectors.slice();
        break;
    }
    return sectors;
  }

}
