import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ph-flag',
  templateUrl: './ph-flag.component.html',
  styleUrls: ['./ph-flag.component.css']
})
export class PhFlagComponent implements OnInit {
  url: string

  constructor() { }


  ngOnInit() {
    this.url = 'https://css-philippine-flag.web.app/'
  }

}