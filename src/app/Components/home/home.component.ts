import { Component, OnInit, HostBinding, EventEmitter, Input, Output, } from '@angular/core';
import {pageAnimations, titleAnimations} from './home-animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations : [
    pageAnimations,
    titleAnimations,
  ],
})

export class HomeComponent implements OnInit {
  @HostBinding('@pageAnimations')
public animation : boolean = true;
public timer : any;

public maxTitleInt: number = 6;
public activePointClass: string = "fas fa-circle fa-lg";
public nonActivePointClass: string = "far fa-circle fa-lg";
public activePointId: string = "circle-point-1";

public activeTitleClass: string = "title";
public nonActiveTitleClass: string = "title hidden";
public activeTitleId: string = "title-1";

backgroundColor: string = "#FAC20B"
backgroundColorArray = ["#FAC20B","#02C9C9","#E9A1B9","#333333","#C2D53F","#E8A0B8"];

  constructor() { }

  ngOnInit() {
    this.changeTitleInterval();
  }

  changeTitleInterval()
  {
      this.timer = setInterval(() =>{
        this.incrementId(this.activePointId);
      }, 10000);
  }

  incrementId(id: string)
  {
    let idNum = parseInt(id.split('-')[2]);
    if (idNum && Number(idNum)){
      idNum = idNum%this.maxTitleInt + 1;
      this.activePointId = 'circle-point-' + idNum;
      this.changeTitle(this.activePointId);
    }else{
      return console.log('error');
    }

  }

  addActiveOnClick($event) {
    clearInterval(this.timer);
    this.timer = 0;
    this.changeTitleInterval();
    if ($event.target.id == this.activePointId){
      return;
    }else{
      this.activePointId = $event.target.id;
    }
    this.changeTitle($event.target.id);
  }
  
  changeTitle(id: string){
    let idNum = parseInt(id.split('-')[2]);
    if (idNum && Number(idNum)){
      this.activeTitleId = "title-"+ idNum;
      this.backgroundColor = this.backgroundColorArray[idNum-1];
      this.animation = !this.animation;
    }
  }
}
