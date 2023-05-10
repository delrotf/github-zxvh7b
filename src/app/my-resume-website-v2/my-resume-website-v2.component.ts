import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-resume-website-v2',
  templateUrl: './my-resume-website-v2.component.html',
  styleUrls: ['./my-resume-website-v2.component.css']
})
export class MyResumeWebsiteV2Component implements OnInit {
  url: string

  constructor() { }

  ngOnInit() {
    this.url = 'https://tanny-del-rosario-resume-v2.firebaseapp.com/'
  }

}
