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
  projectLocations: ProjectLocation[] = [];
  districts: Dropdown[] = [];
  counties: Dropdown[] = [];
  isLocInvalid = false;
  addLocOpen = false;
  countySortType = 0;
  districtSortType = 0;

  locationTable = this.fb.group({
    tableRows: this.fb.array(this.projectLocations)
  });
  locationForm = this.fb.group({
    county: ['', Validators.required],
    district: ['', Validators.required],
    locationPercent: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, private locService: LocationsService) { }
  ngOnInit(): void {
    this.projectLocations = this.locService.getProjectLocations();
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
  getDist(): boolean {
    let countyName = this.locationForm.get("county")?.value;
    let county = this.counties.find(county => county.value === countyName);
    if(county) {
      this.districts = this.locService.getDistricts(county.id);
      return true;
    } else {
      return false;
    }
  }
  isValid() {
    let newLocation = this.locationForm.value;
    let projectLocation = {} as ProjectLocation;
    let location = {}  as Location;
    let id = this.districts.find(d => d.value === newLocation.district).id;
    projectLocation.locationId = id;
    projectLocation.percent = newLocation.locationPercent;
    location.county = newLocation.county;
    location.district = newLocation.district;
    projectLocation.location = location;
    if (this.locService.isLocationValid(projectLocation)) {
      this.addLoc(projectLocation);
      this.locService.addInvalidId(id);
    } else {
      this.isLocInvalid = true;
      console.log('Location is not valid!');
    }
  }
  addLoc(projectLocation: ProjectLocation) {
    this.locService.addLocation(projectLocation);
    this.projectLocations.push(projectLocation);
    this.tableRows.push(this.locationForm);
    //this.projectLocations = this.locService.getProjectLocations();
    console.log(this.projectLocations);
    this.isLocInvalid = false;
    this.addLocOpen = !this.addLocOpen;
    this.locationForm.reset();
    console.log(this.locationTable);
  }
  sortCountyByName() {
    this.countySortType += 1;
    this.districtSortType = 0;
    this.projectLocations = this.locService.sortByCountyName(this.countySortType % 3);
  }
  sortDistrictByName() {
    this.districtSortType += 1;
    this.countySortType = 0;
    this.projectLocations = this.locService.sortByDistrictName(this.districtSortType % 3);
  }
}
