import { Injectable } from '@angular/core';
import {Sector} from "./exports";

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  sectors: Sector[] = [];
  alreadySec: string[] = [];
  secNames = ["Agriculture","Administrative", "Health", "Tourism"];
  percentSum = 0;

  constructor() { }

  getAllSectors() {
    return this.sectors.slice();
  }

  getSectorNames() {
    return this.secNames;
  }

  isSectorValid(newSector: Sector): boolean {
    if(Number(newSector.sectorPercent) > 0 && newSector.sectorName) {
      if ((this.percentSum + Number(newSector.sectorPercent) <= 100) &&
        (!this.alreadySec.find(name => name === newSector.sectorName))) {
        this.alreadySec.push(newSector.sectorName);
        return true;
      }
    }
    return false;
  }

  addSector(newSector: Sector) {
     this.sectors.push(newSector);
     this.percentSum += Number(newSector.sectorPercent);
  }

  sortSectorsByName(sortType: number): Sector[] {
    let sectors: Sector[];
    switch(sortType) {
      case 1:
        sectors = this.sectors.sort((s1, s2) => s1.sectorName > s2.sectorName ? 1 : -1);
        break;
      case 2:
        sectors = this.sectors.sort((s1, s2) => s1.sectorName < s2.sectorName ? 1 : -1);
        break;
      default:
        sectors = this.sectors.slice();
        break;
    }
    return sectors;
  }

}
