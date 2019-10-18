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

 export const titleAnimations = [
    trigger('titleAnimations', [
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