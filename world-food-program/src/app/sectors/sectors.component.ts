import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import { SectorService } from "../sectors.service";
import { Sector} from "../exports";

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})

export class SectorsComponent implements OnInit {
  sectors: Sector[] = [];
  isSecInvalid = false;
  secNames: string[] = [];
  sortType = 0;

  sectorTable = this.fb.group({
    tableRows: this.fb.array(this.sectors)
  });

  sectorForm = new FormGroup({
    sectorName: new FormControl(),
    sectorPercent:new FormControl()
  });


  constructor(
    private fb: FormBuilder,
    private sectorService: SectorService
    ) {}

  ngOnInit(): void {
    this.sectors = this.sectorService.getAllSectors();
    this.secNames = this.sectorService.getSectorNames();
  }

  isValid() {
    let newSector= this.sectorForm.value;
    if(this.sectorService.isSectorValid(newSector)){
      this.addSector();
    } else {
      this.isSecInvalid = true;
      console.log('Sector is not valid!') ;
    }
  }

  addSector() {
    let newSector= this.sectorForm.value;
    this.sectorService.addSector(newSector);
    this.tableRows.push(this.sectorForm);
    this.sectors = this.sectorService.getAllSectors();
    this.isSecInvalid = false;
    this.sectorForm.reset();
    console.log(this.sectorTable);
  }

  get tableRows() {
    return this.sectorTable.controls["tableRows"] as FormArray;
  }

  get getFormControls() {
    const control = this.sectorTable.get('tableRows') as FormArray;
    return control;
  }

  sortSecByName() {
    this.sortType += 1;
    this.sectors = this.sectorService.sortSectorsByName(this.sortType % 3);

  }
}
