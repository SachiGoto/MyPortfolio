import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectDetail, Projects } from '../interface';
import { CommonService } from '../service/common.service';
import { environment } from 'src/environments/environment';
import * as Aos from 'aos';

// import AOS from 'aos';







@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})




export class ProjectDetailsComponent implements OnInit {


  // private observer:IntersectionObserver;

  constructor(private route:ActivatedRoute, private http:CommonService) {}
  project:ProjectDetail;

server = environment.server;

websiteHeroImage='';


  ngOnInit(): void {

    window.scrollTo(0,0);
    // AOS.init()
    let id:any= this.route.snapshot.paramMap.get("projectID");
    let slug:any = this.route.snapshot.paramMap.get("slug")
    this.http.getProjectById(id).subscribe(project=>{
this.project = project.data;
console.log(project.data)

    })


  Aos.init();

  this.http.getAboutMe().subscribe(res=>{
    console.log(res);
    // better make an interface so that I can see what is in the data.
    this.websiteHeroImage = environment.server + res.data.attributes.WebsiteHeroImage.data.attributes.url;

    console.log(this.websiteHeroImage);



  })




  //   const elementToTrack = document.getElementById("test")

  //   const observer = new IntersectionObserver((entries)=>{
  //     entries.forEach(entry => {
  //       console.log("Intersecting : " , entry.isIntersecting)
  //   });
  // })



}

}


//       //  let websitepages = angular.element(document.querySelectorAll(".image"));
//    let websitepages = document.querySelectorAll(".image");
//    console.log(websitepages);
//       const options = {
//         root:null, // it is the viewport
//         threshold:0,  // 0 to 1 scale. if it's 1, 100 percent of the content needs to be in viewport to fire the function. 0.25 means 25% of specified content.

//         rootMargin: "-200px", // pull margin to certain amount to change the firing point. if it's 150px, 150px below the top page will be the trigger point. It has to be either % or px.

//       };

//        // every time, the specified section is intersected (touch the top of the page), function gets triggered.
//        const observer = new IntersectionObserver(function(entries, oberver){
//         entries.forEach(entry=>{
//           console.log(entry);
//           if(entry.isIntersecting)
//           entry.target.classList.add('show');

//           else{
//             entry.target.classList.remove('show');
//           }

//           // observer.unobserve(entry.target);  // observe only once.  - useful for lazy loading
//         })
//       }, options);

//       websitepages.forEach(pages=>{
//       observer.observe(pages);
//     })


//     // observer.observe(websitepages);








  // }

