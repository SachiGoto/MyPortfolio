import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProjectDetail, Projects } from '../interface';
import { CommonService } from '../service/common.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
projects:any;
websiteHeroImage ='';

server = environment.server;

  constructor(private cs:CommonService) { }

  ngOnInit(): void {
    this.cs.getProjects().subscribe(res=>{
         this.projects = res.data;
         console.log("project data" , res.data);
      }
    )

    this.cs.getAboutMe().subscribe(res=>{
      console.log(res);
      // better make an interface so that I can see what is in the data.
      // this.websiteHeroImage = environment.server + res.data.attributes.WebsiteHeroImage.data.attributes.url;
      this.websiteHeroImage = res.data.attributes.WebsiteHeroImage.data.attributes.url;

      console.log(this.websiteHeroImage);


    })
  }

}
