import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-resume-v3',
  templateUrl: './my-resume-v3.component.html',
  styleUrls: ['./my-resume-v3.component.css']
})
export class MyResumeV3Component implements OnInit {
  url: string

  constructor() { }

  ngOnInit() {
    this.url = 'https://delrotf-resume.web.app/'
  }

}