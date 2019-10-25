import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { workAndPlayArray } from '../work-and-play/work-and-play-list'
import { WorkAndPlay } from '../models/workAndPlay.model'
import { imagesOfWorkAndPlay } from '../models/imagesOfWorkAndPlay.model'


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

  private workImage;
  private previousImage;
  private nextImage; 
  private workImageArray = this.workDetail.images;
  private workImageIndex = 0;
  private workImageLength;
  

  constructor( private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      let workAndPlayName = params.workAndPlayName;
      this.getWork(workAndPlayName);
      this.workDetail = this.workDetailArray[0]
      this.backgroundColor = this.workDetail.color;
    })
   }

  ngOnInit() {
    this.getWorkLength();
    this.getWorkImagesLenght();
    this.getWorkImages(this.workImageIndex)
  }

  getWorkLength(){
    return this.workLength = workAndPlayArray.length
  }
  getWorkImagesLenght(){
    return this.workImageLength = this.workDetail.images.length
  }
  getWorkImages(index){
    console.log(index)
    this.workImage = this.workDetail.images[index]
      if(index == this.workImageLength){
        this.nextImage = this.workDetail.images[0]
        this.previousImage = this.workDetail.images[index - 1]
      }else if(index == 0){
        this.nextImage = this.workDetail.images[index + 1]
        this.previousImage = this.workDetail.images[this.workImageLength - 1]
      }else{
        this.nextImage = this.workDetail.images[index + 1]
        this.previousImage = this.workDetail.images[index - 1]
      }
  }

  changePrincipalImage($event: string){
    let id = parseInt($event.split('-')[1]);
    if (id == this.workImage.id){
      return;
    }else{
      this.workImageIndex = id - 1;
      this.getWorkImages(this.workImageIndex)
    }
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
