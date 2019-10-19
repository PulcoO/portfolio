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
    trigger('childAnimations', [
            // state('one', style({
            //   opacity: '1',
            //   transform: 'rotate3d(0, 0, 0, 0deg)',
            // })),
            // state('two', style({
            //   opacity: '1',
            //   transform: 'rotate3d(0, 0, 0, 0deg)'
            // })),
            transition('in <=> out', [
              style({ transform: 'translateY(-200px)', opacity: '0' }),
              animate('1000ms ease-in-out')
            ])
          ])
  ]