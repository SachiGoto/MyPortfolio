import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HomePage } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  // private url = "https://cms.sachigoto.me/api/project-news?populate=*";
  private url = environment.server;


 getProjects(){
  // return this.http.get(this.url);
  // return this.http.get(this.url + "/api/project-news?populate=*");
  return this.http.get<HomePage>(this.url + "/api/about-me?populate=deep");

 }



}
