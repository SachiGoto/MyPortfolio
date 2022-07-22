import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {CommonService} from '../service/common.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  websiteHeroImage ='';
  name='';

  constructor(private http:CommonService) { }





  ngOnInit(): void {

    this.http.getAboutMe().subscribe(res=>{
      console.log("res is " , res.data.attributes);
      // better make an interface so that I can see what is in the data.
      this.websiteHeroImage = environment.server + res.data.attributes.WebsiteHeroImage.data.attributes.url;

      console.log(this.websiteHeroImage);



    })

  }

}
