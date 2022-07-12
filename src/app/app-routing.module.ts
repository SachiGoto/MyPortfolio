import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"", component: HomeComponent},
  {path:"projects", component: ProjectsComponent},
  {path:"about-me", component:AboutComponent},
  {path:"projects/:projectID", component:ProjectDetailsComponent},
   {path:"contact", component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
