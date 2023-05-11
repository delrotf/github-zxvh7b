import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.css'],
  providers: [DataService],
})
export class RibbonComponent implements OnInit {
  yearsOfExperience: number;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.yearsOfExperience = this.dataService.yearsOfExperience;
  }
}
