import { Injectable } from '@angular/core';
import {Sector} from "./exports";

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  percentSum = 55;
  sectors: Sector[] = [
    {sectorName: "Agriculture", sectorPercent: 30},
    {sectorName: "Tourism", sectorPercent: 25}
  ];
  secNames: string[] = [
    "Agriculture", "Tourism"
  ];

  constructor() { }

  getAllSectors() {
    return this.sectors.slice();
  }

  isSectorValid(newSector: Sector): boolean {
    console.log(this.percentSum);
    if((this.percentSum + Number(newSector.sectorPercent) <= 100) &&
      (!this.secNames.find(name => name === newSector.sectorName))) {
      this.secNames.push(newSector.sectorName);
      return true;
    }
    return false;
  }


  addSector(newSector: Sector) {
     this.sectors.push(newSector);
     this.percentSum += Number(newSector.sectorPercent);
     console.log(this.percentSum);
  }

}
