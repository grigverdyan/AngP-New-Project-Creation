import { Injectable } from '@angular/core';
import {Sector} from "./exports";

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  sectors: Sector[] = [
    {sectorName: "Agriculture", sectorPercent: 30},
    {sectorName: "Tourism", sectorPercent: 25}
  ];

  constructor() { }

  getAllSectors() {
    return this.sectors.slice();
  }

  addSector(name: string, percent: number): Sector {
    let sector!: Sector;
    sector.sectorName = name;
    sector.sectorPercent = percent;
    this.sectors.push(sector);
    return sector;
  }

}
