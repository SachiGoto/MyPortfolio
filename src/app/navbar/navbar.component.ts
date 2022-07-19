import { Component, OnInit } from '@angular/core';
import {CommonService} from '../service/common.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title = 'MyPortfolio';
  logo ='';
  constructor(private cs:CommonService) { }

  ngOnInit(): void {
    this.cs.getAboutMe().subscribe(res=>{
      this.logo = environment.server + res.data.attributes.Logo.data.attributes.url;

    })
  }

}
