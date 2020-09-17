import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(-100%,0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class NavBarComponent implements OnInit {

  public menuState:string = 'out';

  public burgerState:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleBurgerNav(){
    this.burgerState = !this.burgerState;
    this.toggleMenu();
  }

  toggleMenu(){
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

}
