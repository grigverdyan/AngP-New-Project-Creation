import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from "@angular/forms";
import {LocationsService} from "../shared/locations.service";
import { Location } from '../models/location';
import {ProjectLocation} from "../models/project.location";
import {Dropdown} from "../models/dropdown";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  projectlocations: ProjectLocation[] = [];
  location = {}  as Location ;
  districts: Dropdown[] = [];
  counties: Dropdown[] = [];
  isLocInvalid = false;
  addLocOpen = false;
  countySortType = 0;
  districtSortType = 0;

  locationTable = this.fb.group({
    tableRows: this.fb.array(this.projectlocations)
  });
  locationForm = this.fb.group({
    county: ['', Validators.required],
    district: ['', Validators.required],
    locationPercent: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private locService: LocationsService
    ) { }

  ngOnInit(): void {
    this.projectlocations = this.locService.getProjectLocations();
    this.counties = this.locService.getCounties();
  }

  get tableRows() {
    return this.locationTable.controls["tableRows"] as FormArray;
  }

  get getFormControls() {
    const control = this.locationTable.get('tableRows') as FormArray;
    return control;
  }

  get county() {
    return this.locationForm.get("county");
  }

  get district() {
    return this.locationForm.get("district");
  }

  get locationPercent() {
    return this.locationForm.get("locationPercent");
  }

  add() {
    this.addLocOpen = !this.addLocOpen;
  }

  close() {
    this.addLocOpen = !this.addLocOpen;
    this.locationForm.reset();
    this.isLocInvalid = false;
  }

  getDist(county: string): boolean {
    this.districts = this.locService.getDistricts(county);
    return true;
  }

  isValid() {
    let newLocation= this.locationForm.value;
    let newProjectLocation!: ProjectLocation;
    newProjectLocation.percent = newLocation.percent;
    newProjectLocation.location.county = newLocation.county;
    newProjectLocation.location.district = newLocation.district;
    if(this.locService.isLocationValid(newProjectLocation)){
      newProjectLocation.locationId = 1;
      newProjectLocation.locationId = newLocation.id;
      newProjectLocation.location.id = newLocation.id;
      this.addLoc(newProjectLocation);
    } else {
      this.isLocInvalid = true;
      console.log('Location is not valid!') ;
    }
  }

  addLoc(newProjectLocation: ProjectLocation) {
    // let newLocation= this.locationForm.value;
    this.locService.addLocation(newProjectLocation);
    this.tableRows.push(this.locationForm);
    this.projectlocations = this.locService.getProjectLocations();
    this.isLocInvalid = false;
    this.addLocOpen = !this.addLocOpen;
    this.locationForm.reset();
    console.log(this.locationTable);
  }

  // sortCountyByName() {
  //   this.countySortType += 1;
  //   this.districtSortType = 0;
  //   this.locations = this.locService.sortCountiesByName(this.countySortType % 3);
  // }

  // sortDistrictByName() {
  //   this.districtSortType += 1;
  //   this.countySortType = 0;
  //   this.locations = this.locService.sortDistrictsByName(this.districtSortType % 3);
  // }
}
