import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  constructor(private cs:CommonService) { }
  linkedIn = '';
  github = '';
  behance = '';

  ngOnInit(): void {

      this.cs.getAboutMe().subscribe(res=>{
             this.linkedIn = res.data.attributes.LinkedIn;
             this.github = res.data.attributes.Github;
             this.behance = res.data.attributes.Behance;

             console.log(this.linkedIn, this.behance, this.github);
      })
  }

}
