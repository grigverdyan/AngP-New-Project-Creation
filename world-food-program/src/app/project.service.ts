import { Injectable } from '@angular/core';
import { Project } from'./exports'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects!: Project[];

  constructor() { }
}
