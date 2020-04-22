import { Component, HostBinding, OnInit } from '@angular/core';
import { pageAnimations } from './work-and-play-animations';
import { workAndPlayArray } from './work-and-play-list'

@Component({
  selector: 'app-work-and-play',
  templateUrl: './work-and-play.component.html',
  styleUrls: ['./work-and-play.component.scss'],
  animations: [pageAnimations],
})
export class WorkAndPlayComponent implements OnInit {
  @HostBinding('@pageAnimations')
  workAndPlayArray = workAndPlayArray

  animatePage = true;


  constructor() { }

  ngOnInit() {
  }

}
