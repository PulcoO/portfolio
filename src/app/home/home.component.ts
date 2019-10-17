import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

private activePointClass = "fas fa-circle fa-lg";
private nonActivePointClass = "far fa-circle fa-lg";
private activePointId = ["circle-point-1"];

private activeTitleClass = "title"
private nonActiveTitleClass = "title hidden"
private activeTitleId = "title-1"

  constructor() { }

  ngOnInit() {
  }

  addActiveOnClick($event) {
    if ($event.target.id == this.activePointId[0]){
      return ;
    }else{
      this.activePointId = [$event.target.id]
    }
    this.changeTitle($event.target.id)
  }
  changeTitle(id){
    switch (id){
      case 'circle-point-1':
        this.activeTitleId = "title-1"
        console.log(this.activeTitleId)
        break;
        
      case 'circle-point-2':
        this.activeTitleId = "title-2"
        console.log(this.activeTitleId)
        break;

      case 'circle-point-3':
        this.activeTitleId = "title-3"
        console.log(this.activeTitleId)
        break;

      case 'circle-point-4':
        this.activeTitleId = "title-4"
        console.log(this.activeTitleId)
        break;

      case 'circle-point-5':
        this.activeTitleId = "title-5"
        console.log(this.activeTitleId)
        break;

      case 'circle-point-6':
        this.activeTitleId = "title-6"
        console.log(this.activeTitleId)
        break;
      
    }

  }
}
