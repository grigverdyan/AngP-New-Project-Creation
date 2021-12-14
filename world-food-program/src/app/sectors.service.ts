import { Injectable } from '@angular/core';
import {Sector} from "./exports";

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  sectors: Sector[] = [];
  alreadySec: string[] = [];
  secNames = ["Administrative", "Agriculture", "Health", "Tourism"];
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

}
