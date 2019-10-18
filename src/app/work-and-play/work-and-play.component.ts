import { Component, HostBinding, OnInit } from '@angular/core';
import { workAndPlayAnimations, pageAnimations } from './work-and-play-animations';

@Component({
  selector: 'app-work-and-play',
  templateUrl: './work-and-play.component.html',
  styleUrls: ['./work-and-play.component.scss'],
  animations: [workAndPlayAnimations, pageAnimations],
})
export class WorkAndPlayComponent implements OnInit {
  @HostBinding('@pageAnimations')
  public animatePage = true;

  constructor() { }

  ngOnInit() {
  }

}
