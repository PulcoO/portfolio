import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    state,
    stagger,
    animateChild
 } from '@angular/animations';

 export const pageAnimations = [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.card', [
          style({opacity: '0', transform: 'translateX(-1000px)'}),
          stagger(-30, [
            animate('0.5s', 
              style({ opacity: 1, transform: 'none' }
            ))
          ])
        ]) 
      ]),
      transition(':leave', [
        query('.card', [
          style({opacity: '1', transform: 'none'}),
          stagger(-30, [
            animate('0.5s', 
              style({ opacity: 0, transform: 'translateX(-1000px)' }
            ))
          ])
        ]) 
      ])
    ])
  ]