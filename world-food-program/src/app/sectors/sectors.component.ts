import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  Validators
} from "@angular/forms";
import { SectorService } from "../shared/sectors.service";
import { Dropdown } from "../models/dropdown";
import { ProjectSector } from "../models/project.sector";
import {Sector} from "../models/sector";

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
  newSector = {} as Sector;
  newProjectSector!: ProjectSector;

  sectorTable = this.fb.group({
    tableRows: this.fb.array(this.projectSectors)
  });

  sectorForm = this.fb.group({
    sectorName: ['', Validators.required],
    sectorPercent: [, Validators.required],
  });


  constructor(
    private fb: FormBuilder,
    private sectorService: SectorService
    ) {}

  ngOnInit(): void {
    this.projectSectors = this.sectorService.getProjectSectors();
    this.sectorTypes = this.sectorService.getSectorTypes();
    this.newProjectSector.projectId = 1;
  }

  get sectorName() {
    return this.sectorForm.get("sectorName");
  }

  get sectorPercent() {
    return this.sectorForm.get("sectorPercent");
  }

  // isValid() {
  //   let newSector= this.sectorForm.value;
  //   if(this.sectorService.isSectorValid(newSector)){
  //     this.addSector();
  //   } else {
  //     this.isSecInvalid = true;
  //     console.log('Sector is not valid!') ;
  //   }
  // }

  addSector() {
    // this.newSector.name = this.sectorForm.get("sectorName")?.value.name;
    let sector = this.sectorForm.value;
    this.newSector.name = sector.value.name;
    console.log(this.newSector.name);
    // this.newSector.id = this.sectorForm.get("sectorName")?.value.id;
    // this.newProjectSector.sectorId = this.newSector.id;
    // this.newProjectSector.percent = this.sectorForm.get("sectorPercent")?.value;
    // this.newProjectSector.sector = this.newSector;
    // // let newSector= this.sectorForm.value;
    // this.sectorService.addSector(this.newProjectSector);
    // this.tableRows.push(this.sectorForm);
    // this.projectSectors = this.sectorService.getProjectSectors();
    // this.isSecInvalid = false;
    // this.sectorForm.reset();
    // console.log(this.sectorTable);
  }

  get tableRows() {
    return this.sectorTable.controls["tableRows"] as FormArray;
  }

  get getFormControls() {
    const control = this.sectorTable.get('tableRows') as FormArray;
    return control;
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
