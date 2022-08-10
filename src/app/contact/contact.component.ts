import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
      // better make an interface so that I can see what is in the data.
      // this.websiteHeroImage = environment.server + res.data.attributes.WebsiteHeroImage.data.attributes.url;
      this.websiteHeroImage =res.data.attributes.WebsiteHeroImage.data.attributes.url;
      console.log(this.websiteHeroImage);

      // this.profileImage=res.data.attributes.Headshot.data.attributes.formats.large.url;

      // this.fullbio=res.data.attributes.FullBio;


      // this.name = res.data.attributes.Name;



    })
  }

}
