import { Injectable } from '@angular/core';
import {Location, Sector} from './exports';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  locations: Location[] = [];
  distNames: string[] = [];
  districts: string[] = [];
  percentSum = 0;

  berat = ["Kuçovë", "Poliçan", "Skrapar", "Ura Vajgurore"];
  diber = ["Bulqizë", "Dibër", "Klos", "Mat"];
  elbasan = ["Belsh", "Cërrik", "Elbasan", "Gramsh", "Librazhd", "Peqin", "Prrenjas"];
  durres = ["Gjepalaj", "Durrës", "Ishëm", "Katund i Ri", "Maminas"];
  fier = ["Cakran", "Dërmenas", "Fier", "Frakull", "Kuman", "Kurjan"];
  korce = ["Drenovë", "Gorë", "Korçë", "Lekas", "Libonik", "Maliq"];
  kukes = ["Kukës", "Arrën", "Bicaj", "Bushtricë", "Grykë-Çaje", "Kalis"];
  gjirokaster = ["Antigonë", "Cepo", "Gjirokastër", "Lazarat", "Libohovë", "Lunxhëri"];
  counties = ["Berat", "Dibër", "Durrës", "Elbasan", "Fier", "Gjirokastër", "Korçë", "Kukës"];

  getAllLocations() {
    return this.locations.slice();
  }

  constructor() { }

  isLocationValid(newLocation: Location): boolean {
    console.log("percent sum ",this.percentSum);
    if(Number(newLocation.locationPercent) > 0 && newLocation.district && newLocation.county) {
      if ((this.percentSum + Number(newLocation.locationPercent) <= 100) &&
        (!this.distNames.find(name => name === newLocation.district))) {
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
