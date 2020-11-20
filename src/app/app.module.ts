import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
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
import { CoreComponent } from './Components/core/core.component';
import { LoveComponent } from './Components/love/love.component';
import { WorkComponent } from './Components/work/work.component';
import { LeftArrowButtonComponent } from './layout/buttons/left-arrow-button/left-arrow-button.component';
import { RightArrowButtonComponent } from './layout/buttons/right-arrow-button/right-arrow-button.component';
import { CancelButtonComponent } from './layout/buttons/cancel-button/cancel-button.component';
import { ChangeCloseClassDirective } from './_Directives/change-close-class.directive';
import { CodePenComponent } from './layout/social_media_buttons/code-pen/code-pen.component';
import { FacebookComponent } from './layout/social_media_buttons/facebook/facebook.component';
import { LinkedinComponent } from './layout/social_media_buttons/linkedin/linkedin.component';
import { GithubComponent } from './layout/social_media_buttons/github/github.component';
import { Site1Component } from './layout/social_media_buttons/site1/site1.component';
import { Site2Component } from './layout/social_media_buttons/site2/site2.component';
import { Site3Component } from './layout/social_media_buttons/site3/site3.component';
import { OpenfooterComponent } from './layout/social_media_buttons/openfooter/openfooter.component';
import { PlanetCardComponent } from './layout/Cards/planet-card/planet-card.component';
import { PlanetOverDirective } from './_Directives/planet-over.directive';
import { MaterialModule } from './material/material.module';

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
    CoreComponent,
    LoveComponent,
    WorkComponent,
    LeftArrowButtonComponent,
    RightArrowButtonComponent,
    CancelButtonComponent,
    ChangeCloseClassDirective,
    CodePenComponent,
    FacebookComponent,
    LinkedinComponent,
    GithubComponent,
    Site1Component,
    Site2Component,
    Site3Component,
    OpenfooterComponent,
    PlanetCardComponent,
    PlanetOverDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
