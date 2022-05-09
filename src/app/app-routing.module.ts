import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'carousel', loadChildren: () => import('./carousel/carousel.module').then(m => m.CarouselModule) },
  { path: 'skills', component: SkillsComponent },
  { path: 'work-experience', component:WorkExperienceComponent },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
