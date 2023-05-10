import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.css']
})
export class RibbonComponent implements OnInit {
  yearsOfExperience: number;
  
  constructor() { }

  ngOnInit() {
    this.yearsOfExperience = environment.yearsOfExperience;
  }


}