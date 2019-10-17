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
        transition('Home => WorkAndPlay',  [
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
                    style({ transform: 'translateX(-100%)' })),
                    ], { optional: true }),
            ]),
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