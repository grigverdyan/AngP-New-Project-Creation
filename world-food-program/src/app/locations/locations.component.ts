import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl} from "@angular/forms";
import {LocationsService} from "../locations.service";
import { Location } from '../exports';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: Location[] = [];
  districts: string[] = [];
  counties: string[] = [];
  isLocInvalid = false;
  addLocOpen = false;
  countySortType = 0;
  districtSortType = 0;

  locationTable = this.fb.group({
    tableRows: this.fb.array(this.locations)
  });
  locationForm = this.fb.group({
    county: new FormControl(),
    district: new FormControl(),
    locationPercent: new FormControl()
  });

  constructor(
    private fb: FormBuilder,
    private locService: LocationsService
    ) { }

  ngOnInit(): void {
    this.locations = this.locService.getAllLocations();
    this.counties = this.locService.getCounties();
  }

  get tableRows() {
    return this.locationTable.controls["tableRows"] as FormArray;
  }

  get getFormControls() {
    const control = this.locationTable.get('tableRows') as FormArray;
    return control;
  }

  add() {
    this.addLocOpen = !this.addLocOpen;
  }

  close() {
    this.addLocOpen = !this.addLocOpen;
    this.locationForm.reset();
  }

  getDist(county: string): boolean {
    this.districts = this.locService.getDistricts(county);
    return true;
  }

  isValid() {
    let newLocation= this.locationForm.value;
    if(this.locService.isLocationValid(newLocation)){
      this.addLoc();
    } else {
      this.isLocInvalid = true;
      console.log('Location is not valid!') ;
    }
  }

  addLoc() {
    let newLocation= this.locationForm.value;
    this.locService.addLocation(newLocation);
    this.tableRows.push(this.locationForm);
    this.locations = this.locService.getAllLocations();
    this.isLocInvalid = false;
    this.addLocOpen = !this.addLocOpen;
    this.locationForm.reset();
    console.log(this.locationTable);
  }

  sortCntyByName() {
    this.countySortType += 1;
    this.locations = this.locService.sortCountiesByName(this.countySortType % 3);
  }

  sortDistByName() {
    this.districtSortType += 1;
    this.locations = this.locService.sortDistrictsByName(this.districtSortType % 3);
  }
}
