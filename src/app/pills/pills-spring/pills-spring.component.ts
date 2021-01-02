import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pills-spring',
  templateUrl: './pills-spring.component.html',
  styleUrls: ['./pills-spring.component.css']
})
export class PillsSpringComponent implements OnInit {
  @Input() category: string;

  constructor() { }

  ngOnInit() {
  }

}
