import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkAndPlayComponent } from './work-and-play/work-and-play.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'Home', component: HomeComponent},
  { path: 'About', component: AboutComponent },
  { path: 'Skills', component: SkillsComponent },
  { path: 'Work&play', component: WorkAndPlayComponent },
  { path: 'Contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
