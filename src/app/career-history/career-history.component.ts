import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-career-history',
  templateUrl: './career-history.component.html',
  styleUrls: ['./career-history.component.css']
})
export class CareerHistoryComponent implements OnInit {
  faUserTie = faUserTie

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content);
  }
}
