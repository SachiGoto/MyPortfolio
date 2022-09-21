import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {CommonService} from '../service/common.service'
import {Education} from '../interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // websiteHeroImage ='';
  name='';
  // school='';
  // eduationData:any;
  // educationArray:Education[]=[];
  // educationArray:Education[]=[];

  constructor(private http:CommonService, private route:Router) { }

state = false;



translate(){

this.state = true;
console.log();

setTimeout(()=>{

    this.route.navigate(["about-me"]);

}, 3000)




}

toProjects(){
  this.route.navigate(["/projects"]);
}



  ngOnInit(): void {


    this.http.getAboutMe().subscribe(res=>{
      // console.log("res is " , res.data.attributes);
      // better make an interface so that I can see what is in the data.
      // this.websiteHeroImage = environment.server + res.data.attributes.WebsiteHeroImage.data.attributes.url;
      // this.websiteHeroImage =res.data.attributes.WebsiteHeroImage.data.attributes.url;
      // console.log(this.websiteHeroImage);

      this.name = res.data.attributes.Name;



    })

    // this.http.getEducation().subscribe(educationData=>{


      // console.log("Education data" , educationData);
    // console.log(educationData);
      // in education[]
      // data structure - {data[{}, {}], meta:{}}
      // this.educationArray = educationData

      // in services, you bind interface like this get<{data:Education[]}>,
      // return data [{},{}] and store it into education[] //
      // this.educationArray = educationData.data;
      // console.log(educationData.data);
      // this.school = educationData.data.attributes.School;
      // console.log("school is" , this.school)

      // in education
      // data structure - {data [{},{}], meta:{}}
      // this.educationArray = educationData
    //   console.log("school is" , this.school);
    // console.log("educationArray is " ,this.educationArray);

    // })

  }

}
