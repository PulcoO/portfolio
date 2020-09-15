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
        group([
          query('#workAndPlay-1, #workAndPlay-6 ', [
            style({opacity: '0', transform: 'translate(-538px, 400px)'}),
              animate('0.3s', 
                style({ opacity: 1, transform: 'none' }
              ))
          ],{ optional: true }),
          query('#workAndPlay-2', [
            style({opacity: '0', transform: 'translate(-269px, 400px)'}),
              animate('0.3s', 
                style({ opacity: 1, transform: 'none' }
              ))
          ],{ optional: true }),
          query('#workAndPlay-3', [
            style({opacity: '0', transform: 'translate(-0px, 400px)'}),
              animate('0.3s', 
                style({ opacity: 1, transform: 'none' }
              ))
          ],{ optional: true }),
          query('#workAndPlay-4', [
            style({opacity: '0', transform: 'translate(269px, 400px)'}),
              animate('0.3s', 
                style({ opacity: 1, transform: 'none' }
              ))
          ],{ optional: true }),
          query('#workAndPlay-5', [
            style({opacity: '0', transform: 'translate(538px, 400px)'}),
              animate('0.3s', 
                style({ opacity: 1, transform: 'none' }
              ))
          ],{ optional: true }),
        ])
      ]),
      transition(':leave', [
        group([
          query('#workAndPlay-1, #workAndPlay-6 ', [
            style({opacity: '1', transform: 'none'}),
              animate('0.3s', 
                style({ opacity: 0, transform: 'translate(-538px, -400px)' }
              ))
          ],{ optional: true }),
          query('#workAndPlay-2', [
            style({opacity: '1', transform: 'none'}),
              animate('0.3s', 
                style({ opacity: 0, transform: 'translate(-269px, -400px)' }
              ))
          ],{ optional: true }),
          query('#workAndPlay-3', [
            style({opacity: '1', transform: 'none'}),
              animate('0.3s', 
                style({ opacity: 0, transform: 'translate(-0px, -400px)' }
              ))
          ],{ optional: true }),
          query('#workAndPlay-4', [
            style({opacity: '1', transform: 'none'}),
              animate('0.3s', 
                style({ opacity: 0, transform: 'translate(269px, -400px)' }
              ))
          ],{ optional: true }),
          query('#workAndPlay-5', [
            style({opacity: '1', transform: 'none'}),
              animate('0.3s', 
                style({ opacity: 0, transform: 'translate(538px, -400px)' }
              ))
          ],{ optional: true }),
        ])
      ])
    ])
  ]