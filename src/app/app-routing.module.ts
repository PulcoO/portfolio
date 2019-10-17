import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkAndPlayComponent } from './work-and-play/work-and-play.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/Home' },
  { path: 'Home', component: HomeComponent, data: {animation: 'Home'} },
  { path: 'About', component: AboutComponent, data: {animation: 'About'} },
  { path: 'Skills', component: SkillsComponent , data: {animation: 'Skills'} },
  { path: 'WorkAndPlay', component: WorkAndPlayComponent, data: {animation: 'WorkAndPlay'} },
  { path: 'Contact', component: ContactComponent, data: {animation: 'Contact'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
