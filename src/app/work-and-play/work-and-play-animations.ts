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
  export const pageAnimations = [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.card, form', [
          style({opacity: '0', transform: 'translateY(-100px)'}),
          stagger(-30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', 
              style({ opacity: 1, transform: 'none' }
            ))
          ])
        ]) 
        ])
      ])
    ]