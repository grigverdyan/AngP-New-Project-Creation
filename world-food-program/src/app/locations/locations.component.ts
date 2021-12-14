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
  });

  isLocInvalid = false;

  counties = [
    "Berat", "Dibër", "Durrës", "Elbasan", "Fier", "Gjirokastër", "Korçë", "Kukës"
  ];
  berat = [
    "Kuçovë", "Poliçan", "Skrapar", "Ura Vajgurore"
  ];
  diber = [
    "Bulqizë", "Dibër", "Klos", "Mat"
  ];
  elbasan = [
    "Belsh", "Cërrik", "Elbasan", "Gramsh", "Librazhd", "Peqin", "Prrenjas"
  ];
  durres = [
    "Gjepalaj", "Durrës", "Ishëm", "Katund i Ri", "Maminas"
  ];
  fier = [
    "Cakran", "Dërmenas", "Fier", "Frakull", "Kuman", "Kurjan"
  ];
  korce = [
    "Drenovë", "Gorë", "Korçë", "Lekas", "Libonik", "Maliq"
  ];
  kukes = [
    "Kukës", "Arrën", "Bicaj", "Bushtricë", "Grykë-Çaje", "Kalis"
  ];
  gjirokaster = [
    "Antigonë", "Cepo", "Gjirokastër", "Lazarat", "Libohovë", "Lunxhëri"
  ];
  districts: string[] = [...this.berat, ...this.diber, ...this.durres, ...this.elbasan,
    ...this.fier, ...this.gjirokaster, ...this.korce, ...this.kukes];

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

  getDistricts(county: string): boolean {
    if(county === "Berat") {
      this.districts = this.berat.slice();
    }
    if(county === "Dibër") {
      this.districts = this.diber.slice();
    }
    if(county === "Durrës") {
      this.districts = this.durres.slice();
    }
    if(county === "Elbasan") {
      this.districts = this.elbasan.slice();
    }
    if(county === "Fier") {
      this.districts = this.fier.slice();
    }
    if(county === "Gjirokastër") {
      this.districts = this.gjirokaster.slice();
    }
    if(county === "Korçë") {
      this.districts = this.korce.slice();
    }
    if(county === "Kukës") {
      this.districts = this.kukes.slice();
    }
    return true;
  }

  isValid() {
    let newLocation= this.locationForm.value;
    if(this.locService.isLocationValid(newLocation)){
      this.addLoc();
      console.log("eli mta");
    } else {
      this.isLocInvalid = !this.isLocInvalid;
      console.log('Location is not valid!') ;
    }
  }

  addLoc() {
    let newLocation= this.locationForm.value;
    this.locService.addLocation(newLocation);
    this.tableRows.push(this.locationForm);
    this.locations = this.locService.getAllLocations();
    console.log(this.locationTable);
  }

}
