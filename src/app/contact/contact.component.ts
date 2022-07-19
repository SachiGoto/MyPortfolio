import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor( private cs:CommonService) { }

  name='';
  email='';
  message='';
  formInvalid = true;

  formMessageHidden = true;

  submitLead(){
    this.formInvalid = true;
    let leaddata = {
      "data":{
        "name": this.name,
        "email": this.email,
        "message":this.message
      }
    }

    this.cs.postlead(leaddata).subscribe(res=>{
      console.log(res);
      this.formMessageHidden = false;

    })



    console.log(leaddata);
  }

  resolved(event:any){
      // console.log(event);
      if(event){
        this.formInvalid = false;
      }
  }

  ngOnInit(): void {
  }

}
