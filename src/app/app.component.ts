import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonService } from './service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MyPortfolio';
  logo ='';


  constructor(private cs:CommonService){};

  ngOnInit(): void {
      this.cs.getProjects().subscribe(res=>{
        this.logo = environment.server + res.data.attributes.Logo.data.attributes.url;
      })
  }
}
