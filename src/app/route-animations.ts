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
 import { workAndPlayAnimations } from '../app/work-and-play/work-and-play-animations';
 
 export const slideInAnimation =
    trigger('routeAnimations', [
        transition('About => Home, Skills => Home, Contact => Home',  [
            query(':enter, :leave', 
                style({ position: 'fixed',  width: '100%' }), 
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)' }), 
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(100%)' })),
                    ], { optional: true }),
            ])
        ]),
        transition('Home => About, Home => Skills, Home => Contact',  [
            query(':enter, :leave', 
                style({ position: 'fixed',  width: '100%' }), 
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }), 
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(0%)' })),
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(-100%)' }))
                    ], { optional: true }),
            ])
        ]),
        transition('* => WorkAndPlay',  [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
            style({ left: '-100%'})
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('0.5s ease-in-out', style({ left: '100%'}))
                ]),
                query(':enter', [
                    animate('0.5s ease-in-out', style({ left: '0%'}))
                ])
            ]),
            query(':enter', animateChild()),
            ]),
        transition('Skills => Home',  [
            query(':enter, :leave', 
                style({ position: 'fixed',  width: '100%' }), 
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)' }), 
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(100%)' }))
                    ], { optional: true }),
            ])
        ]),
        transition('Contact => *', [
            query(':enter, :leave', 
                style({ position: 'fixed', width: '100%' }), 
                { optional: true }),        
            group([
                query(':enter',[
                    style({ transform: 'translateX(-100%)' }),
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform:   'translateX(0%)'}),
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('* => Contact', [
            query(':enter, :leave', 
                style({ position: 'fixed', width: '100%' }), 
                { optional: true }),        
            group([
                query(':enter',[
                    style({ transform: 'translateX(100%)' }),
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform:   'translateX(0%)'}),
                    animate('0.5s ease-in-out', 
                    style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
         transition('WorkAndPlay => Home', [
            query(':enter, :leave', 
                 style({ position: 'fixed', width: '100%' }), 
                 { optional: true }),        
            group([
                 query(':enter',[
                     style({ transform: 'translateX(-100%)' }),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(0%)' }))
                 ], { optional: true }),
                 query(':leave', [
                     style({ transform:   'translateX(0%)'}),
                     animate('0.5s ease-in-out', 
                     style({ transform: 'translateX(100%)' }))
                 ], { optional: true }),
            ]),
       ]),
         
         transition('About => Contact', [
               query(':enter, :leave', 
                   style({ position: 'fixed', width: '100%' }), 
                   { optional: true }),
               group([
                   query(':enter', [
                       style({ transform: 'translateX(100%)' }),
                       animate('0.5s ease-in-out', 
                       style({ transform: 'translateX(0%)' }))
                   ], { optional: true }),
                   query(':leave', [
                       style({ transform: 'translateX(0%)' }),
                       animate('0.5s ease-in-out', 
                       style({ transform: 'translateX(-100%)' }))
                   ], { optional: true }),
               ])
         ]),
         transition('About => Home', [
               query(':enter, :leave', 
                   style({ position: 'fixed', width: '100%' }), 
                   { optional: true }),
               group([
                   query(':enter', [
                       style({ transform: 'translateX(-100%)' }),
                       animate('0.5s ease-in-out', 
                       style({ transform: 'translateX(0%)' }))
                   ], { optional: true }),
                   query(':leave', [
                        style({ transform: 'translateX(0%)' }),
                        animate('0.5s ease-in-out', 
                        style({ transform: 'translateX(100%)' }))
                   ], { optional: true }),
               ])
        ]),
 ]);