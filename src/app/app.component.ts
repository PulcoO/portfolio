import { Component, HostBinding } from '@angular/core';
import { slideInAnimation } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ]
})

export class AppComponent {
  title = 'portfolio';
}


