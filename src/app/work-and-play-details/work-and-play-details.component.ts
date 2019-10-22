import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { workAndPlayArray } from '../work-and-play/work-and-play-list'

@Component({
  selector: 'app-work-and-play-details',
  templateUrl: './work-and-play-details.component.html',
  styleUrls: ['./work-and-play-details.component.scss']
})
export class WorkAndPlayDetailsComponent implements OnInit {

  private workAndPlayDetailExemple : WorkAndPlayModel = {} as WorkAndPlayModel;

  constructor( private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      let workAndPlayName = params.workAndPlayName;
      //console.log(workAndPlayName)
      this.getWorkAndPlayExemple(workAndPlayName);
    })
   }

  ngOnInit() {
    console.log(workAndPlayArray)
  }

  getWorkAndPlayExemple(workAndPlayName): void
  {
    let find = false;
    workAndPlayArray.forEach(element => {
      if (element.name == workAndPlayName){
        //console.log(element)
        find = true
      }
      if (find == true){
        this.workAndPlayDetailExemple = element
        console.log(element)
        console.log(this.getWorkAndPlayExemple.name)
        return this.workAndPlayDetailExemple
      }
    });
  }
}
