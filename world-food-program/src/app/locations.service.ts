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
    console.log("percent sum ",this.percentSum);
    if(newLocation.locationPercent && newLocation.district && newLocation.county) {
      if ((this.percentSum + Number(newLocation.locationPercent) <= 100) &&
        (!this.distNames.find(name => name === newLocation.district))) { //(!this.distNames.find(name => name === newLocation.district))
        this.distNames.push(newLocation.district);
        console.log("mta");
        return true;
      }
    }
    return false;
  }


  addLocation(newLocation: Location) {
    this.locations.push(newLocation);
    this.percentSum += Number(newLocation.locationPercent);
    console.log(this.percentSum);
  }
}
