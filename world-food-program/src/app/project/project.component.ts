import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder, FormGroup,
  Validators
} from "@angular/forms";
import {STATUSES} from "../data/implementation.status";
import {Dropdown} from "../models/dropdown";
import {Project} from "../models/project";
import {ProjectLocation} from "../models/project.location";
import {Location} from "../models/location";
import {ProjectSector} from "../models/project.sector";
import {ProjectInfo} from "../models/project.info";
import {ProjectService} from "../shared/project.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  statuses: Dropdown[] = [];
  projectForm = this.fb.group({
      projectCode: ['', [Validators.required, Validators.minLength(6)]],
      projectTitle: ['', [Validators.required, Validators.minLength(8)]],
      description: [''],
      implStatus: ['', Validators.required]
    });
  durationForm: any;
  locations: ProjectLocation[] = [];
  sectors: ProjectSector[] = [];

  constructor(private fb: FormBuilder, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.statuses = STATUSES;
  }

  getTimeData($event: any) {
   this.durationForm = $event;
   //console.log(this.durationForm);
  }
  getLocationData($event: any) {
    this.locations = $event;
    //console.log(this.locations);
  }
  getSectorsData($event: any) {
    this.sectors = $event;
    //console.log(this.sectors);
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
  get endDate() {
    return this.projectForm.get('endDate');
  }
  get duration() {
    return this.projectForm.get('duration');
  }

  isProjectValid() {
    let newProject = this.projectForm.value;
    let project = {} as Project;
    let info = {}  as ProjectInfo;
    info.status = newProject.implStatus;
    info.startDate = this.durationForm.startDate;
    info.endDate = this.durationForm.endDate;
    info.duration = this.durationForm.duration;
    project.projectInfo = info;
    project.sectors = this.sectors;
    project.locations = this.locations;
    project.code = newProject.code;
    project.title = newProject.title;
    if (this.projectService.isProjectValid(newProject)) {
      this.addProject(project);
    } else {
      console.log('Project is not valid!');
    }
  }

  addProject(project: Project) {
    this.projectService.addProject(project);
    console.log(project);
  }

}
