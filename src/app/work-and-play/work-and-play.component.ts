import { Component, OnInit } from '@angular/core';
import { workAndPlayAnimations } from './work-and-play-animations';

@Component({
  selector: 'app-work-and-play',
  templateUrl: './work-and-play.component.html',
  styleUrls: ['./work-and-play.component.scss'],
  animations: [workAndPlayAnimations],
})
export class WorkAndPlayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
