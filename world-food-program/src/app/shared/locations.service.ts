import { Injectable } from '@angular/core';
import {COUNTIES, DISTRICTS} from "../data/location.data";
import {Dropdown} from "../models/dropdown";
import {ProjectLocation} from "../models/project.location";

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  locations: ProjectLocation[] = [];
  distNames: string[] = [];
  districts: Dropdown[] = DISTRICTS;
  counties: Dropdown[] = COUNTIES;
  percentSum = 0;
  invalidIds: number [] = [];

  getProjectLocations() {
    return this.locations.slice();
  }
  getCounties(): Dropdown[] {
    return this.counties.slice();
  }
  getDistricts(countyId: number): Dropdown[] {
    let districts: Dropdown[] = [];
    for(let district of DISTRICTS) {
      if(district.parentId === countyId) {
        districts.push(district);
      }
    }
    if(districts.length === 0){
      districts = this.districts.slice();
    }
    if(this.invalidIds.length !== 0) {
      districts = districts.filter(d => !this.invalidIds.includes(d.id));
    }
    return districts.slice();
  }

  constructor() { }

  isLocationValid(newProjectLocation: ProjectLocation): boolean {
    console.log("percent sum ",this.percentSum);
    console.log(newProjectLocation.location.district);
    if(Number(newProjectLocation.percent) > 0 && newProjectLocation.location.district && newProjectLocation.location.county &&
      (this.percentSum + Number(newProjectLocation.percent) <= 100) && (!this.distNames.find(name => name === newProjectLocation.location.district))) {
        this.distNames.push(newProjectLocation.location.district);
        return true;
      }
    return false;
  }

  addInvalidId(id: number) {
    this.invalidIds.push(id);
  }

  addLocation(newProjectLocation: ProjectLocation) {
    this.locations.push(newProjectLocation);
    this.percentSum += Number(newProjectLocation.percent);
  }

  sortByCountyName(sortType: number): ProjectLocation[] {
    let locations: ProjectLocation[];
    switch(sortType) {
      case 1:
        locations = this.getProjectLocations().sort((l1, l2) => l1.location.county > l2.location.county ? 1 : -1);
        break;
      case 2:
        locations = this.getProjectLocations().sort((l1, l2) => l1.location.county < l2.location.county ? 1 : -1);
        break;
      default:
        locations = this.locations.slice();
        break;
    }
    return locations;
  }

  sortByDistrictName(sortType: number): ProjectLocation[] {
    let locations: ProjectLocation[];
    switch(sortType) {
      case 1:
        locations = this.getProjectLocations().sort((l1, l2) => l1.location.district > l2.location.district ? 1 : -1);
        break;
      case 2:
        locations = this.getProjectLocations().sort((l1, l2) => l1.location.district < l2.location.district ? 1 : -1);
        break;
      default:
        locations = this.locations.slice();
        break;
    }
    return locations;
  }

}
