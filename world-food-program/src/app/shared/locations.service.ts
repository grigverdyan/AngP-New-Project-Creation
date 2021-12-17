import { Injectable } from '@angular/core';
import {DISTRICTS} from "../data/location.data";
import {Dropdown} from "../models/dropdown";
import {ProjectLocation} from "../models/project.location";

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  locations: ProjectLocation[] = [];
  distNames: string[] = [];
  districts: Dropdown[] = DISTRICTS;
  percentSum = 0;


  getProjectLocations() {
    return this.locations.slice();
  }

  constructor() { }

  isLocationValid(newProjectLocation: ProjectLocation): boolean {
    console.log("percent sum ",this.percentSum);
    if(Number(newProjectLocation.percent) > 0 && newProjectLocation.location.district && newProjectLocation.location.county) {
      if ((this.percentSum + Number(newProjectLocation.percent) <= 100) &&
        (!this.distNames.find(name => name === newProjectLocation.location.district))) {
        this.distNames.push(newProjectLocation.location.district);
        console.log("mta");
        return true;
      }
    }
    return false;
  }

  addLocation(newProjectLocation: ProjectLocation) {
    this.locations.push(newProjectLocation);
    this.percentSum += Number(newProjectLocation.percent);
  }

  getDistricts(county: string): string[] {
    switch(county) {
      case "Berat":
        this.districts = this.berat.slice();
        break;
      case "Dibër":
        this.districts = this.berat.slice();
        break;
      case "Durrës":
        this.districts = this.durres.slice();
        break;
      case "Elbasan":
        this.districts = this.elbasan.slice();
        break;
      case "Fier":
        this.districts = this.fier.slice();
        break;
      case "Gjirokastër":
        this.districts = this.gjirokaster.slice();
        break;
      case "Korçë":
        this.districts = this.korce.slice();
        break;
      case "Kukës":
        this.districts = this.kukes.slice();
        break;
      default:
        this.districts = [...this.berat, ...this.diber, ...this.durres, ...this.elbasan,
          ...this.fier, ...this.gjirokaster, ...this.korce, ...this.kukes];
        break;
    }
    return this.districts.slice();
  }

  getCounties() {
    return this.counties.slice();
  }

  sortCountiesByName(sortType: number): Location[] {
    let locations: Location[];
    switch(sortType) {
      case 1:
        locations = this.locations.sort((l1, l2) => l1.county > l2.county ? 1 : -1);
        break;
      case 2:
        locations = this.locations.sort((l1, l2) => l1.county < l2.county ? 1 : -1);
        break;
      default:
        locations = this.locations.slice();
        break;
    }
    return locations;
  }

  sortDistrictsByName(sortType: number): Location[] {
    let locations: Location[];
    switch(sortType) {
      case 1:
        locations = this.locations.sort((l1, l2) => l1.district > l2.district ? 1 : -1);
        break;
      case 2:
        locations = this.locations.sort((l1, l2) => l1.district < l2.district ? 1 : -1);
        break;
      default:
        locations = this.locations.slice();
        break;
    }
    return locations;
  }

}
