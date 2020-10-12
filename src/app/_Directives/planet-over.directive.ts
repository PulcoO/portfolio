import { Directive,
         ViewChild, 
         AfterViewInit, 
         ElementRef, 
         HostListener, 
         Renderer2} from '@angular/core';

@Directive({
  selector: '[appPlanetOver]'
})
export class PlanetOverDirective {

  public activeClass : string ;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.activeClass = this.el.nativeElement.className.replace('ng-star-inserted', ' ');
    console.log('active class : ' + this.activeClass)
    //this.removeActiveClass();
    this.addActiveClass();
    this.changeActiveClassOnSystem();
  }

  private addActiveClass(){
    this.el.nativeElement.className = ' ';
    this.el.nativeElement.className = this.activeClass + " active"
  }

  private removeActiveClass(){
    console.log(this.el.nativeElement.parentNode)
    let parent = this.el.nativeElement.parentNode;
    let children = this.el.nativeElement.parentNode.children
    for (var i = 0; i < parent.children.length; i++){
      console.log(parent.children[i].className)
        parent.children[i].className.replace('active', ' ')
    }
  }

  private changeActiveClassOnSystem(){
    let solarSys = this.el.nativeElement.parentNode.parentNode.querySelector('#universe').querySelector('#galaxy').querySelector('#solar-system');
    solarSys.className = "" ;
    solarSys.className = this.activeClass;
  }
}
