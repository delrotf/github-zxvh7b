import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pills-java',
  templateUrl: './pills-java.component.html',
  styleUrls: ['./pills-java.component.css']
})
export class PillsJavaComponent implements OnInit {
  @Input() category: string;

  constructor() { }

  ngOnInit() {
  }

}
