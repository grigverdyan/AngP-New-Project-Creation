import { Injectable } from '@angular/core';
import {Location, Sector} from './exports';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  locations: Location[] = [];
  distNames: string[] = [];
  percentSum = 0;

  getAllLocations() {
    return this.locations.slice();
  }

  constructor() { }

  isLocationValid(newLocation: Location): boolean {
    console.log(this.percentSum);
    if((this.percentSum + Number(newLocation.locationPercent) <= 100) &&
      (!this.distNames.find(name => name === newLocation.district))) {
      this.distNames.push(newLocation.district);
      return true;
    }
    return false;
  }


  addLocation(newLocation: Location) {
    this.locations.push(newLocation);
    this.percentSum += Number(newLocation.locationPercent);
    console.log(this.percentSum);
  }
}
