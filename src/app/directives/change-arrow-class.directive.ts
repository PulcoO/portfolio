import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeArrowClass]'
})
export class ChangeArrowClassDirective {

  private leftRegular = "far fa-arrow-alt-circle-left";
  private leftSolid = "fas fa-arrow-alt-circle-left";
  @Input() appChangeArrowClass: string;
  private rightRegular = "far fa-arrow-alt-circle-right";
  private rightSolid = "fas fa-arrow-alt-circle-right"
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.checkClass(this.el.nativeElement.className);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.checkClass(this.el.nativeElement.className);
  }
  
  private checkClass(className: string){
    switch(className){
      case this.leftRegular:
        this.changeClass(this.leftSolid)
        break;
      case this.leftSolid:
        this.changeClass(this.leftRegular)
        break;
      case this.rightRegular:
        this.changeClass(this.rightSolid)
        break;
      case this.rightSolid:
        this.changeClass(this.rightRegular)
        break;
    }
  }

  private changeClass(str: string) {
    this.el.nativeElement.className = str;
  }

}
