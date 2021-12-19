import { Injectable } from '@angular/core';
import { Project } from '../models/project'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [];
  existingProjectIds: string[] = [];

  constructor() { }

  getProjects() {
    return this.projects.slice();
  }

  isProjectValid(project: Project): boolean {
    if(!this.existingProjectIds.find(id => id === project.code)) {
      this.existingProjectIds.push(project.code);
      return true;
    }
    return false;
  }

  addProject(project: Project) {
    this.projects.push(project);
  }

}
