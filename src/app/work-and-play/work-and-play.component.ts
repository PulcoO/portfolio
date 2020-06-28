import { Component, HostBinding, OnInit } from '@angular/core';
import { pageAnimations } from './work-and-play-animations';

// MODELS
import { WorkAndPlay } from '../models/WorkAndPlay/WorkAndPlay.model';
// SERVICES
import { WorkAndPlayService } from '../services/workAndPlay/work-and-play.service';

@Component({
  selector: 'app-work-and-play',
  templateUrl: './work-and-play.component.html',
  styleUrls: ['./work-and-play.component.scss'],
  animations: [pageAnimations],
})
export class WorkAndPlayComponent implements OnInit {
  @HostBinding('@pageAnimations')
  animatePage = true;
  
  private works : WorkAndPlay[];

  


  constructor(
    private workService : WorkAndPlayService
  ) { }

  ngOnInit() {
    //populate 
    this.getWorks();
  }

  getWorks(): void {
    this.workService.getWorks()
        .subscribe(works => this.works= works);
  }

}
