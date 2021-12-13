import { Injectable } from '@angular/core';
import {Sector} from "./exports";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  percentSum = 55;
  sectors: Sector[] = [
    {sectorName: "Agriculture", sectorPercent: 30},
    {sectorName: "Tourism", sectorPercent: 25}
  ];

  constructor() { }

  getAllSectors() {
    return this.sectors.slice();
  }

  isSectorValid(newSector: Sector): boolean {
    console.log(this.percentSum);
    if(this.percentSum + Number(newSector.sectorPercent) <= 100) {
      console.log('mta');
      return true;
    }
    return false;
  }


  addSector(newSector: Sector) {
     this.sectors.push(newSector);
     this.percentSum += newSector.sectorPercent;

  }

}
