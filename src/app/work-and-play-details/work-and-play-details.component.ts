import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { workAndPlayArray } from '../work-and-play/work-and-play-list'
import { WorkAndPlay } from '../models/workAndPlay.model'


@Component({
  selector: 'app-work-and-play-details',
  templateUrl: './work-and-play-details.component.html',
  styleUrls: ['./work-and-play-details.component.scss']
})
export class WorkAndPlayDetailsComponent implements OnInit {
  private workLength: Number;
  private workDetailIndex : Number;
  private workDetailArray;
  private workDetail : WorkAndPlay = {} as WorkAndPlay;

  private backgroundColor: string = "";
  

  constructor( private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      let workAndPlayName = params.workAndPlayName;
      this.getWork(workAndPlayName);
      this.workDetail = this.workDetailArray[0]
      this.backgroundColor = this.workDetail.color;
      console.log(this.workDetailIndex)
    })
   }

  ngOnInit() {
    this.getWorkLength();
    console.log(this.workLength)
  }

  getWorkLength(){
    return this.workLength = workAndPlayArray.length
  }

  getWork(workAndPlayName)
  {
    this.workDetailArray = workAndPlayArray.filter(function (object) 
    {
      return object.name == workAndPlayName
    })
    this.workDetailIndex = 1 + workAndPlayArray.findIndex(function (object)
    {
      return object.name == workAndPlayName
    })
    
  }
}
