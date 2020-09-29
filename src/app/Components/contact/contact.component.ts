import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private el:ElementRef) { }

  ngOnInit() {
  }

  @HostListener('click', ['$event.target'])
  onClick(target){
    let item = this.el.nativeElement.querySelector('li');
  }

}
