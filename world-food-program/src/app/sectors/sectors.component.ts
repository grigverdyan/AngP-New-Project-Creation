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
  touchedRows: any;
  goals: string[] = [
    'Agriculture', 'Administrative', 'Economy', 'Health'
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.touchedRows = [];
    this.sectorTable = this.fb.group({
      tableRows: this.fb.array([])
    });
    this.newRow();
  }

  initiateRow(): FormGroup {
    return this.fb.group({
      sectorName: [''],
      percent: ['']
    });
  }

  newRow() {
    const control = this.sectorTable.get('tableRows') as FormArray;
    control.push(this.initiateRow());
  }

  addRow() {

  }

  get getFormControls() {
    const control = this.sectorTable.get('tableRows') as FormArray;
    return control;
  }

}
