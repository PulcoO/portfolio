import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkAndPlayComponent } from './work-and-play/work-and-play.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { WorkAndPlayDetailsComponent } from './work-and-play-details/work-and-play-details.component';
import { ChangeArrowClassDirective } from './directives/change-arrow-class.directive';
import { ReadMoreBtnComponent } from './layout/buttons/read-more-btn/read-more-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    SkillsComponent,
    WorkAndPlayComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    WorkAndPlayDetailsComponent,
    ChangeArrowClassDirective,
    ReadMoreBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
