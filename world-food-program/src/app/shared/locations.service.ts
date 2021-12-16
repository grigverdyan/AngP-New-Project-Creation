// import { Injectable } from '@angular/core';
// // import {Location, Sector} from '../models/exports';
// import {DISTRICTS} from "../data/location.data";
// import {Dropdown} from "../models/dropdown";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class LocationsService {
//   locations: Location[] = [];
//   distNames: string[] = [];
//   districts: Dropdown[] = DISTRICTS;
//   percentSum = 0;
//
//
//   getAllLocations() {
//     return this.locations.slice();
//   }
//
//   constructor() { }
//
//   isLocationValid(newLocation: Location): boolean {
//     console.log("percent sum ",this.percentSum);
//     if(Number(newLocation.locationPercent) > 0 && newLocation.district && newLocation.county) {
//       if ((this.percentSum + Number(newLocation.locationPercent) <= 100) &&
//         (!this.distNames.find(name => name === newLocation.district))) {
//         this.distNames.push(newLocation.district);
//         console.log("mta");
//         return true;
//       }
//     }
//     return false;
//   }
//
//   addLocation(newLocation: Location) {
//     this.locations.push(newLocation);
//     this.percentSum += Number(newLocation.locationPercent);
//   }
//
//   getDistricts(county: string): string[] {
//     switch(county) {
//       case "Berat":
//         this.districts = this.berat.slice();
//         break;
//       case "Dibër":
//         this.districts = this.berat.slice();
//         break;
//       case "Durrës":
//         this.districts = this.durres.slice();
//         break;
//       case "Elbasan":
//         this.districts = this.elbasan.slice();
//         break;
//       case "Fier":
//         this.districts = this.fier.slice();
//         break;
//       case "Gjirokastër":
//         this.districts = this.gjirokaster.slice();
//         break;
//       case "Korçë":
//         this.districts = this.korce.slice();
//         break;
//       case "Kukës":
//         this.districts = this.kukes.slice();
//         break;
//       default:
//         this.districts = [...this.berat, ...this.diber, ...this.durres, ...this.elbasan,
//           ...this.fier, ...this.gjirokaster, ...this.korce, ...this.kukes];
//         break;
//     }
//     return this.districts.slice();
//   }
//
//   getCounties() {
//     return this.counties.slice();
//   }
//
//   sortCountiesByName(sortType: number): Location[] {
//     let locations: Location[];
//     switch(sortType) {
//       case 1:
//         locations = this.locations.sort((l1, l2) => l1.county > l2.county ? 1 : -1);
//         break;
//       case 2:
//         locations = this.locations.sort((l1, l2) => l1.county < l2.county ? 1 : -1);
//         break;
//       default:
//         locations = this.locations.slice();
//         break;
//     }
//     return locations;
//   }
//
//   sortDistrictsByName(sortType: number): Location[] {
//     let locations: Location[];
//     switch(sortType) {
//       case 1:
//         locations = this.locations.sort((l1, l2) => l1.district > l2.district ? 1 : -1);
//         break;
//       case 2:
//         locations = this.locations.sort((l1, l2) => l1.district < l2.district ? 1 : -1);
//         break;
//       default:
//         locations = this.locations.slice();
//         break;
//     }
//     return locations;
//   }
//
// }
