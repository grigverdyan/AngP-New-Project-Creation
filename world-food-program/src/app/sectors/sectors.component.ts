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
  sectors = this.sectorService.getSectors();

  sectorTable!: FormGroup;
  // sectorTable = this.fb.group({
  //   tableRows: this.fb.array(this.sectors)
  // });

  sector: Sector = {
    sectorName: "", sectorPercent: 0
  };

  sectorForm = new FormGroup({
    sectorName: new FormControl(this.sector.sectorName),
    sectorPercent:new FormControl(this.sector.sectorPercent)
  });

  constructor(
    private fb: FormBuilder,
    private sectorService: SectorService
    ) {}

  initSectorTable(): void {
    this.sectorTable = this.fb.group({
      tableRows: this.fb.array(this.sectors)
    });
  }
  ngOnInit(): void {
    this.sectorTable = this.fb.group({
        tableRows: this.fb.array(this.sectors)
      });
  }

  addRow() {
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
