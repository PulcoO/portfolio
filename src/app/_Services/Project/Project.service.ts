import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs'; // afin de pouvoir passer en assin
import { map, catchError } from 'rxjs/operators';

import { Project } from "../../_Models/Project/Project.model";

import { PROJECTS } from '../../_Data/Projects';


@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  constructor() { }

  // La méthode est désormé asynchrone
  public getProjects(): Observable<Project[]>{
    return of (PROJECTS);
  }

  /**
  * @param {string} projectName
  */
  public getProjectsByName(projectName): Observable<Project>{
    return this.getProjects().pipe(
      map(PROJECTS => PROJECTS.find(Project => Project.name == projectName))
    )      
  }

  /**
  * @param {string} projectId
  */
  public getProjectsById(projectId): Observable<Project>{
    return this.getProjects().pipe(
      map(PROJECTS => PROJECTS.find(Project => Project.name == projectId))
    )      
  }

  
}
