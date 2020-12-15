import { Component, HostBinding, OnInit } from '@angular/core';
import { pageAnimations } from './work-and-play-animations';

// MODELS
import { Project } from '../../_Models/Project/Project.model';
// SERVICES
import { ProjectService } from '../../_Services/Project/Project.service';


@Component({
  selector: 'app-work-and-play',
  templateUrl: './work-and-play.component.html',
  styleUrls: ['./work-and-play.component.scss'],
  animations: [pageAnimations],
})

export class WorkAndPlayComponent implements OnInit {
  @HostBinding('@pageAnimations')
  animatePage = true;

  public imagesPathR = "./assets/projects/";
  public _projects : Project[];


  constructor(
    private _projectService : ProjectService
  ) { }

  ngOnInit() {
    //populate 
    this.getWorks();
  }

  getWorks(): void {
    this._projectService.getProjects()
        .subscribe(projects => this._projects= projects);
  }

}
