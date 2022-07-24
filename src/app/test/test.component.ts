import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger, Draggable);

    this.initScrollTriggers();

    this.aboutme();
  }


  initScrollTriggers() {
    document.querySelectorAll(".box").forEach(box => {
      const scrollBox = gsap.timeline({
        scrollTrigger: {
          trigger: box,
          pin: true,
          start: "top top",
          end: "bottom bottom",
          markers: true,
          toggleActions: "play none none reverse"
        }
      });
      scrollBox.from(box, { y: 30, opacity: 0 });
    });
  }

  aboutme() {
    const aboutMeContent  = document.querySelector('.aboutMeContent');

    const scrollBox = gsap.timeline({
      scrollTrigger: {
        trigger: aboutMeContent,
        pin: true,
        start: '-150px top',
        end: 'bottom bottom',
        markers: true,
        toggleActions: 'play none none reverse',
      },
    });
    scrollBox.from(aboutMeContent, { x: 150, opacity: 0 });
  }







  }




