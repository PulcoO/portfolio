import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    state,
    animateChild
 } from '@angular/animations';

 export const workAndPlayAnimations= [
    trigger('workAndPlayAnimations', [
      state('out', style({
        opacity: '0'
      })),
      transition('void => *', [
        style({ transform: 'translateY(-100px)', opacity: '0' }),
        animate('1000ms ease-in-out')
      ])
    ])
]