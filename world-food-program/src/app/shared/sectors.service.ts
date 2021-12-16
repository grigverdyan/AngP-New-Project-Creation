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
  // alreadySec: string[] = [];
  //secNames = [{name:"Administrative", id:1}, "Agriculture", "Health", "Tourism"];// Sector type
  sectorType = SECTORS;
  // percentSum = 0;

  constructor() { }

  getProjectSectors() {
    return this.projectSectors.slice();
  }

  getSectorTypes() {
    return this.sectorType;
  }

  // isProjectSectorValid(newProjectSector: ProjectSector): boolean {
  //   if(Number(newProjectSector.percent) > 0 && newProjectSector.name) {
  //     if ((this.percentSum + Number(newProjectSector.percent) <= 100) &&
  //       (!this.alreadySec.find(name => name === newProjectSector.name))) {
  //       this.alreadySec.push(newProjectSector.name);
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  addSector(newProjectSector: ProjectSector) {
     this.projectSectors.push(newProjectSector);
     // this.percentSum += Number(newProjectSector.percent);
  }

  // sortSectorsByName(sortType: number): Sector[] {
  //   let sectors: Sector[];
  //   switch(sortType) {
  //     case 1:
  //       sectors = this.sectors.sort((s1, s2) => s1.sectorName > s2.sectorName ? 1 : -1);
  //       break;
  //     case 2:
  //       sectors = this.sectors.sort((s1, s2) => s1.sectorName < s2.sectorName ? 1 : -1);
  //       break;
  //     default:
  //       sectors = this.sectors.slice();
  //       break;
  //   }
  //   return sectors;
  // }

}
