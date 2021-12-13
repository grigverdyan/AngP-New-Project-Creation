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
  locations: Location[] = this.locService.getAllLocations();
  addLocOpen = false;
  locationTable = this.fb.group({
    tableRows: this.fb.array(this.locations)
  });
  locationForm = this.fb.group({
    county: new FormControl(),
    district: new FormControl(),
    locationPercent: new FormControl()
  })

  constructor(
    private fb: FormBuilder,
    private locService: LocationsService
    ) { }

  ngOnInit(): void {
  }

  get tableRows() {
    return this.locationTable.controls["tableRows"] as FormArray;
  }

  get getFormControls() {
    const control = this.locationTable.get('tableRows') as FormArray;
    return control;
  }

  addLocation() {
    // this.addLocOpen = !this.addLocOpen;


  }

  add() {
    this.addLocOpen = !this.addLocOpen;
  }

}
