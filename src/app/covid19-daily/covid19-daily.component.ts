import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid19-daily',
  templateUrl: './covid19-daily.component.html',
  styleUrls: ['./covid19-daily.component.css']
})
export class Covid19DailyComponent implements OnInit {
  url: string

  constructor() { }

  ngOnInit() {
    this.url = 'https://covid19-daily.web.app/'
  }

}