import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    subject : new FormControl(''),
    message: new FormControl('',Validators.required),
  });

  constructor(private el:ElementRef) { }

  ngOnInit() {
  }

  @HostListener('click', ['$event.target'])
  onClick(target){
    let item = this.el.nativeElement.querySelector('li');
  }

  onSubmit(val: any): void {
    console.log( val );
  }

}
