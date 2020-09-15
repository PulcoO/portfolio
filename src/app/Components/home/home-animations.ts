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
      transition('void => *', [
        query('.content', [
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
  export const titleAnimations = [
    trigger('leftRightAnimations', [
            transition('* => in', [
              style({ transform: 'rotate(-10deg)', opacity: '0' }),
              animate('500ms ease-in-out')
            ]),
            transition('* => out', [
              style({ transform: 'rotate(+10deg)', opacity: '0' }),
              animate('500ms ease-in-out')
            ])
          ])
  ]