import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pill-spring',
  templateUrl: './pill-spring.component.html',
  styleUrls: ['./pill-spring.component.css']
})
export class PillSpringComponent implements OnInit {
  @Input() category: string;

  constructor() { }

  ngOnInit() {
  }

}
