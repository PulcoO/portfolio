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

 export const informationButtonAnimation= [
    trigger('informationButtonAnimation', [
      transition('* => out', [
        query('.card', [
          style({ opacity: '1', transform: 'translateY(0px)'}),
          stagger(-30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', 
              style({ display : 'none', opacity: '0', transform: 'translateY(-1000px)' }
            ))
          ])
        ]),
      ])
    ])
]
  export const pageAnimations = [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.card', [
          style({opacity: '0', transform: 'translateY(-1000px)'}),
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
              style({ opacity: 0, transform: 'translateX(1000px)' }
            ))
          ])
        ]) 
      ])
    ])
  ]