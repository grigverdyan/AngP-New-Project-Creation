import { Injectable } from '@angular/core';
import {Sector} from "./sector";

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  sectors: Sector[] = [
    {sectorName: "Agriculture", sectorPercent: 30},
    {sectorName: "Tourism", sectorPercent: 25}
  ];

  constructor() { }

  getSectors() {
    return this.sectors.slice();
  }
}
