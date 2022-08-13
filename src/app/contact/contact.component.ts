import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { start } from '@popperjs/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor( private http:CommonService) { }

  name='';
  email='';
  message='';
  formInvalid = true;
  websiteHeroImage='';
  emailIcon ='';
  linkedinIcon='';
  instagramIcon ='';
  aboutme:any;


  formMessageHidden = true;

  submitLead(){
    console.log("Hello");
    this.formInvalid = true;
    let leaddata = {
      "data":{
        "name": this.name,
        "email": this.email,
        "message":this.message
      }
    }

    this.http.postlead(leaddata).subscribe(res=>{
      console.log(res);
      this.formMessageHidden = false;





    })

    console.log(leaddata);

    this.name='';
  this.email='';
  this.message='';





  }



  resolved(event:any){
      // console.log(event);
      if(event){
        this.formInvalid = false;
      }
  }



  ngOnInit(): void {


    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }

    this.http.getAboutMe().subscribe(res=>{
      console.log("res is " , res.data.attributes);
      this.aboutme = res.data;
      console.log("aboutme is " , this.aboutme);
      // better make an interface so that I can see what is in the data.
      // this.websiteHeroImage = environment.server + res.data.attributes.WebsiteHeroImage.data.attributes.url;
      this.websiteHeroImage =res.data.attributes.WebsiteHeroImage.data.attributes.url;
      console.log(this.websiteHeroImage);
      this.emailIcon = res.data.attributes.EmailIcon.data.attributes.url;
      this.linkedinIcon = res.data.attributes.LinkedinIcon.data.attributes.url;
      this.instagramIcon = res.data.attributes.InstagramIcon.data.attributes.url;


      // this.profileImage=res.data.attributes.Headshot.data.attributes.formats.large.url;

      // this.fullbio=res.data.attributes.FullBio;


      // this.name = res.data.attributes.Name;



    })

    let getDivState = () => {
      let currentState = { width: document.body.clientWidth,
                           height: document.body.clientHeight
                         }
    return currentState;
  }

    // let createStars = () => {
      let starContainer = document.createElement("div");

      let getRanNum = (min:any, max:any) => {
        let draw;
        do {
          draw = Math.floor(Math.random() * max);
        } while (draw > max || draw < min)
        return draw;
      }

      starContainer.className = "starContainer";
      starContainer.style.height = "20vh";
      document.body.appendChild(starContainer);
      let stars = getDivState().width / 50 ;  // the mass of the stars

      for (let i=1; i<=stars; i++) { // create stars limit by screen size
        let star = document.createElement("div");

        star.className = "star";
        let sizeOfStar = getRanNum(5, 7);
        star.style.borderRadius = "10px";
        // star.style.filter.blink = "10px";
        star.style.width = sizeOfStar + "px";
        star.style.height = sizeOfStar + "px";
        // star.style.height = Math.floor(Math.random()*10 + 1) + "vh";
        star.style.left= getRanNum(0, getDivState().width) +"px";
        star.style.top= Math.floor(Math.random()*25 + 1) + "vh";
        star.style.animationDuration= getRanNum(3, 8) + "s";
        // star.style.backgroundColor="yellow";
        starContainer.appendChild(star);
      }
    // }

    // get the current div width and height
    // can be adjusted to screen or window size


    // get a proper random number


    // createStars();


  }



}
