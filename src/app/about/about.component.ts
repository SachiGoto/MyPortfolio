import { Component, OnInit } from '@angular/core';
import { Education, Skill } from '../interface';
import{CommonService} from '../service/common.service';
// import { gsap, Power3 } from 'gsap';
// import ScrollToPlugin from 'gsap/ScrollToPlugin';
// import 'gsap';

import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";






@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})


export class AboutComponent implements OnInit {

  constructor(private http:CommonService) {
    // gsap.registerPlugin(ScrollToPlugin);
  }




  websiteHeroImage:string='';
  profileImage:string='';
  fullbio:any;

  skills:Skill[]=[]
  designSkills:any =[];
  frontendSkills:any =[];
  backendSkills:any=[];
  temp:any=[];

  education:Education[]=[];









  ngOnInit(): void {






    this.http.getEducation().subscribe(res=>{
      // console.log("education data " , res.data)
      this.education = res.data;
      console.log(this.education , "education data")

    })

    this.http.getAboutMe().subscribe(res=>{
      console.log("res is " , res.data.attributes);
      // better make an interface so that I can see what is in the data.
      // this.websiteHeroImage = environment.server + res.data.attributes.WebsiteHeroImage.data.attributes.url;
      this.websiteHeroImage =res.data.attributes.WebsiteHeroImage.data.attributes.url;
      console.log(this.websiteHeroImage);

      this.profileImage=res.data.attributes.Headshot.data.attributes.formats.large.url;

      this.fullbio=res.data.attributes.FullBio;






    })





    this.http.getSkills().subscribe(res=>{





      this.temp = res.data.filter(designSkill => {
        if(designSkill.attributes.Category === "Design tools"){
          this.designSkills.push(designSkill)

          }
      })

      this.skills = this.designSkills
      console.log("Design skill is " , this.skills);



      this.temp = res.data.filter(frontendSkills =>{
        if(frontendSkills.attributes.Category === "Frontend development tools"){
          this.frontendSkills.push(frontendSkills);
        }
      })

      this.skills = this.frontendSkills;
      console.log("front end skills are " , this.skills)





    this.temp = res.data.filter(backendSkills=>{
         if(backendSkills.attributes.Category === "Backend development tools"){
          this.backendSkills.push(backendSkills);
         }
    })

    this.skills = this.backendSkills;
    console.log("backend skills are " , this.skills);



  })
  }




}
