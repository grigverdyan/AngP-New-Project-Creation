import { Injectable } from '@angular/core';
import {Location, Sector} from './exports';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  locations: Location[] = [
    {county: 'Syunik', district: 'Kapan', locationPercent: 15},
    {county: 'Lori', district: 'Vanadzor', locationPercent: 45}
  ];
  percentSum = 0;

  getAllLocations() {
    return this.locations.slice();
  }

  constructor() { }

  // isSectorValid(newSector: Sector): boolean {
  //   console.log(this.percentSum);
  //   if((this.percentSum + Number(newSector.sectorPercent) <= 100) &&
  //     (!this.secNames.find(name => name === newSector.sectorName))) {
  //     this.secNames.push(newSector.sectorName);
  //     return true;
  //   }
  //   return false;
  // }


  addLocation(newLocation: Location) {
    this.locations.push(newLocation);
    this.percentSum += Number(newLocation.locationPercent);
    console.log(this.percentSum);
  }
}
