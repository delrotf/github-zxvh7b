import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pill-java',
  templateUrl: './pill-java.component.html',
  styleUrls: ['./pill-java.component.css']
})
export class PillJavaComponent implements OnInit {
  @Input() category: string;

  constructor() { }

  ngOnInit() {
  }

}
