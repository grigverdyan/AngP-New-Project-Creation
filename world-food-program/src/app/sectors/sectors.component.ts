import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent implements OnInit {
  sectorTable!: FormGroup;
  control!: FormArray;
  //touchedRows: any;
  goals = [
    'Agriculture', 'Administrative', 'Economy', 'Health'
  ];

  sectorForm = this.fb.group({
    sectorName: [''],
    sectorPercent: ['']
  });

  // touchedRows:any[] = [];
  // sectorTable = this.fb.group({
  //   tableRows: this.fb.array([])
  // });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.touchedRows = [];
    this.sectorTable = this.fb.group({
      tableRows: this.fb.array([])
    });
  }

  // initiateRow(): FormGroup {
  //   return this.fb.group({
  //     sectorName: [''],
  //     percent: ['']
  //   });
  // }
  //
  // newRow() {
  //   const control = this.sectorTable.get('tableRows') as FormArray;
  //   control.push(this.initiateRow());
  // }

  addRow() {
    // const sectorForm = this.fb.group({
    //   sectorName: [''],
    //   sectorPercent: ['']
    // });
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
