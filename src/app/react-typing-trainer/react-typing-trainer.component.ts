import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-react-typing-trainer',
  templateUrl: './react-typing-trainer.component.html',
  styleUrls: ['./react-typing-trainer.component.css']
})
export class ReactTypingTrainerComponent implements OnInit {
  url: string
  constructor() { }

  ngOnInit() {
    this.url = 'https://react-typing-trainer.stackblitz.io/'
  }

}