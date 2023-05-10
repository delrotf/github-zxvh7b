import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-resume-website',
  templateUrl: './my-resume-website.component.html',
  styleUrls: ['./my-resume-website.component.css']
})
export class MyResumeWebsiteComponent implements OnInit {
  url: string

  constructor() { }

  ngOnInit() {
    this.url = 'https://tanny-del-rosario-resume.firebaseapp.com/'
  }

}
