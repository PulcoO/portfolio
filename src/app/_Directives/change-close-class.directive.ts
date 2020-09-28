import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeCloseClass]'
})
export class ChangeCloseClassDirective {

  private closeRegular = "far fa-times-circle";
  private closeSolid = "fas fa-times-circle";
  @Input() appCloseClass: string;
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.checkClass(this.el.nativeElement.className);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.checkClass(this.el.nativeElement.className);
  }
  
  private checkClass(className: string){
    switch(className){
      case this.closeRegular:
        this.changeClass(this.closeSolid);
        break;
      case this.closeSolid:
        this.changeClass(this.closeRegular);
        break;
    }
  }

  private changeClass(str: string) {
    this.el.nativeElement.className = str;

  }

}
