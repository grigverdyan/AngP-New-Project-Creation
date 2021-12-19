import {Component, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import { SectorService } from "../shared/sectors.service";
import { Dropdown } from "../models/dropdown";
import { ProjectSector } from "../models/project.sector";
import {Sector} from "../models/sector";
import { EventEmitter } from '@angular/core';

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
  @Output() sectorsEvent = new EventEmitter<any>();

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
    projectSector.percent = newSector.sectorPercent;
    sector.name = newSector.sectorName;
    sector.id = sectorId;
    projectSector.sector = sector;
    if(this.sectorService.isSectorValid(projectSector)){
      projectSector.projectId = 1;
      this.addSector(projectSector);
      this.sectorService.addInvalidId(sectorId);
    } else {
      this.isSecInvalid = true;
      console.log('Sector is not valid!') ;
    }
  }

  addSector(projectSector: ProjectSector) {
   this.sectorService.addSector(projectSector);
   this.projectSectors.push(projectSector);
   this.tableRows.push(this.sectorForm);
   this.isSecInvalid = false;
   this.sectorForm.reset();
   console.log(this.sectorForm);
  }


  sortSecByName() {
    this.sortType += 1;
    this.projectSectors = this.sectorService.sortSectorsByName(this.sortType % 3);
  }

  sectorsToProject() {
    this.sectorsEvent.emit(this.projectSectors);
  }
}
