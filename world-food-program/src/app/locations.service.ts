import { Injectable } from '@angular/core';
import { Location } from './exports';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  locations: Location[] = [
    {county: 'Syunik', district: 'Kapan', locationPercent: 15},
    {county: 'Lori', district: 'Vanadzor', locationPercent: 45}
  ];

  getAllLocations() {
    return this.locations.slice();
  }

  constructor() { }
}
