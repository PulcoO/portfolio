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
 
 export const slideInAnimation =
    trigger('routeAnimations', [
        transition('Home => About, Home => Skills, Home => Contact, Home => WorkAndPlay, About => Skills, About => WorkAndPlay, About => Contact, Skills => WorkAndPlay, Skills => Contact, WorkAndPlay => Contact',  [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    width: '100%'
                })
            ]),
            query(':enter', [
            style({ transform: 'translateY(100%)'})
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)'}))
                ]),
                query(':enter', [
                    animate('0.5s ease-in-out', style({ transform: 'translateY(0%)'}))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
        transition('About => Home, Skills => About, Skills => Home, WorkAndPlay => Skills, WorkAndPlay => About, WorkAndPlay => Home,  Contact => WorkAndPlay, Contact => Skills, Contact => About, Contact => Home',  [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    width: '100%'
                })
            ]),
            query(':enter', [
            style({ transform: 'translateY(-100%)'})
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('0.5s ease-in-out', style({ transform: 'translateY(100%)'}))
                ]),
                query(':enter', [
                    animate('0.5s ease-in-out', style({ transform: 'translateY(0%)'}))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
 ]);