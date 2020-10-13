import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  animate, state, style, transition, trigger
} from '@angular/animations';
//MODELS
import { Project } from '../../_Models/Project/Project.model'
import { ProjectImage } from '../../_Models/Project/ProjectImage.model'
//SERVICES
import { ProjectService } from '../../_Services/Project/Project.service';
declare var $ :any;


@Component({
  selector: 'app-work-and-play-details',
  templateUrl: './work-and-play-details.component.html',
  styleUrls: ['./work-and-play-details.component.scss'],
})

export class WorkAndPlayDetailsComponent implements OnInit {

  public project : Project;
  
  backgroundColor: string = "";

  public imagesPath = "./assets/projects/";


  public image1 : string;
  public image2 : string;
  public image3 : string;
  public image4 : string;
  public image5 : string;

  constructor( 
    private _activeRoute: ActivatedRoute,
    private _projectService : ProjectService
    ) {
   }

  ngOnInit() {
    this._activeRoute.params.subscribe( routeParams => {
      this.getProject()
    })
    this.defineImage(this.project);
    
  }

  private getProject(){
    const PROJECTNAME = this._activeRoute.snapshot.paramMap.get('ProjectName')
    this._projectService.getProjectsByName(PROJECTNAME)
      .subscribe(project => this.project = project)
  }

  private defineImage(project){
    switch (project.id){
      case "workAndPlay-1": {
        console.log(project.images)
        this.image1 = this.imagesPath + project.images[0].name + "-" + project.images[0].id + "." + project.images[0].format;
        this.image2 = this.imagesPath + project.images[1].name + "-" + project.images[1].id + "." + project.images[1].format;
        this.image3 = this.imagesPath + project.images[2].name + "-" + project.images[2].id + "." + project.images[2].format;
        this.image4 = this.imagesPath + project.images[3].name + "-" + project.images[1].id + "." + project.images[1].format;
        this.image5 = this.imagesPath + project.images[4].name + "-" + project.images[1].id + "." + project.images[1].format;
        break;
      }
      case "workAndPlay-2": {
        this.image1 = this.imagesPath + project.images[0].name + "-" + project.images[0].id + "." + project.images[0].format;
        this.image2 = this.imagesPath + project.images[1].name + "-" + project.images[1].id + "." + project.images[1].format;
        this.image3 = this.imagesPath + project.images[2].name + "-" + project.images[2].id + "." + project.images[2].format;
        this.image4 = this.imagesPath + project.images[3].name + "-" + project.images[3].id + "." + project.images[3].format;
        this.image5 = this.imagesPath + project.images[4].name + "-" + project.images[4].id + "." + project.images[4].format;
        break;
      }
    }
  }
  
}
