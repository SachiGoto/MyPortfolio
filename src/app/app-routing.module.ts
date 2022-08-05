import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

import { ProjectsComponent } from './projects/projects.component';
import { TestComponent } from './test/test.component';



const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"", component: HomeComponent},
  {path:"projects", component: ProjectsComponent},
  {path:"about-me", component:AboutComponent},
  // {path:"projects/:projectID/:project.attributes.Slug", component:ProjectDetailsComponent},
  {path:"projects/:projectID/:slug", component:ProjectDetailsComponent},
   {path:"contact", component:ContactComponent},
   {path:"navbar", component:NavbarComponent},
   {path:"test", component:TestComponent},
   {path:"ecommerce", component:HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
