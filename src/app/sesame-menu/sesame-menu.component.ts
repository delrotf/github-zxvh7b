import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sesame-menu',
  templateUrl: './sesame-menu.component.html',
  styleUrls: ['./sesame-menu.component.css']
})
export class SesameMenuComponent implements OnInit {
  url: string;

  constructor() { }

  ngOnInit() {
    this.url = 'https://www.sesame.menu/'
  }

}
