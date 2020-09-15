import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
//directives
import { ChangeArrowClassDirective } from './_Directives/change-arrow-class.directive';
import { SidebarDirective } from './_Directives/sidebar.directive';
//components
import { AppComponent } from './app.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { AboutComponent } from './Components/about/about.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { WorkAndPlayComponent } from './Components/projects/work-and-play.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { WorkAndPlayDetailsComponent } from './Components/projectDetails/work-and-play-details.component';

import { ReadMoreBtnComponent } from './layout/buttons/read-more-btn/read-more-btn.component';
import { MenuComponent } from './layout/menu/menu.component';

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
    SidebarDirective,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
