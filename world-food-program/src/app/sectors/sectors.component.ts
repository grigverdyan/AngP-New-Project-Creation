import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import { SectorService } from "../sectors.service";
import { Sector} from "../exports";

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})

/*
Add-ը սխալա աշխատում
 */

export class SectorsComponent implements OnInit {
  sectors: Sector[] = this.sectorService.getAllSectors();

  sectorTable = this.fb.group({
    tableRows: this.fb.array(this.sectors)
  });

  sector: Sector = {
    sectorName: "", sectorPercent: 0
  };

  sectorForm = new FormGroup({
    sectorName: new FormControl(),
    sectorPercent:new FormControl()
  });

  constructor(
    private fb: FormBuilder,
    private sectorService: SectorService
    ) {}

  ngOnInit(): void {
//    this.sectors = this.sectorService.getAllSectors();
  }

  addRow() {
    // let secName = this.sectorForm.get('sectorName')?.value;
    // let secPerc = this.sectorForm.get('sectorPercent')?.value;
  //  this.sectorService.addSector(secName, secPerc);
    this.sector.sectorName = this.sectorForm.get('sectorName')?.value;
    this.sector.sectorPercent = this.sectorForm.get('sectorPercent')?.value;
   // this.sectors = this.sectorService.getAllSectors();
    this.sectors.push(this.sector);
    this.tableRows.push(this.sectorForm);
    console.log(this.sectorTable);
  }

  get tableRows() {
    return this.sectorTable.controls["tableRows"] as FormArray;
  }

  get getFormControls() {
    const control = this.sectorTable.get('tableRows') as FormArray;
    return control;
  }

}
