import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';
import { FormsModule } from '@angular/forms';
import { RecaptchaModule } from "ng-recaptcha";



@NgModule({


  declarations: [

    AppComponent,
    AboutComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent,
    ProjectDetailsComponent,
    FooterComponent,
    SocialComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RecaptchaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
