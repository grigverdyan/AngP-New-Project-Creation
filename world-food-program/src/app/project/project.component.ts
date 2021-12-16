import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormArray,
  FormBuilder, FormGroup,
  Validators
} from "@angular/forms";
import {STATUSES} from "../data/implementation.status";
import {Dropdown} from "../models/dropdown";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  statuses: Dropdown[] = [];
  projectForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.statuses = STATUSES;
    this.projectForm= this.fb.group({
      projectCode: ['', [Validators.required, Validators.minLength(6)]],
      projectTitle: ['', [Validators.required, Validators.minLength(8)]],
      description: [''],
      details: this.fb.group({
        implStatus: ['', Validators.required],
        plannedStartDate: ['', Validators.required],
        plannedEndDate: [''],
        duration: ['']
      })
    })
  }

  get projectCode() {
    return this.projectForm.get('projectCode');
  }

  get projectTitle() {
    return this.projectForm.get('projectTitle');
  }

  get description() {
    return this.projectForm.get('description');
  }

  get implStatus() {
    return this.projectForm.get('implStatus');
  }

  get plannedStartDate() {
    return this.projectForm.get('plannedStartDate');
  }

  get plannedEndDate() {
    return this.projectForm.get('plannedEndDate');
  }

  get duration() {
    return this.projectForm.get('duration');
  }

  // get getControl(){
  //   return this.projectForm.controls;
  // }

  changeStatus(e: any) {
    this.implStatus!.setValue(e.target.value, {
      onlySelf: true
    });
  }

  onSubmit(){
    console.log(this.projectForm);
  }

}
