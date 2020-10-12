import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { WorkAndPlayComponent } from './Components/projects/work-and-play.component';
import { HomeComponent } from './Components/home/home.component';
import { WorkAndPlayDetailsComponent } from './Components/projectDetails/work-and-play-details.component';
import { CoreComponent } from './Components/core/core.component';
import { LoveComponent } from './Components/love/love.component';
import { WorkComponent } from './Components/work/work.component';
import { PlanetCardComponent } from './layout/Cards/planet-card/planet-card.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/Home' },
  { path: 'Home', component: HomeComponent, data: {animation: 'Home'} },
  { path: 'About', component: AboutComponent, data: {animation: 'About'} },
  { path: 'About/Core', component: CoreComponent },
  { path: 'About/Love', component: LoveComponent },
  { path: 'About/Work', component: WorkComponent },
  { path: 'Skills', component: SkillsComponent , data: {animation: 'Skills'} },
  { path: 'Planet/:PlanetId', component: PlanetCardComponent },
  { path: 'Projects', component: WorkAndPlayComponent, data: {animation: 'Projects'} },
  { path: 'Projects/:ProjectName', component: WorkAndPlayDetailsComponent, data:{animation: 'WorkAndPlayDetails'} },
  { path: 'Contact', component: ContactComponent, data: {animation: 'Contact'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
