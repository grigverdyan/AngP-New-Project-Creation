import { Injectable } from '@angular/core';
import { Project } from '../models/exports'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects!: Project[];

  constructor() { }
}
