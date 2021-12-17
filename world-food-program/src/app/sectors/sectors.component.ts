import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import { SectorService } from "../shared/sectors.service";
import { Dropdown } from "../models/dropdown";
import { ProjectSector } from "../models/project.sector";
import {Sector} from "../models/sector";
import {ProjectLocation} from "../models/project.location";
import {Location} from "../models/location";

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent implements OnInit {
  projectSectors: ProjectSector[] = [];
  isSecInvalid = false;
  sectorTypes: Dropdown[] = [];
  sortType = 0;

  sectorTable = this.fb.group({
    tableRows: this.fb.array(this.projectSectors)
  });
  sectorForm = this.fb.group({
    sectorName: ['', Validators.required],
    sectorPercent: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private sectorService: SectorService) {}
  ngOnInit(): void {
    this.projectSectors = this.sectorService.getProjectSectors();
    this.sectorTypes = this.sectorService.getSectorTypes();
  }
  get sectorName() {
    return this.sectorForm.get("sectorName");
  }
  get sectorPercent() {
    return this.sectorForm.get("sectorPercent");
  }
  get tableRows() {
    return this.sectorTable.controls["tableRows"] as FormArray;
  }
  get getFormControls() {
    const control = this.sectorTable.get('tableRows') as FormArray;
    return control;
  }

  isSectorValid() {
    let newSector= this.sectorForm.value;
    let projectSector = {} as ProjectSector;
    let sector = {} as Sector;
    let sectorId = this.sectorTypes.find(s => s.value === newSector.sector).id;
    console.log(sectorId)
    // projectSector.percent = newSector.sectorPercent;
    // sector.name = newSector.sectorName;
    // sector.id = sectorId;
    // projectSector.sector = sector;
    // if(this.sectorService.isSectorValid(projectSector)){
    //   projectSector.projectId = 1;
    //   this.addSector(projectSector);
    //   this.sectorService.addInvalidId(sectorId);
    // } else {
    //   this.isSecInvalid = true;
    //   console.log('Sector is not valid!') ;
    // }
  }

  // addLoc(projectLocation: ProjectLocation) {
  //   this.locService.addLocation(projectLocation);
  //   this.projectLocations.push(projectLocation);
  //   //this.tableRows.push(this.locationForm);
  //   //this.projectLocations = this.locService.getProjectLocations();
  //   console.log(this.projectLocations);
  //   this.isLocInvalid = false;
  //   this.addLocOpen = !this.addLocOpen;
  //   this.locationForm.reset();
  //   console.log(this.locationTable);
  // }

  addSector(projectSector: ProjectSector) {
   this.sectorService.addSector(projectSector);
   this.projectSectors.push(projectSector);
   this.isSecInvalid = false;
   this.sectorForm.reset();
   console.log(this.sectorForm);
    // // this.newSector.name = this.sectorForm.get("sectorName")?.value.name;
    // let newSector = {} as Sector;
    // // let newProjectSector = {} as ProjectSector;
    // let sector = this.sectorForm.value;
    // console.log(sector)
    // newProjectSector.percent = sector.sectorPercent;
    // newProjectSector.sectorId = 1;
    // sector = this.sectorTypes.find(s => s.value === sector.sectorName)
    // newSector.name = sector.value;
    // newSector.id = sector.id;
    // // console.log(this.newSector);
    //
    // newProjectSector.sectorId = newSector.id;
    // newProjectSector.sector = newSector;
    // this.sectorService.addSector(newProjectSector);
    // this.tableRows.push(this.sectorForm);
    // this.projectSectors = this.sectorService.getProjectSectors();
    // this.isSecInvalid = false;
    // this.sectorForm.reset();
    // console.log(this.sectorTable);
  }


  // sortSecByName() {
  //   this.sortType += 1;
  //   if(this.sortType % 3 === 0) {
  //     this.sectors = this.sectorService.getAllSectors();
  //   } else {
  //     this.sectors = this.sectorService.sortSectorsByName(this.sortType % 3);
  //   }
  //   console.log(this.sectors);
  // }

}
