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

  isSecInvalid = false;

  constructor(
    private fb: FormBuilder,
    private sectorService: SectorService
    ) {}

  ngOnInit(): void {
  }

  isValid() {
    let newSector= this.sectorForm.value;
    if(this.sectorService.isSectorValid(newSector)){
      this.addSector();
    } else {
      this.isSecInvalid = !this.isSecInvalid;
      console.log('Sector is not valid!') ;
    }
  }

  addSector() {
    let newSector= this.sectorForm.value;
    this.sectorService.addSector(newSector);
    this.tableRows.push(this.sectorForm);
    this.sectors = this.sectorService.getAllSectors();
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
