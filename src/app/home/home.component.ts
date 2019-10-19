import { Component, OnInit, HostBinding, EventEmitter, Input, Output, } from '@angular/core';
import {pageAnimations, titleAnimations} from './home-animations'
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  state,
  stagger,
  animateChild,
  animation
} from '@angular/animations';

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
  //@HostBinding('@titleAnimations')
private animation = true;

private activePointClass = "fas fa-circle fa-lg";
private nonActivePointClass = "far fa-circle fa-lg";
private activePointId = "circle-point-1";

private activeTitleClass = "title";
private nonActiveTitleClass = "title hidden";
private activeTitleId = "title-1";

private backgroundColor = "#FAC20B"

  constructor() { }

  ngOnInit() {
    this.autoChangeTitle();
  }

  autoChangeTitle()
  { //Ajouter le fait du clic qui reinitialise l'interval
    setTimeout(() =>{
      setInterval(() =>{
        this.incrementId(this.activePointId)
      }, 10000)
    }, 10000);
  }

  incrementId(id)
  {
      switch (id){
        case 'circle-point-1':
          this.activePointId = 'circle-point-2'
          this.changeTitle(this.activePointId)
          break
        
        case 'circle-point-2':
          this.activePointId = 'circle-point-3'
          this.changeTitle(this.activePointId)
          break
        
        case 'circle-point-3':
          this.activePointId = 'circle-point-4'
          this.changeTitle(this.activePointId)
          break
        
        case 'circle-point-4':
          this.activePointId = 'circle-point-5'
          this.changeTitle(this.activePointId)
          break
        
        case 'circle-point-5':
          this.activePointId = 'circle-point-6'
          this.changeTitle(this.activePointId)
          break
        
        case 'circle-point-6':
          this.activePointId = 'circle-point-1'
          this.changeTitle(this.activePointId)
          break
      }

  }
  
  addActiveOnClick($event) {
    if ($event.target.id == this.activePointId){
      return ;
    }else{
      this.activePointId = $event.target.id
    }
    this.changeTitle($event.target.id)
  }

  changeTitle(id){
    switch (id){
      case 'circle-point-1':
        this.activeTitleId = "title-1"
        this.backgroundColor = "#FAC20B"
        this.animation = true
        break;
        
      case 'circle-point-2':
        this.activeTitleId = "title-2"
        this.backgroundColor = "#02C9C9"
        this.animation = false
        break;

      case 'circle-point-3':
        this.activeTitleId = "title-3"
        this.backgroundColor = "#E9A1B9"
        this.animation = true
        break;

      case 'circle-point-4':
        this.activeTitleId = "title-4"
        this.backgroundColor = "#333333"
        this.animation = false
        break;

      case 'circle-point-5':
        this.activeTitleId = "title-5"
        this.backgroundColor = "#C2D53F"
        this.animation = true
        break;

      case 'circle-point-6':
        this.activeTitleId = "title-6"
        this.backgroundColor = "#E8A0B8"
        this.animation = false
        break;
      
    }

  }
}
